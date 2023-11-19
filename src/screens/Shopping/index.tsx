/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView, StyleSheet, View} from 'react-native';

import SelectedItems from '../../components/SelectedItems';
import Button from '../../components/Button';

import * as CONSTANTS from '../../utils/contants';

import {useNavigation} from '@react-navigation/native';
import {type StackNavigationProp} from '@react-navigation/stack';

import {type RootStackParamList} from '../../navigators/StackNavigator/type';
import {IconButton} from 'react-native-paper';
import Text from '../../components/Text';
import {useEffect, useState} from 'react';

type shoppingScreenProp = StackNavigationProp<RootStackParamList, 'Shopping'>;

function ShoppingScreen() {
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(10);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItemsNum, setCartItemsNum] = useState(0);

  useEffect(() => {
    if (subTotalPrice > 100) {
      setTotalPrice(subTotalPrice + 10);
      setDeliveryPrice(10);
    } else {
      setTotalPrice(subTotalPrice);
      setDeliveryPrice(0);
    }
  }, [subTotalPrice]);

  const navigation = useNavigation<shoppingScreenProp>();
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.headerContainer}>
        <IconButton
          // style={styles.favIcon}
          icon="arrow-left"
          iconColor={CONSTANTS.COLORS.BLACK100}
          size={40}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text
          variant={''}
          style={styles.titleText}
          text={`Shopping Cart(${cartItemsNum})`}
          numberOfLines={1}
        />
      </View>
      <View style={styles.selectItemsContainer}>
        <SelectedItems
          setCartItemsNum={setCartItemsNum}
          setSubTotalPrice={setSubTotalPrice}
        />
      </View>
      <View style={styles.shoppingDetailsContainer}>
        <View style={styles.shoppingDetailsTextLineContainer}>
          <Text
            variant={''}
            style={styles.black45Normal14}
            text={'Subtotal'}
            numberOfLines={1}
          />
          <Text
            variant={''}
            style={styles.black100Normal14}
            text={'$' + String(subTotalPrice)}
            numberOfLines={1}
          />
        </View>
        <View style={styles.shoppingDetailsTextLineContainer}>
          <Text
            variant={''}
            style={styles.black45Normal14}
            text={'Delivery'}
            numberOfLines={1}
          />
          <Text
            variant={''}
            style={styles.black100Normal14}
            text={'$' + String(deliveryPrice)}
            numberOfLines={1}
          />
        </View>
        <View style={styles.shoppingDetailsTextLineContainer}>
          <Text
            variant={''}
            style={styles.black45Normal14}
            text={'Total'}
            numberOfLines={1}
          />
          <Text
            variant={''}
            style={styles.black100Normal14}
            text={'$' + String(totalPrice)}
            numberOfLines={1}
          />
        </View>
        <Button
          disabled={false}
          backgroundColor={CONSTANTS.COLORS.SYSTEMS1}
          textColor={CONSTANTS.COLORS.BLACK1}
          text={'Proceed To Checkout'}
          onPress={() => {}}
          style={{}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: CONSTANTS.COLORS.BLACK1,
  },
  headerContainer: {
    height: '8%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
  },
  selectItemsContainer: {
    height: '70%',
    width: '100%',
    paddingLeft: 30,
    paddingRight: 20,
  },
  shoppingDetailsContainer: {
    height: '22%',
    width: '96%',
    backgroundColor: CONSTANTS.COLORS.BLACK10,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 20,
  },
  shoppingDetailsTextLineContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  black45Normal14: {
    color: CONSTANTS.COLORS.BLACK45,
    fontFamily: 'manrope',
    fontSize: 14,
    fontWeight: 'normal',
  },
  black100Normal14: {
    color: CONSTANTS.COLORS.BLACK100,
    fontFamily: 'manrope',
    fontSize: 14,
    fontWeight: 'normal',
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: CONSTANTS.COLORS.BLACK100,
    fontFamily: 'manrope',
  },
});

export default ShoppingScreen;
