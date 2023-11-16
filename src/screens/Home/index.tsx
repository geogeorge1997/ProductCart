/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Text} from 'react-native-paper';

import ProductItems from '../../components/ProductItems';

import * as CONSTANTS from '../../utils/contants';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.topContainer} />
      <View style={styles.bannerContainer} />
      <ProductItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: CONSTANTS.COLORS.SYSTEMS1,
    height: '34%',
    width: '100%',
  },
  bannerContainer: {
    // backgroundColor: CONSTANTS.COLORS.SYSTEMS1,
    height: '25%',
    width: '100%',
  },
});

export default HomeScreen;
