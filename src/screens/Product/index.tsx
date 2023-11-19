/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet, View, Image, SafeAreaView} from 'react-native';

import Button from '../../components/Button';

import * as CONSTANTS from '../../utils/contants';
import {IconButton} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import {type StackNavigationProp} from '@react-navigation/stack';

import {type RootStackParamList} from '../../navigators/StackNavigator/type';
import Text from '../../components/Text';
import ProductImages from '../../components/ProductImages';
import * as UserCartActionType from '../../redux/UserCart/UserCartActionTypes';
import {useDispatch, useSelector} from 'react-redux';

type productScreenProp = StackNavigationProp<RootStackParamList, 'Product'>;

const padding6 = 6;
const padding20 = 20;

export interface RatingBoxProps {
  item: any;
}

const RatingContainer: React.FC<RatingBoxProps> = ({item}) => {
  const rating = Math.round(item.rating);
  return (
    <>
      <Image
        style={styles.star}
        source={{
          uri:
            rating >= 1
              ? 'https://img.icons8.com/android/24/FAB005/filled-star.png'
              : 'https://img.icons8.com/color/40/000000/star.png',
        }}
      />
      <Image
        style={styles.star}
        source={{
          uri:
            rating >= 2
              ? 'https://img.icons8.com/android/24/FAB005/filled-star.png'
              : 'https://img.icons8.com/color/40/000000/star.png',
        }}
      />
      <Image
        style={styles.star}
        source={{
          uri:
            rating >= 3
              ? 'https://img.icons8.com/android/24/FAB005/filled-star.png'
              : 'https://img.icons8.com/color/40/000000/star.png',
        }}
      />
      <Image
        style={styles.star}
        source={{
          uri:
            rating >= 4
              ? 'https://img.icons8.com/android/24/FAB005/filled-star.png'
              : 'https://img.icons8.com/color/40/000000/star.png',
        }}
      />
      <Image
        style={styles.star}
        source={{
          uri:
            rating >= 5
              ? 'https://img.icons8.com/android/24/FAB005/filled-star.png'
              : 'https://img.icons8.com/color/40/000000/star.png',
        }}
      />
      <View style={{paddingLeft: padding6}} />
      <Text
        variant={''}
        style={styles.black20Normal16}
        text={String(item.stock) + ' Reviews'}
        numberOfLines={1}
      />
    </>
  );
};

const addFav = (favItems: any, item: any, dispatch: any) => {
  let favItemsCopy = favItems;
  const res = favItems[item.id];
  if (res) {
    delete favItemsCopy[item.id];
  } else {
    favItemsCopy[item.id] = true;
  }
  dispatch({
    type: UserCartActionType.USER_CART_LOADING_REQUEST,
    payload: true,
  });
  dispatch({
    type: UserCartActionType.ADD_FAV_REQUEST,
    payload: {payloadData: favItemsCopy},
  });
};

const addToCart = (cartItems: any, item: any, dispatch: any) => {
  let cartItemsCopy = cartItems;
  const res = cartItems[item.id];
  if (res) {
    // cartItemsCopy[item.id].count += 1;
    // delete cartItemsCopy[item.id];
  } else {
    cartItemsCopy[item.id] = item;
    // cartItemsCopy[item.id].count = 1;
  }
  dispatch({
    type: UserCartActionType.ADD_CART_REQUEST,
    payload: {payloadData: cartItemsCopy},
  });
};

