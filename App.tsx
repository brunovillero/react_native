/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  FlatList,
  ImageSourcePropType
} from 'react-native';

const ImageItem = ({ imageSource, imageDescription }: { imageSource: ImageSourcePropType, imageDescription: string }) => {
  return (
    <View>
      <Image source={imageSource} style={styles.image} />
      <Text>{imageDescription}</Text>
    </View>
  );
};

function App(): React.JSX.Element {

  const flatListData = [
    { imageSource: require('./assets/dog1.jpg'), imageDescription: 'Imagen 1' },
    { imageSource: require('./assets/dog2.jpeg'), imageDescription: 'Imagen 2' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={flatListData}
        renderItem={({ item }) => <ImageItem imageSource={item.imageSource} imageDescription={item.imageDescription} />}
        keyExtractor={(item, index) => index.toString()}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
    borderWidth: 1,
    borderColor: 'black',
  }
});

export default App;
