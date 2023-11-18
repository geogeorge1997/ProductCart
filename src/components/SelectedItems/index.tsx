import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import Text from '../Text';

import * as CONSTANTS from '../../utils/contants';

const ProductCard = ({item, onIncrement, onDecrement}) => {
  return (
    <View style={styles.productCard}>
      <Image source={{uri: item.thumbnail}} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text
          style={styles.productName}
          variant={''}
          text={item.title}
          numberOfLines={1}
        />
        <Text
          style={styles.productPrice}
          variant={''}
          text={item.price.toFixed(2)}
          numberOfLines={1}
        />
      </View>
      <View style={styles.productAmount}>
        <TouchableOpacity style={styles.amountButton} onPress={onDecrement}>
          <Text
            style={styles.amountButtonText}
            variant={''}
            text={'-'}
            numberOfLines={1}
          />
        </TouchableOpacity>
        <View style={{paddingRight: 4}} />
        <Text
          style={styles.amountText}
          variant={''}
          text={item.count}
          numberOfLines={1}
        />
        <View style={{paddingRight: 4}} />
        <TouchableOpacity style={styles.amountButton} onPress={onIncrement}>
          <Text
            style={styles.amountButtonText}
            variant={''}
            text={'+'}
            numberOfLines={1}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SelectedItems = ({setSubTotalPrice}) => {
  const dispatch = useDispatch();

  const cartItems: any = useSelector(
    (state: any) => state.userCartReducer.cartSuccess,
  );

  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const array = [];
    for (const key in cartItems) {
      if (cartItems.hasOwnProperty(key)) {
        console.log(cartItems[key]);
        array.push(cartItems[key]);
      }
    }
    setProducts(array);
  }, []);

  const handleIncrement = item => {
    let subTotal = 0;
    setProducts(
      products.map(product => {
        if (product.id === item.id) {
          subTotal += product.price * (product.count + 1);
          return {...product, count: product.count + 1};
        } else {
          subTotal += product.price * product.count;
          return product;
        }
      }),
    );
    setSubTotalPrice(subTotal);
  };

  const handleDecrement = item => {
    let subTotal = 0;
    setProducts(
      products.map(product => {
        if (product.id === item.id) {
          subTotal += product.price * (product.count - 1);
          return {...product, count: Math.max(0, product.count - 1)};
        } else {
          subTotal += product.price * product.count;
          return product;
        }
      }),
    );
    setSubTotalPrice(subTotal);
  };

  const myItemSeparator = (): JSX.Element => {
    return <View style={styles.ItemSeparatorComponentStyle} />;
  };

  const renderProductItem = ({item}) => (
    <ProductCard
      item={item}
      onIncrement={() => handleIncrement(item)}
      onDecrement={() => handleDecrement(item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        style={styles.productList}
        renderItem={renderProductItem}
        ItemSeparatorComponent={myItemSeparator}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productList: {
    flex: 1,
    paddingTop: 16,
  },
  productCard: {
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 8,
    marginTop: 8,
  },
  productImage: {
    width: 40,
    height: 40,
    borderRadius: 35,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    marginRight: 6,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: CONSTANTS.COLORS.BLACK100,
    fontFamily: 'manrope',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'normal',
    color: CONSTANTS.COLORS.BLACK100,
    fontFamily: 'manrope',
  },
  productAmount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountButton: {
    width: 30,
    height: 30,
    backgroundColor: CONSTANTS.COLORS.BLACK20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountButtonText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: CONSTANTS.COLORS.BLACK100,
    fontFamily: 'manrope',
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: CONSTANTS.COLORS.BLACK100,
    fontFamily: 'manrope',
  },
  continueButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: '#4caf50',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ItemSeparatorComponentStyle: {
    height: 1,
    paddingVertical: 1,
    backgroundColor: CONSTANTS.COLORS.BLACK20,
  },
});

export default SelectedItems;
