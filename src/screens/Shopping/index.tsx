/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView, StyleSheet, View} from 'react-native';

import SelectedItems from '../../components/SelectedItems';
import Button from '../../components/Button';

import * as CONSTANTS from '../../utils/contants';

import {useNavigation} from '@react-navigation/native';
import {type StackNavigationProp} from '@react-navigation/stack';

import {type RootStackParamList} from '../../navigators/StackNavigator/type';
import {IconButton} from 'react-native-paper';
import Text from '../../components/Text';

type shoppingScreenProp = StackNavigationProp<RootStackParamList, 'Shopping'>;

function ShoppingScreen() {
  const navigation = useNavigation<shoppingScreenProp>();
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
      </View>
      <View style={styles.selectItemsContainer}>
        <SelectedItems />
      </View>
      <View style={styles.shoppingDetailsContainer}>
        <View style={styles.shoppingDetailsTextLineContainer}>
          <Text
            variant={''}
            style={{
              color: CONSTANTS.COLORS.BLACK45,
              fontFamily: 'manrope',
              fontSize: 14,
              fontWeight: 'normal',
            }}
            text={'Subtotal'}
            numberOfLines={1}
          />
          <Text
            variant={''}
            style={{
              color: CONSTANTS.COLORS.BLACK100,
              fontFamily: 'manrope',
              fontSize: 14,
              fontWeight: 'normal',
            }}
            text={'undefined'}
            numberOfLines={1}
          />
        </View>
        <View style={styles.shoppingDetailsTextLineContainer}>
          <Text
            variant={''}
            style={{
              color: CONSTANTS.COLORS.BLACK45,
              fontFamily: 'manrope',
              fontSize: 14,
              fontWeight: 'normal',
            }}
            text={'Delivery'}
            numberOfLines={1}
          />
          <Text
            variant={''}
            style={{
              color: CONSTANTS.COLORS.BLACK100,
              fontFamily: 'manrope',
              fontSize: 14,
              fontWeight: 'normal',
            }}
            text={'undefined'}
            numberOfLines={1}
          />
        </View>
        <View style={styles.shoppingDetailsTextLineContainer}>
          <Text
            variant={''}
            style={{
              color: CONSTANTS.COLORS.BLACK45,
              fontFamily: 'manrope',
              fontSize: 14,
              fontWeight: 'normal',
            }}
            text={'Total'}
            numberOfLines={1}
          />
          <Text
            variant={''}
            style={{
              color: CONSTANTS.COLORS.BLACK100,
              fontFamily: 'manrope',
              fontSize: 14,
              fontWeight: 'normal',
            }}
            text={'undefined'}
            numberOfLines={1}
          />
        </View>
        <Button
          disabled={false}
          backgroundColor={CONSTANTS.COLORS.SYSTEMS1}
          textColor={CONSTANTS.COLORS.BLACK1}
          text={'Proceed To Checkout'}
          onPress={() => {}}
          style={undefined}
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
    paddingLeft: 20,
  },
  selectItemsContainer: {
    height: '70%',
    width: '100%',
    paddingLeft: 30,
    paddingRight: 20,
  },
  shoppingDetailsContainer: {
    height: '22%',
    width: '96%',
    backgroundColor: CONSTANTS.COLORS.BLACK10,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 20,
  },
  shoppingDetailsTextLineContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
});

export default ShoppingScreen;
