import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

import bleachIcon from '../assets/Do Not bleach.png';
import tumbleDryIcon from '../assets/Do Not Tumble Dry.png';
import dryCleanIcon from '../assets/Do Not Wash.png';
import ironIcon from '../assets/Iron Low Temperature.png';
import shippingIcon from '../assets/Shipping.png';
import plusIcon from '../assets/Plus.png';
import heartIcon from '../assets/Heart.png';

const ProductDetailScreen = ({ route }) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.itemName}>{item.title}</Text>
                    <Text style={styles.itemPrice}>{`$${item.price}`}</Text>
                    <Text style={styles.sectionTitle}>MATERIALS</Text>
                    <Text style={styles.itemMaterials}>
                        We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.
                    </Text>
                    <View style={styles.iconContainer}>
                        <View style={styles.iconRow}>
                            <Image source={bleachIcon} style={styles.icon} />
                            <Text>Do not use bleach</Text>
                        </View>
                        <View style={styles.iconRow}>
                            <Image source={tumbleDryIcon} style={styles.icon} />
                            <Text>Do not tumble dry</Text>
                        </View>
                        <View style={styles.iconRow}>
                            <Image source={dryCleanIcon} style={styles.icon} />
                            <Text>Dry clean with tetrachloroethylene</Text>
                        </View>
                        <View style={styles.iconRow}>
                            <Image source={ironIcon} style={styles.icon} />
                            <Text>Iron at a maximum of 110°C/230°F</Text>
                        </View>
                    </View>
                    <View style={styles.shippingContainer}>
                        <Image source={shippingIcon} style={styles.shippingIcon} />
                        <Text style={styles.shippingTitle}>Free Flat Rate Shipping</Text>
                    </View>
                    <Text style={styles.shippingDescription}>
                        Estimated to be delivered on 09/11/2021 - 12/11/2021.
                    </Text>
                </View>
            </ScrollView>
            <View style={styles.addToBasketContainer}>
                <Image source={plusIcon} style={styles.icon} />
                <TouchableOpacity style={styles.addToBasketButton}>
                    <Text style={styles.addToBasketButtonText}>ADD TO BASKET</Text>
                </TouchableOpacity>
                <Image source={heartIcon} style={styles.icon} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
        paddingBottom: 80, // Ensure enough space for the button at the bottom
    },
    itemImage: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    detailsContainer: {
        marginTop: 20,
    },
    itemName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    itemMaterials: {
        fontSize: 16,
        color: '#888',
        marginTop: 10,
    },
    iconContainer: {
        marginTop: 10,
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    icon: {
        width: 24,
        height: 24,
    },
    shippingContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',  // Center horizontally
    },
    shippingIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    shippingTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    shippingDescription: {
        fontSize: 11,
        color: '#888',
        marginTop: 5,
        textAlign: 'center',
    },
    addToBasketContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#000',
        padding: 20,
        margin: 10, // Add margin to create space above the button
    },
    addToBasketButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addToBasketButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProductDetailScreen;
