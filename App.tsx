import React from 'react';
import { View, Text, Button, Platform, StyleSheet, Alert } from 'react-native';

const App = () => {
  const isIOS = Platform.OS === 'ios';

  return (
    <View style={[styles.container, isIOS ? styles.iosContainer : styles.androidContainer]}>
      <Text style={[styles.title, isIOS ? styles.iosText : styles.androidText]}>
        {isIOS ? '¡Hola desde iOS!' : '¡Hola desde Android!'}
      </Text>
      <Button
        title={isIOS ? 'Botón en iOS' : 'Botón en Android'}
        onPress={() => Alert.alert(isIOS ? 'Botón presionado en iOS' : 'Botón presionado en Android')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iosContainer: {
    backgroundColor: '#e0f7fa', // Azul claro para iOS
  },
  androidContainer: {
    backgroundColor: '#fbe9e7', // Naranja claro para Android
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  iosText: {
    color: '#00796b', // Color verde para iOS
  },
  androidText: {
    color: '#d32f2f', // Color rojo para Android
  },
});

export default App;
