import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';

const App: React.FC = () => {
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'No se puede acceder a la ubicación del dispositivo.');
        setHasPermission(false);
        return;
      }

      setIsLoading(true);
      const userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation.coords); // Almacenar latitud y longitud
      setHasPermission(true);
      setIsLoading(false);
    } catch (error) {
      Alert.alert('Error', 'No se pudo obtener la ubicación.');
      setHasPermission(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Obteniendo ubicación...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No se puede acceder a la ubicación. Por favor, habilite los permisos.</Text>
        <Button title="Reintentar" onPress={getLocation} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ubicación actual:</Text>
      {location ? (
        <View>
          <Text style={styles.text}>Latitud: {location.latitude}</Text>
          <Text style={styles.text}>Longitud: {location.longitude}</Text>
        </View>
      ) : (
        <Text style={styles.text}>Esperando ubicación...</Text>
      )}
      <Button title="Obtener ubicación" onPress={getLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
});

export default App;
