import React from 'react';
import {StyleSheet, View, Image, SafeAreaView} from 'react-native';

import Button from '../../components/Button';

import * as CONSTANTS from '../../utils/contants';
import * as STYLES from '../../utils/styles';
import {IconButton} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import {type StackNavigationProp} from '@react-navigation/stack';

import {type RootStackParamList} from '../../navigators/StackNavigator/type';
import Text from '../../components/Text';
import ProductImages from '../../components/ProductImages';
import * as UserCartActionType from '../../redux/UserCart/UserCartActionTypes';
import {useDispatch, useSelector} from 'react-redux';

type productScreenProp = StackNavigationProp<RootStackParamList, 'Product'>;

const RatingContainer = ({item}) => {
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
      <View style={{paddingLeft: 5}} />
      <Text
        variant={''}
        style={{
          color: CONSTANTS.COLORS.BLACK20,
          fontFamily: 'manrope',
          fontSize: 16,
          fontWeight: 'normal',
        }}
        text={String(item.stock) + ' Reviews'}
        numberOfLines={1}
      />
    </>
  );
};

function ProductScreen() {
  const route = useRoute();
  const navigation = useNavigation<productScreenProp>();

  console.log('route - ', route.params?.item);

  const item = route.params?.item;

  const dispatch = useDispatch();

  const favItems: any = useSelector(
    (state: any) => state.userCartReducer.favSuccess,
  );

  const cartItems: any = useSelector(
    (state: any) => state.userCartReducer.cartSuccess,
  );

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
        <IconButton
          // style={styles.favIcon}
          icon="shopping-outline"
          iconColor={CONSTANTS.COLORS.BLACK100}
          size={40}
          onPress={() => {}}
        />
      </View>
      <View style={styles.titleBoxContainer}>
        <Text
          variant={''}
          style={{
            color: CONSTANTS.COLORS.BLACK100,
            fontFamily: 'manrope',
            fontSize: 50,
            fontWeight: 'normal',
          }}
          text={item.brand}
          numberOfLines={1}
        />
        <Text
          variant={''}
          style={{
            color: CONSTANTS.COLORS.BLACK100,
            fontFamily: 'manrope',
            fontSize: 50,
            fontWeight: 'bold',
          }}
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
          icon="heart"
          iconColor={favItems[item.id] ? 'red' : 'blue'}
          size={20}
          onPress={() => {
            console.log('favItems[item.id] - ', favItems[item.id]);
            let favItemsCopy = favItems;
            const res = favItems[item.id];
            if (res) {
              delete favItemsCopy[item.id];
            } else {
              favItemsCopy[item.id] = true;
            }
            dispatch({
              type: UserCartActionType.ADD_FAV_REQUEST,
              payload: {payloadData: favItemsCopy},
            });
          }}
        />
        <ProductImages imageList={item.images} />
      </View>
      <View style={styles.priceBoxContainer}>
        <Text
          variant={''}
          style={{
            color: CONSTANTS.COLORS.SYSTEMS1,
            fontFamily: 'manrope',
            fontSize: 20,
            fontWeight: 'bold',
          }}
          text={'$' + String(item.price)}
          numberOfLines={1}
        />
        <View style={{paddingLeft: 20}} />
        <Text
          variant={''}
          style={{
            backgroundColor: CONSTANTS.COLORS.SYSTEMS1,
            color: CONSTANTS.COLORS.BLACK1,
            borderRadius: 6,
            fontFamily: 'manrope',
            fontSize: 20,
            fontWeight: 'normal',
            paddingLeft: 6,
            paddingRight: 6,
          }}
          text={String(item.discountPercentage) + ' OFF'}
          numberOfLines={1}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          disabled={false}
          text={'Add To Cart'}
          onPress={() => {
            let cartItemsCopy = cartItems;
            const res = cartItems[item.id];
            if (res) {
              cartItemsCopy[item.id].count += 1;
            } else {
              cartItemsCopy[item.id] = item;
              cartItemsCopy[item.id].count = 1;
            }
            dispatch({
              type: UserCartActionType.ADD_CART_REQUEST,
              payload: {payloadData: cartItemsCopy},
            });
          }}
          backgroundColor={CONSTANTS.COLORS.BLACK1}
          textColor={CONSTANTS.COLORS.SYSTEMS1}
          style={{
            height: '100%',
            borderColor: CONSTANTS.COLORS.SYSTEMS1,
            borderRadius: 20,
            borderWidth: 1,
          }}
        />
        <Button
          disabled={false}
          text={'Buy Now'}
          onPress={() => {
            navigation.navigate('Shopping');
          }}
          backgroundColor={CONSTANTS.COLORS.SYSTEMS1}
          textColor={CONSTANTS.COLORS.BLACK1}
          style={{
            height: '100%',
            borderColor: CONSTANTS.COLORS.SYSTEMS1,
            borderRadius: 20,
            borderWidth: 1,
          }}
        />
      </View>
      <View style={styles.detailsBoxContainer}>
        <Text
          variant={''}
          style={{
            color: CONSTANTS.COLORS.BLACK90,
            fontFamily: 'manrope',
            fontSize: 18,
            fontWeight: 'normal',
          }}
          text={'Details'}
          numberOfLines={1}
        />
        <View style={{paddingBottom: 6}} />
        <Text
          variant={''}
          style={{
            color: CONSTANTS.COLORS.BLACK45,
            fontFamily: 'manrope',
            fontSize: 14,
            fontWeight: 'normal',
          }}
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
    height: '20%',
    width: '100%',
    paddingLeft: 20,
    justifyContent: 'center',
  },
  ratingBoxContainer: {
    width: '100%',
    height: '6%',
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
    height: '8%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  detailsBoxContainer: {
    height: '12%',
    width: '100%',
    paddingLeft: 20,
    justifyContent: 'center',
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
});

export default ProductScreen;
