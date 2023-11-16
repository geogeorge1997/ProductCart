import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
  <View
    style={{
      width: 160,
      height: 194,
    }}>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>
  </View>
);

const ProductItemList = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ProductItemList;
