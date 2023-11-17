import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

const ProductCard = ({item, onIncrement, onDecrement}) => {
  return (
    <View style={styles.productCard}>
      <Image source={{uri: item.thumbnail}} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)} </Text>
      </View>
      <View style={styles.productAmount}>
        <TouchableOpacity style={styles.amountButton} onPress={onDecrement}>
          <Text style={styles.amountButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.amountText}>{item.count}</Text>
        <TouchableOpacity style={styles.amountButton} onPress={onIncrement}>
          <Text style={styles.amountButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SelectedItems = () => {
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
    setProducts(
      products.map(product =>
        product.id === item.id
          ? {...product, count: product.count + 1}
          : product,
      ),
    );
  };

  const handleDecrement = item => {
    setProducts(
      products.map(product =>
        product.id === item.id
          ? {...product, count: Math.max(0, product.count - 1)}
          : product,
      ),
    );
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
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: 40,
  },
  productList: {
    flex: 1,
    paddingTop: 16,
  },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    padding: 16,
    marginBottom: 16,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    marginRight: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  productPriceText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#666',
  },
  productAmount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountButton: {
    width: 30,
    height: 30,
    backgroundColor: '#ffa726',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
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
});

export default SelectedItems;
