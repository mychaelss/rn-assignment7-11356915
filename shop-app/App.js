import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CartProvider } from './context/CartContext';
import CheckoutScreen from './screens/CheckoutScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import HomeScreen from './screens/HomeScreen';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerContent = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <TouchableOpacity onPress={() => navigation.navigate('Michael Ocansey')}>
      <Text style={{ fontSize: 18, padding: 16 ,marginTop:60}}>MICHAEL OCANSEY</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Store')}>
      <Text style={{ fontSize: 18, padding: 16 ,marginTop:20}}>Store</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Locations')}>
      <Text style={{ fontSize: 18, padding: 16 }}>Locations</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Blog')}>
      <Text style={{ fontSize: 18, padding: 16 }}>Blog</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Jewelry')}>
      <Text style={{ fontSize: 18, padding: 16 }}>Jewelry</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Electronic')}>
      <Text style={{ fontSize: 18, padding: 16 }}>Electronic</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Clothing')}>
      <Text style={{ fontSize: 18, padding: 16 }}>Clothing</Text>
    </TouchableOpacity>
  </View>
);

const StackNavigator = () => (
<Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    <Stack.Screen name="Checkout" component={CheckoutScreen} />
  </Stack.Navigator>
    
);


export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name=" " component={StackNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
