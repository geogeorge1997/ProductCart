/* eslint-disable react/react-in-jsx-scope */
import {useEffect} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import ProductItems from '../../components/ProductItems';
import * as TestReduxActionType from '../../redux/TestRedux/TestReduxActionTypes';
import * as CONSTANTS from '../../utils/contants';
import {useDispatch, useSelector} from 'react-redux';

function HomeScreen() {
  const dispatch = useDispatch();
  const testReduxReducerDatas: any = useSelector(
    (state: any) => state.testReduxReducer,
  );

  console.log('testReduxReducerDatas - ', testReduxReducerDatas);

  useEffect(() => {
    dispatch({
      type: TestReduxActionType.TEST_REDUX_REQUEST,
      payload: {payloadData: 'data'},
    });
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.topContainer} />
      <View style={styles.bannerContainer} />
      <ProductItems />
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
});

export default HomeScreen;
