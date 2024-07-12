
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        loadCartItems();
    }, []);

    useEffect(() => {
        saveCartItems();
    }, [cartItems]);

    const loadCartItems = async () => {
        try {
            const storedCartItems = await AsyncStorage.getItem('cartItems');
            if (storedCartItems) {
                setCartItems(JSON.parse(storedCartItems));
            }
        } catch (error) {
            console.error('Failed to load cart items from storage:', error);
        }
    };

    const saveCartItems = async () => {
        try {
            await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
        } catch (error) {
            console.error('Failed to save cart items to storage:', error);
        }
    };

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (item) => {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
