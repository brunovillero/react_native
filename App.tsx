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
  Button
} from 'react-native';

function App(): React.JSX.Element {

  const [image, setImage] = useState('dog1');

  const getImage = (image: string) => {
    switch (image) {
      case 'dog1':
        return require('./assets/dog1.jpg');
      case 'dog2':
        return require('./assets/dog2.jpeg');
      default:
        return require('./assets/dog1.jpg');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={getImage(image)} style={styles.image} />
        <Button title='Cambiar imagen' onPress={() => setImage(image === 'dog1' ? 'dog2' : 'dog1')} />
      </View>
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
