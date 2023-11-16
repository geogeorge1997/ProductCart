/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView, StyleSheet, View} from 'react-native';

import SelectedItems from '../../components/SelectedItems';

function ShoppingScreen() {
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.selectItemsContainer}>
        <SelectedItems />
      </View>
      <View style={styles.shoppingDetailsContainer} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
  },
  selectItemsContainer: {
    height: '70%',
    width: '100%',
  },
  shoppingDetailsContainer: {
    height: '25%',
    width: '100%',
    backgroundColor: 'red',
  }
});

export default ShoppingScreen;
