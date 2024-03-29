/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {StyleSheet, View, SafeAreaView, Dimensions} from 'react-native';

import ProductItems from '../../components/ProductItems';
import * as TestReduxActionType from '../../redux/TestRedux/TestReduxActionTypes';
import * as CONSTANTS from '../../utils/contants';
import {useDispatch} from 'react-redux';
import Text from '../../components/Text';
import {IconButton} from 'react-native-paper';
import TextInput from '../../components/TextInput';
import OfferBox from '../../components/OfferBox';

function HomeScreen() {
  const dispatch = useDispatch();

  const [iconValue, setIconValue] = useState(1);

  const offerList = [
    'https://i.dummyjson.com/data/products/1/1.jpg',
    'https://i.dummyjson.com/data/products/1/2.jpg',
    'https://i.dummyjson.com/data/products/1/3.jpg',
    'https://i.dummyjson.com/data/products/1/4.jpg',
    'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  ];

  const padding20 = 20;

  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    dispatch({
      type: TestReduxActionType.TEST_REDUX_REQUEST,
      payload: {payloadData: 'data'},
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View
        style={{
          ...styles.topContainer,
          height: (30 * Dimensions.get('window').height) / 100,
        }}>
        <View style={{paddingTop: padding20}} />
        <View style={styles.group1Container}>
          <Text
            variant={''}
            style={styles.blackBold30}
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
        <View style={{paddingTop: padding20}} />
        <View style={styles.textInputContainer}>
          <TextInput
            keyboardType={false}
            multiline={false}
            maxLength={100}
            placeholder={'Search Product or store'}
            value={textInput}
            editable={true}
            textColor={CONSTANTS.COLORS.BLACK1}
            placeholderTextColor={CONSTANTS.COLORS.BLACK20}
            style={styles.borderRadius28}
            setTextInput={setTextInput}
          />
        </View>
        <View style={{paddingTop: padding20}} />
        <View style={styles.group1Container}>
          <Text
            variant={''}
            style={styles.black20Bold14}
            text={'DELIVERY TO'}
            numberOfLines={1}
          />
          <Text
            variant={''}
            style={styles.black20Bold14}
            text={'WITHIN'}
            numberOfLines={1}
          />
        </View>
        <View style={styles.group1Container}>
          <Text
            variant={''}
            style={styles.black1Normal14}
            text={'Green Way 3000, Sylhet'}
            numberOfLines={1}
          />
          <Text
            variant={''}
            style={styles.black1Normal14}
            text={'1 Hour'}
            numberOfLines={1}
          />
        </View>
        <View style={{paddingTop: padding20}} />
      </View>
      <View
        style={{
          ...styles.bannerContainer,
          height: (18 * Dimensions.get('window').height) / 100,
        }}>
        <OfferBox offerList={offerList} />
      </View>
      <View
        style={{
          ...styles.recommendationContainer,
          height: (6 * Dimensions.get('window').height) / 100,
        }}>
        <Text
          variant={''}
          style={styles.black100Normal30}
          text={'Recommended'}
          numberOfLines={1}
        />
      </View>
      <View
        style={{
          ...styles.productContainer,
          height: (44 * Dimensions.get('window').height) / 100,
        }}>
        <ProductItems />
      </View>
      <View style={styles.tabBarContainer}>
        <View
          style={
            iconValue === 1
              ? {
                  ...styles.favIconSelected,
                  left: Dimensions.get('window').width / 5 - 30,
                }
              : {
                  ...styles.favIcon,
                  left: Dimensions.get('window').width / 5 - 30,
                }
          }>
          <IconButton
            icon="home-variant"
            iconColor={
              iconValue === 1
                ? CONSTANTS.COLORS.SYSTEMS3
                : CONSTANTS.COLORS.BLACK100
            }
            size={30}
            onPress={() => {
              setIconValue(1);
            }}
          />
          {iconValue === 1 ? null : (
            <Text
              variant={''}
              style={styles.barIconText}
              text={'Home'}
              numberOfLines={1}
            />
          )}
        </View>
        <View
          style={
            iconValue === 2
              ? {
                  ...styles.favIconSelected,
                  left: (2 * Dimensions.get('window').width) / 5 - 30,
                }
              : {
                  ...styles.favIcon,
                  left: (2 * Dimensions.get('window').width) / 5 - 30,
                }
          }>
          <IconButton
            icon="view-list" // dots-grid
            iconColor={
              iconValue === 2
                ? CONSTANTS.COLORS.SYSTEMS3
                : CONSTANTS.COLORS.BLACK100
            }
            size={30}
            onPress={() => {
              setIconValue(2);
            }}
          />
          {iconValue === 2 ? null : (
            <Text
              variant={''}
              style={styles.barIconText}
              text={'Categories'}
              numberOfLines={1}
            />
          )}
        </View>
        <View
          style={
            iconValue === 3
              ? {
                  ...styles.favIconSelected,
                  left: (3 * Dimensions.get('window').width) / 5 - 30,
                }
              : {
                  ...styles.favIcon,
                  left: (3 * Dimensions.get('window').width) / 5 - 30,
                }
          }>
          <IconButton
            icon="cards-heart"
            iconColor={
              iconValue === 3
                ? CONSTANTS.COLORS.SYSTEMS3
                : CONSTANTS.COLORS.BLACK100
            }
            size={30}
            onPress={() => {
              setIconValue(3);
            }}
          />
          {iconValue === 3 ? null : (
            <Text
              variant={''}
              style={styles.barIconText}
              text={'Favourite'}
              numberOfLines={1}
            />
          )}
        </View>
        <View
          style={
            iconValue === 4
              ? {
                  ...styles.favIconSelected,
                  left: (4 * Dimensions.get('window').width) / 5 - 30,
                }
              : {
                  ...styles.favIcon,
                  left: (4 * Dimensions.get('window').width) / 5 - 30,
                }
          }>
          <IconButton
            icon="dots-vertical"
            iconColor={
              iconValue === 4
                ? CONSTANTS.COLORS.SYSTEMS3
                : CONSTANTS.COLORS.BLACK100
            }
            size={30}
            onPress={() => {
              setIconValue(4);
            }}
          />
          {iconValue === 4 ? null : (
            <Text
              variant={''}
              style={styles.barIconText}
              text={'More'}
              numberOfLines={1}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  topContainer: {
    backgroundColor: CONSTANTS.COLORS.SYSTEMS1,
    width: '100%',
  },
  bannerContainer: {
    width: '100%',
  },
  productContainer: {
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
    width: '100%',
    paddingLeft: 20,
  },
  tabBarContainer: {
    height: '8%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: CONSTANTS.COLORS.BLACK1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 30,
  },
  textInputContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  favIcon: {
    // margin: 5,
    position: 'absolute',
    bottom: 5,
    zIndex: 1,
    height: '100%',
    width: 50,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  favIconSelected: {
    // margin: 5,
    position: 'absolute',
    bottom: 20,
    zIndex: 1,
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: CONSTANTS.COLORS.BLACK100,
    borderRadius: 50,
  },
  barIconText: {
    color: CONSTANTS.COLORS.BLACK45,
    fontFamily: 'manrope',
    fontSize: 10,
    fontWeight: 'normal',
  },
  blackBold30: {
    color: CONSTANTS.COLORS.BLACK1,
    fontFamily: 'manrope',
    fontSize: 30,
    fontWeight: 'bold',
  },
  borderRadius28: {
    backgroundColor: CONSTANTS.COLORS.SYSTEMS2,
    borderRadius: 28,
  },
  black20Bold14: {
    color: CONSTANTS.COLORS.BLACK20,
    fontFamily: 'manrope',
    fontSize: 14,
    fontWeight: 'bold',
  },
  black1Normal14: {
    color: CONSTANTS.COLORS.BLACK1,
    fontFamily: 'manrope',
    fontSize: 14,
    fontWeight: 'normal',
  },
  black100Normal30: {
    color: CONSTANTS.COLORS.BLACK100,
    fontFamily: 'manrope',
    fontSize: 30,
    fontWeight: 'normal',
  },
});

export default HomeScreen;
