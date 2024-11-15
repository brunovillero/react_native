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
  Text,
  View,
  TextInput
} from 'react-native';

function App(): React.JSX.Element {
  
  const [text, setText] = useState('');
  
  const handleTextChange = (text: string) => {
    setText(text);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textInput}>
        <TextInput onChangeText={handleTextChange} value={text} style={styles.textInput} placeholder='Ingrese un texto' />
      </View>
      <View>
      </View>
      <Text style={styles.text}>{text}</Text>
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
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue',
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
  },
  textInput: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    color: 'red',
    fontSize: 20,
  },
});

export default App;
