import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CartContext } from '../context/CartContext';
import Logo from '../assets/Logo.png'; // Import your logo
import SearchIcon from '../assets/Search.png'; // Import your search icon

const CheckoutScreen = ({ navigation }) => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemPrice}>{`$${item.price}`}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item)} style={styles.removeButton}>
                <Icon name="times-circle" size={24} color="red" />
            </TouchableOpacity>
        </View>
    );

    const getTotal = () => {
        return cartItems.reduce((sum, item) => sum + item.price, 0);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} style={styles.logo} />
                <TouchableOpacity style={styles.searchIconContainer} onPress={() => alert('Search')}>
                    <Image source={SearchIcon} style={styles.searchIcon} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.title}>CHECKOUT</Text>
                <FlatList
                    data={cartItems}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={styles.list}
                />
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>EST. TOTAL</Text>
                    <Text style={styles.totalAmount}>{`$${getTotal()}`}</Text>
                </View>
                <TouchableOpacity style={styles.checkoutButton} onPress={() => alert('Proceed to Checkout')}>
                    <Icon name="shopping-bag" size={20} color="#fff" />
                    <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    logo: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
    },
    searchIconContainer: {
        position: 'absolute',
        right: 20,
    },
    searchIcon: {
        width: 24,
        height: 24,
    },
    scrollViewContent: {
        flexGrow: 1,
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    list: {
        paddingBottom: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    itemImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    itemDetails: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
        color: '#888',
    },
    itemPrice: {
        fontSize: 16,
        color: 'red',
        marginVertical: 5,
    },
    removeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    totalText: {
        fontSize: 16,
        color: '#888',
    },
    totalAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
    },
    checkoutButton: {
        flexDirection: 'row',
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default CheckoutScreen;
