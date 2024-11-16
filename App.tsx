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
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
  const styleAnimation = useAnimatedStyle(() => {

    return {
      transform: [{ translateX: drag.value + 50 }],
    };
  });

  return (
    <Reanimated.View style={styleAnimation}>
      <Text style={styles.rightAction}>Eliminar</Text>
    </Reanimated.View>
  );
}


function App(): React.JSX.Element {
  
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handlePress = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  const handleRemove = (task: string) => () => {
    console.log('handleRemove', task);
    setTasks(tasks.filter(t => t !== task));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textInput}>
        <TextInput onChangeText={setTask} value={task} placeholder='Escribe una tarea'/>
      </View>
      <View>
        <Button title='Crear' onPress={handlePress} />
      </View>
      <GestureHandlerRootView>
      {tasks.map((task, index) => (
          <ReanimatedSwipeable
          containerStyle={styles.swipeable}
          friction={2}
          enableTrackpadTwoFingerGesture
          rightThreshold={40}
          renderRightActions={RightAction}
          key={index}
          onSwipeableOpen={handleRemove(task)}
          onSwipeableClose={() => console.log('swipeable close')}
        >
            <Text>{task}</Text>
          </ReanimatedSwipeable>
        ))}
      </GestureHandlerRootView>
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
  rightAction: { 
    width: 60, 
    backgroundColor: 'red',
  },
  swipeable: {
    width: 200,
    backgroundColor: 'green',
    alignItems: 'center',
  },
});

export default App;
