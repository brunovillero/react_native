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
  TextInput,
  Button
} from 'react-native';

function App(): React.JSX.Element {
  
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handlePress = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  const handleRemove = (task: string) => () => {
    setTasks(tasks.filter(t => t !== task));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textInput}>
        <TextInput onChangeText={setTask} value={task} />
      </View>
      <View>
        <Button title='Crear' onPress={handlePress} />
      </View>
      <View>
        {tasks.map((task, index) => (
          <View>
            <Text>{task}</Text>
            <Button title='Remover' onPress={handleRemove(task)}/>
          </View>
        ))}
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
    margin: 20
  },
});

export default App;
