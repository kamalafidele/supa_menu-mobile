import { createNativeStackNavigator } from '@react-navigation/native-stack';


import WelcomeScreen from '../screens/WelcomeScreen';
import MenuScreen from '../screens/MenuScreen';
import OrderScreen from '../screens/OrderScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name='home' 
            component={WelcomeScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen 
            name='menu' 
            component={MenuScreen}
            options={{ animation: 'slide_from_bottom', headerShown: false }}
            />
            <Stack.Screen
            name='order'
            component={OrderScreen}
            options={{ animation: 'slide_from_right', title: 'Order' }}
            />
            <Stack.Screen
            name='checkout'
            component={CheckoutScreen}
            options={{ animation: 'slide_from_bottom', title: 'Checkout' }}
            />
        </Stack.Navigator>
    )
}

export default AppNavigator;