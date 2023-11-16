/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

function ProductScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Product!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductScreen;
