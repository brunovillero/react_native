import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

const App = () => {
  // Obtenemos las dimensiones de la pantalla
  const { width, height } = Dimensions.get('window');

  // Variables para el tamaño de los estilos
  const [screenSize, setScreenSize] = useState('small');

  useEffect(() => {
    // Función para verificar el tamaño de la pantalla y cambiar el tamaño
    const updateScreenSize = () => {
      if (width < 375) {
        setScreenSize('small');
      } else if (width >= 375 && width < 768) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };

    updateScreenSize();

    // Escuchar cambios en las dimensiones del dispositivo
    const subscription = Dimensions.addEventListener('change', updateScreenSize);

    // Cleanup: remover el listener cuando el componente se desmonte
    return () => subscription.remove();
  }, [width, height]);

  // Definir estilos basados en el tamaño de la pantalla
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: screenSize === 'small' ? 10 : screenSize === 'medium' ? 20 : 30,
      backgroundColor: screenSize === 'small' ? '#ffcccc' : screenSize === 'medium' ? '#ccffcc' : '#ccccff',
    },
    title: {
      fontSize: screenSize === 'small' ? 20 : screenSize === 'medium' ? 30 : 40,
      fontWeight: 'bold',
      color: '#333',
    },
    subtitle: {
      fontSize: screenSize === 'small' ? 14 : screenSize === 'medium' ? 18 : 24,
      color: '#555',
      marginTop: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla {screenSize}</Text>
      <Text style={styles.subtitle}>Este contenido cambia según el tamaño de la pantalla.</Text>
    </View>
  );
};

export default App;
