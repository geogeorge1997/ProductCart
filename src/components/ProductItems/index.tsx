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

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acb46-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Fourth Item',
  },
  {
    id: '3ac6yifc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Fifth Item',
  },
  {
    id: '58694a12-3da1-471f-bd96-145571e29d72',
    title: 'Sixth Item',
  },
  {
    id: 'bd7acbea-c1we-46c2-aed5-3ad53abb28ba',
    title: 'Seventh Item',
  },
  {
    id: '3ac68ati-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Eight Item',
  },
  {
    id: '58694aqw-3da1-471f-bd96-145571e29d72',
    title: 'NinethItem',
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <View style={styles.productItem}>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, {backgroundColor}]}>
      <Image
        resizeMode="cover"
        style={styles.imageCover}
        source={{uri: 'https://picsum.photos/700'}}
      />
      <IconButton
        style={styles.favIcon}
        icon="camera"
        iconColor={MD3Colors.error50}
        size={20}
        onPress={() => console.log('Pressed')}
      />
      <View style={styles.itemBottomContainer}>
        <View style={styles.priceNameContainer}>
          <Text>AAA</Text>
          <Text>AAA</Text>
        </View>
        <View style={styles.addButtonContainer}>
          <IconButton
            // style={styles.favIcon}
            icon="camera"
            iconColor={MD3Colors.error50}
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const ProductItemList = () => {
  const navigation = useNavigation<homeScreenProp>();
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
          navigation.navigate('Product');
          return setSelectedId(item.id);
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
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
    height: '100%',
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '20%',
    display: 'flex',
    flexDirection: 'row',
  },
  priceNameContainer: {
    width: '80%',
    height: '100%',
  },
  addButtonContainer: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
  },
});

export default ProductItemList;
