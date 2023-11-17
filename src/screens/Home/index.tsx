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

  useEffect(() => {
    dispatch({
      type: TestReduxActionType.TEST_REDUX_REQUEST,
      payload: {payloadData: 'data'},
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.topContainer}>
        <View style={styles.group1Container}>
          <Text variant={''} style={{}} text={'undefined'} numberOfLines={1} />
          <IconButton
            // style={styles.favIcon}
            icon="camera"
            iconColor={'red'}
            size={20}
            onPress={() => {}}
          />
        </View>
        <TextInput
          colors={CONSTANTS.COLORS}
          keyboardType={false}
          multiline={false}
          maxLength={100}
          placeholder={'Search Product or store'}
          value={''}
          editable={false}
          style={undefined}
          setTextInput={() => {}}
        />
        <View style={styles.group1Container}>
          <Text variant={''} style={{}} text={'undefined'} numberOfLines={1} />
          <Text variant={''} style={{}} text={'undefined'} numberOfLines={1} />
        </View>
        <View style={styles.group1Container}>
          <Text variant={''} style={{}} text={'undefined'} numberOfLines={1} />
          <Text variant={''} style={{}} text={'undefined'} numberOfLines={1} />
        </View>
      </View>
      <View style={styles.bannerContainer}>
        <OfferBox offerList={offerList} />
      </View>
      <View style={styles.recommendationContainer}>
        <Text variant={''} style={{}} text={'undefined'} numberOfLines={1} />
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
    height: '34%',
    width: '100%',
  },
  bannerContainer: {
    // backgroundColor: CONSTANTS.COLORS.SYSTEMS1,
    height: '25%',
    width: '100%',
  },
  productContainer: {
    // backgroundColor: CONSTANTS.COLORS.SYSTEMS1,
    height: '40%',
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
  },
  group1Container: {
    height: '10%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recommendationContainer: {
    height: '10%',
    width: '100%',
  },
  tabBarContainer: {
    height: '10%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'yellow',
  },
});

export default HomeScreen;
