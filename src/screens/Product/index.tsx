import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

import Button from '../../components/Button';

import * as CONSTANTS from '../../utils/contants';
import * as STYLES from '../../utils/styles';

import {useNavigation} from '@react-navigation/native';
import {type StackNavigationProp} from '@react-navigation/stack';

import {type RootStackParamList} from '../../navigators/StackNavigator/type';

type productScreenProp = StackNavigationProp<RootStackParamList, 'Product'>;

function ProductScreen() {
  const navigation = useNavigation<productScreenProp>();
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.headerContainer}>
        <Button
          disabled={false}
          colors={CONSTANTS.COLORS}
          text={'back'}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={styles.titleBoxContainer}>
        <Text>Title</Text>
      </View>
      <View style={styles.imageBoxContainer}>
        <Image
          style={styles.productImg}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3v7KDJN7TAoJa5sFaPWcp1HX8JFcpF3z5K3ngz4L6kWoEP7Ca',
          }}
        />
      </View>
      <View style={styles.priceBoxContainer}>
        <Text>Price Box</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          disabled={false}
          colors={CONSTANTS.COLORS}
          text={'Nothing'}
          onPress={() => {}}
        />
        <Button
          disabled={false}
          colors={CONSTANTS.COLORS}
          text={'Nothing'}
          onPress={() => {
            navigation.navigate('Shopping');
          }}
        />
      </View>
      <View style={styles.detailsBoxContainer} />
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
    backgroundColor: 'blue',
  },
  titleBoxContainer: {
    height: '20%',
    width: '100%',
    backgroundColor: 'red',
  },
  imageBoxContainer: {
    height: '30%',
    width: '100%',
    alignItems: 'center',
  },
  priceBoxContainer: {
    height: '10%',
  },
  buttonContainer: {
    height: '20%',
    width: '100%',
    backgroundColor: 'red',
    ...STYLES.FLEX_ROW_CENTER,
  },
  detailsBoxContainer: {
    height: '20%',
    width: '100%',
    backgroundColor: 'blue',
  },
  productImg: {
    width: '100%',
    height: '100%',
  },
});

export default ProductScreen;
