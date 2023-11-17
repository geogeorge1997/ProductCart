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
          icon="camera"
          iconColor={'red'}
          size={20}
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
          <Text variant={''} style={{}} text={'undefined'} numberOfLines={1} />
          <Text variant={''} style={{}} text={'undefined'} numberOfLines={1} />
        </View>
        <View style={styles.shoppingDetailsTextLineContainer}>
          <Text variant={''} style={{}} text={'undefined'} numberOfLines={1} />
          <Text variant={''} style={{}} text={'undefined'} numberOfLines={1} />
        </View>
        <View style={styles.shoppingDetailsTextLineContainer}>
          <Text variant={''} style={{}} text={'undefined'} numberOfLines={1} />
          <Text variant={''} style={{}} text={'undefined'} numberOfLines={1} />
        </View>
        <Button
          disabled={undefined}
          backgroundColor={CONSTANTS.COLORS.SYSTEMS1}
          textColor={CONSTANTS.COLORS.BLACK1}
          text={'Proceed To Checkout'}
          onPress={() => {}}
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
    backgroundColor: 'blue',
  },
  selectItemsContainer: {
    height: '70%',
    width: '100%',
  },
  shoppingDetailsContainer: {
    height: '20%',
    width: '90%',
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  shoppingDetailsTextLineContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default ShoppingScreen;
