import React from 'react';
import {View, FlatList, StyleSheet, Dimensions, Image} from 'react-native';

export interface RenderItemProps {
  item: any;
}

export interface ProductImagesProps {
  imageList: any;
}

const RenderItem: React.FC<RenderItemProps> = ({item}) => {
  return (
    <View style={{...styles.item, width: Dimensions.get('window').width}}>
      <Image
        resizeMode="contain"
        style={styles.imageCover}
        source={{uri: item}}
      />
    </View>
  );
};

const ProductImages: React.FC<ProductImagesProps> = ({imageList}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={imageList}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={(item, index) => String(index)}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  item: {
    padding: 10,
    borderRadius: 10,
  },
  imageCover: {
    borderRadius: 5,
    height: '100%',
    width: '100%',
  },
});

export default ProductImages;
