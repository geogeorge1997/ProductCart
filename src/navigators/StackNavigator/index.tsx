/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../../screens/Home';
import Product from '../../screens/Product';

import Shopping from '../../screens/Shopping';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Product"
        component={Product}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Shopping"
        component={Shopping}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
