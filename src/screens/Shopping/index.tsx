/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView, StyleSheet, View} from 'react-native';

import SelectedItems from '../../components/SelectedItems';
import Button from '../../components/Button';

import * as CONSTANTS from '../../utils/contants';

import {useNavigation} from '@react-navigation/native';
import {type StackNavigationProp} from '@react-navigation/stack';

import {type RootStackParamList} from '../../navigators/StackNavigator/type';

type shoppingScreenProp = StackNavigationProp<RootStackParamList, 'Shopping'>;

function ShoppingScreen() {
  const navigation = useNavigation<shoppingScreenProp>();
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.headerContainer}>
        <Button
          disabled={false}
          colors={CONSTANTS.COLORS}
          text={'back'}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
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
  headerContainer: {
    height: '10%',
    width: '100%',
    backgroundColor: 'blue',
  },
  selectItemsContainer: {
    height: '70%',
    width: '100%',
  },
  shoppingDetailsContainer: {
    height: '25%',
    width: '100%',
    backgroundColor: 'red',
  },
});

export default ShoppingScreen;
