/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import ProductItems from '../../components/ProductItems';
import * as TestReduxActionType from '../../redux/TestRedux/TestReduxActionTypes';
import * as CONSTANTS from '../../utils/contants';
import {useDispatch, useSelector} from 'react-redux';
import Text from '../../components/Text';
import {IconButton} from 'react-native-paper';
import TextInput from '../../components/TextInput';
import OfferBox from '../../components/OfferBox';

function HomeScreen() {
  const dispatch = useDispatch();

  const [offerList, setOfferList] = useState([
    'https://i.dummyjson.com/data/products/1/1.jpg',
    'https://i.dummyjson.com/data/products/1/2.jpg',
    'https://i.dummyjson.com/data/products/1/3.jpg',
    'https://i.dummyjson.com/data/products/1/4.jpg',
    'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  ]);

  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    dispatch({
      type: TestReduxActionType.TEST_REDUX_REQUEST,
      payload: {payloadData: 'data'},
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.topContainer}>
        <View style={{paddingTop: 20}} />
        <View style={styles.group1Container}>
          <Text
            variant={''}
            style={{
              color: CONSTANTS.COLORS.BLACK1,
              fontFamily: 'manrope',
              fontSize: 30,
              fontWeight: 'bold',
            }}
            text={'Hey, Rahul'}
            numberOfLines={1}
          />
          <IconButton
            // style={styles.favIcon}
            icon="shopping-search"
            iconColor={CONSTANTS.COLORS.BLACK1}
            size={30}
            onPress={() => {}}
          />
        </View>
        <View style={{paddingTop: 20}} />
        <View style={styles.textInputContainer}>
          <TextInput
            colors={CONSTANTS.COLORS}
            keyboardType={false}
            multiline={false}
            maxLength={100}
            placeholder={'Search Product or store'}
            value={textInput}
            editable={true}
            textColor={CONSTANTS.COLORS.BLACK1}
            placeholderTextColor={CONSTANTS.COLORS.BLACK20}
            style={{
              backgroundColor: CONSTANTS.COLORS.SYSTEMS2,
              borderRadius: 28,
            }}
            setTextInput={setTextInput}
          />
        </View>
        <View style={{paddingTop: 20}} />
        <View style={styles.group1Container}>
          <Text
            variant={''}
            style={{
              color: CONSTANTS.COLORS.BLACK20,
              fontFamily: 'manrope',
              fontSize: 14,
              fontWeight: 'bold',
            }}
            text={'DELIVERY TO'}
            numberOfLines={1}
          />
          <Text
            variant={''}
            style={{
              color: CONSTANTS.COLORS.BLACK20,
              fontFamily: 'manrope',
              fontSize: 14,
              fontWeight: 'bold',
            }}
            text={'WITHIN'}
            numberOfLines={1}
          />
        </View>
        <View style={styles.group1Container}>
          <Text
            variant={''}
            style={{
              color: CONSTANTS.COLORS.BLACK1,
              fontFamily: 'manrope',
              fontSize: 14,
              fontWeight: 'normal',
            }}
            text={'Green Way 3000, Sylhet'}
            numberOfLines={1}
          />
          <Text
            variant={''}
            style={{
              color: CONSTANTS.COLORS.BLACK1,
              fontFamily: 'manrope',
              fontSize: 14,
              fontWeight: 'normal',
            }}
            text={'1 Hour'}
            numberOfLines={1}
          />
        </View>
        <View style={{paddingTop: 20}} />
      </View>
      <View style={styles.bannerContainer}>
        <OfferBox offerList={offerList} />
      </View>
      <View style={styles.recommendationContainer}>
        <Text
          variant={''}
          style={{
            color: CONSTANTS.COLORS.BLACK100,
            fontFamily: 'manrope',
            fontSize: 30,
            fontWeight: 'normal',
          }}
          text={'Recommended'}
          numberOfLines={1}
        />
      </View>
      <View style={styles.productContainer}>
        <ProductItems />
      </View>
      <View style={styles.tabBarContainer} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: CONSTANTS.COLORS.SYSTEMS1,
    height: '30%',
    width: '100%',
  },
  bannerContainer: {
    // backgroundColor: CONSTANTS.COLORS.SYSTEMS1,
    height: '20%',
    width: '100%',
  },
  productContainer: {
    // backgroundColor: CONSTANTS.COLORS.SYSTEMS1,
    height: '44%',
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
  },
  group1Container: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recommendationContainer: {
    height: '6%',
    width: '100%',
    paddingLeft: 20,
  },
  tabBarContainer: {
    height: '6%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'yellow',
  },
  textInputContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default HomeScreen;