function ProductScreen() {
  const route: any = useRoute();
  const navigation = useNavigation<productScreenProp>();

  const item = route.params?.item;

  const dispatch = useDispatch();

  const favItems: any = useSelector(
    (state: any) => state.userCartReducer.favSuccess,
  );

  const cartItems: any = useSelector(
    (state: any) => state.userCartReducer.cartSuccess,
  );

  const isUserCartLoading: any = useSelector(
    (state: any) => state.userCartReducer.isUserCartLoading,
  );

  useEffect(() => {
    if (isUserCartLoading) {
      dispatch({
        type: UserCartActionType.USER_CART_LOADING_REQUEST,
        payload: false,
      });
    }
  }, [isUserCartLoading]);

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.headerContainer}>
        <IconButton
          icon="arrow-left"
          iconColor={CONSTANTS.COLORS.BLACK100}
          size={40}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <IconButton
          icon="shopping-outline"
          iconColor={CONSTANTS.COLORS.BLACK100}
          size={40}
          onPress={() => {}}
        />
      </View>
      <View style={styles.titleBoxContainer}>
        <Text
          variant={''}
          style={styles.black100Normal50}
          text={item.brand}
          numberOfLines={1}
        />
        <Text
          variant={''}
          style={styles.black100Bold50}
          text={item.title}
          numberOfLines={1}
        />
      </View>
      <View style={styles.ratingBoxContainer}>
        <RatingContainer item={item} />
      </View>
      <View style={styles.imageBoxContainer}>
        <IconButton
          style={styles.favIcon}
          icon={favItems[item.id] ? 'cards-heart' : 'cards-heart-outline'}
          iconColor="red"
          size={20}
          onPress={() => addFav(favItems, item, dispatch)}
        />
        <ProductImages imageList={item.images} />
      </View>
      <View style={styles.priceBoxContainer}>
        <Text
          variant={''}
          style={styles.system1Bold20}
          text={'$' + String(item.price)}
          numberOfLines={1}
        />
        <View style={{paddingLeft: padding20}} />
        <Text
          variant={''}
          style={{
            ...styles.black1Normal20,
            backgroundColor: CONSTANTS.COLORS.SYSTEMS1,
            borderRadius: padding6,
            paddingLeft: padding6,
            paddingRight: padding6,
          }}
          text={String(item.discountPercentage) + ' OFF'}
          numberOfLines={1}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          disabled={false}
          text={'Add To Cart'}
          onPress={() => addToCart(cartItems, item, dispatch)}
          backgroundColor={CONSTANTS.COLORS.BLACK1}
          textColor={CONSTANTS.COLORS.SYSTEMS1}
          style={{
            ...styles.buttonStyle,
            borderColor: CONSTANTS.COLORS.SYSTEMS1,
          }}
        />
        <Button
          disabled={false}
          text={'Buy Now'}
          onPress={() => {
            addToCart(cartItems, item, dispatch);
            navigation.navigate('Shopping');
          }}
          backgroundColor={CONSTANTS.COLORS.SYSTEMS1}
          textColor={CONSTANTS.COLORS.BLACK1}
          style={{
            ...styles.buttonStyle,
            borderColor: CONSTANTS.COLORS.SYSTEMS1,
          }}
        />
      </View>
      <View style={styles.detailsBoxContainer}>
        <Text
          variant={''}
          style={styles.black90Normal18}
          text={'Details'}
          numberOfLines={1}
        />
        <View style={{paddingBottom: padding6}} />
        <Text
          variant={''}
          style={styles.black45Normal14}
          text={item.description}
          numberOfLines={undefined}
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleBoxContainer: {
    height: '18%',
    width: '100%',
    paddingLeft: 20,
    justifyContent: 'center',
  },
  ratingBoxContainer: {
    width: '100%',
    height: '4%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  imageBoxContainer: {
    height: '40%',
    width: '100%',
    alignItems: 'center',
  },
  priceBoxContainer: {
    height: '6%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 20,
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height: '10%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  detailsBoxContainer: {
    height: '14%',
    width: '100%',
    paddingLeft: 20,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  productImg: {
    width: '100%',
    height: '100%',
  },
  star: {
    width: 20,
    height: 20,
  },
  favIcon: {
    margin: 5,
    position: 'absolute',
    top: 10,
    right: 10,
    width: 25,
    height: 25,
    zIndex: 1,
  },
  black20Normal16: {
    color: CONSTANTS.COLORS.BLACK20,
    fontFamily: 'manrope',
    fontSize: 16,
    fontWeight: 'normal',
  },
  black100Normal50: {
    color: CONSTANTS.COLORS.BLACK100,
    fontFamily: 'manrope',
    fontSize: 50,
    fontWeight: 'normal',
  },
  black100Bold50: {
    color: CONSTANTS.COLORS.BLACK100,
    fontFamily: 'manrope',
    fontSize: 50,
    fontWeight: 'bold',
  },
  system1Bold20: {
    color: CONSTANTS.COLORS.SYSTEMS1,
    fontFamily: 'manrope',
    fontSize: 20,
    fontWeight: 'bold',
  },
  black1Normal20: {
    color: CONSTANTS.COLORS.BLACK1,
    fontFamily: 'manrope',
    fontSize: 20,
    fontWeight: 'normal',
  },
  buttonStyle: {
    height: 56,
    borderRadius: 20,
    borderWidth: 1,
  },
  black90Normal18: {
    color: CONSTANTS.COLORS.BLACK90,
    fontFamily: 'manrope',
    fontSize: 18,
    fontWeight: 'normal',
  },
  black45Normal14: {
    color: CONSTANTS.COLORS.BLACK45,
    fontFamily: 'manrope',
    fontSize: 14,
    fontWeight: 'normal',
  },
});

export default ProductScreen;
