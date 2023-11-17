import React from 'react';
import {StyleSheet, View, Image, SafeAreaView} from 'react-native';

import Button from '../../components/Button';

import * as CONSTANTS from '../../utils/contants';
import * as STYLES from '../../utils/styles';
import {IconButton, MD3Colors} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import {type StackNavigationProp} from '@react-navigation/stack';

import {type RootStackParamList} from '../../navigators/StackNavigator/type';
import Text from '../../components/Text';
import ProductImages from '../../components/ProductImages';
import * as UserCartActionType from '../../redux/UserCart/UserCartActionTypes';
import {useDispatch, useSelector} from 'react-redux';

type productScreenProp = StackNavigationProp<RootStackParamList, 'Product'>;

const RatingContainer = () => {
  const rating = Math.round(3.6);
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
      <Text variant={''} style={{}} text={'undefined'} numberOfLines={1} />
      <Text variant={''} style={{}} text={'undefined'} numberOfLines={1} />
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
          icon="camera"
          iconColor={'red'}
          size={20}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <IconButton
          // style={styles.favIcon}
          icon="camera"
          iconColor={'red'}
          size={20}
          onPress={() => {}}
        />
      </View>
      <View style={styles.titleBoxContainer}>
        <Text variant={''} style={{}} text={item.brand} numberOfLines={1} />
        <Text variant={''} style={{}} text={item.title} numberOfLines={1} />
      </View>
      <View style={styles.ratingBoxContainer}>
        <RatingContainer />
      </View>
      <View style={styles.imageBoxContainer}>
        <ProductImages imageList={item.images} />
      </View>
      <View style={styles.priceBoxContainer}>
        <Text
          variant={''}
          style={{color: CONSTANTS.COLORS.SYSTEMS1}}
          text={item.price}
          numberOfLines={1}
        />
        <View style={{paddingLeft: 20}} />
        <Text
          variant={''}
          style={{
            backgroundColor: CONSTANTS.COLORS.SYSTEMS1,
            color: CONSTANTS.COLORS.BLACK1,
          }}
          text={item.discountPercentage}
          numberOfLines={1}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View>
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
          />
        </View>
        <View>
          <Button
            disabled={false}
            text={'Buy Now'}
            onPress={() => {
              navigation.navigate('Shopping');
            }}
            backgroundColor={CONSTANTS.COLORS.SYSTEMS1}
            textColor={CONSTANTS.COLORS.BLACK1}
          />
        </View>
      </View>
      <View style={styles.detailsBoxContainer}>
        <Text
          variant={''}
          style={{color: CONSTANTS.COLORS.BLACK90}}
          text={'Details'}
          numberOfLines={1}
        />
        <Text
          variant={''}
          style={{color: CONSTANTS.COLORS.BLACK45}}
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
  },
  headerContainer: {
    height: '10%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleBoxContainer: {
    height: '20%',
    width: '100%',
    backgroundColor: 'red',
  },
  ratingBoxContainer: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBoxContainer: {
    height: '30%',
    width: '100%',
    alignItems: 'center',
  },
  priceBoxContainer: {
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 20,
  },
  buttonContainer: {
    height: '10%',
    width: '100%',
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  detailsBoxContainer: {
    height: '20%',
    width: '100%',
  },
  productImg: {
    width: '100%',
    height: '100%',
  },
  star: {
    width: 40,
    height: 40,
  },
});

export default ProductScreen;
