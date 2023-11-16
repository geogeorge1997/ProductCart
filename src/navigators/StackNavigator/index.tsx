/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../../screens/Home';
import Product from '../../screens/Product';

import Shopping from '../../screens/Shopping';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Shopping" component={Shopping} />
    </Stack.Navigator>
  );
}

export default MyStack;
