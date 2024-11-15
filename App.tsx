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
  Button
} from 'react-native';

function App(): React.JSX.Element {
  
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <Button title="Incrementar" onPress={increment} />
      </View>
      <View style={styles.button}>
        <Button title="Decrementar" onPress={decrement} />
      </View>
      <Text style={styles.text}>{count}</Text>
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
    color: 'black',
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
  },
  button: {
    margin: 10,
    width: 200,
  },
});

export default App;
