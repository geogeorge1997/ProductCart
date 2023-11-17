import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {type StackNavigationProp} from '@react-navigation/stack';

import {type RootStackParamList} from '../../navigators/StackNavigator/type';
import {IconButton, MD3Colors} from 'react-native-paper';
import * as UserCartActionType from '../../redux/UserCart/UserCartActionTypes';
import {useDispatch, useSelector} from 'react-redux';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

type ItemData = {
  brand: string;
  price: number;
  thumbnail: string;
  id: number;
  title: string;
};

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  dispatch: any;
  favItems: any;
  cartItems: any;
};

const Item = ({item, onPress, dispatch, favItems, cartItems}: ItemProps) => (
  <View style={styles.productItem}>
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <Image
        resizeMode="cover"
        style={styles.imageCover}
        source={{uri: item.thumbnail}}
      />
      <IconButton
        style={styles.favIcon}
        icon="camera"
        iconColor={'red'}
        size={20}
        onPress={() => {
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
      <View style={styles.itemBottomContainer}>
        <View style={styles.priceNameContainer}>
          <Text>{item.price}</Text>
          <Text>{item.brand}</Text>
        </View>
        <View style={styles.addButtonContainer}>
          <IconButton
            // style={styles.favIcon}
            icon="camera"
            iconColor={MD3Colors.error50}
            size={20}
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
          />
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const ProductItemList = () => {
  const dispatch = useDispatch();
  const DATA: any = useSelector(
    (state: any) => state.testReduxReducer.testReduxSuccess?.products,
  );

  const favItems: any = useSelector(
    (state: any) => state.userCartReducer.favSuccess,
  );

  const cartItems: any = useSelector(
    (state: any) => state.userCartReducer.cartSuccess,
  );

  const navigation = useNavigation<homeScreenProp>();

  const renderItem = ({item}: {item: ItemData}) => {
    return (
      <Item
        item={item}
        onPress={() => {
          navigation.navigate('Product', {item: item});
        }}
        dispatch={dispatch}
        favItems={favItems}
        cartItems={cartItems}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapperStyle}
        data={DATA}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    height: '100%',
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 12,
  },
  title: {
    fontSize: 32,
  },
  productItem: {
    width: 160,
    height: 194,
  },
  imageCover: {
    flex: 1,
    borderRadius: 5,
    height: '80%',
    width: '100%',
  },
  favIcon: {
    margin: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    width: 25,
    height: 25,
  },
  itemBottomContainer: {
    bottom: 0,
    left: 0,
    width: '100%',
    height: '20%',
    display: 'flex',
    flexDirection: 'row',
  },
  priceNameContainer: {
    paddingLeft: 5,
    width: '80%',
    height: '100%',
  },
  addButtonContainer: {
    paddingRight: 5,
    width: '20%',
    height: '100%',
    alignItems: 'center',
  },
  contentContainerStyle: {
    width: '100%',
    padding: 10,
    gap: 10,
  },
  columnWrapperStyle: {
    justifyContent: 'space-around',
  },
});

export default ProductItemList;
