/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect, useState } from 'react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

interface Movie {
  Title: string;
  Plot: string;
  Poster: string;
}

function Movie(props: Movie): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.Poster }} style={styles.image} />
      <Text style={styles.text}>{props.Title}</Text>
      <Text style={styles.text}>{props.Plot}</Text>
    </View>
  );
}

function App(): React.JSX.Element {
  
  const [text, setText] = useState('');
  const [movie, setMovie] = useState<Movie | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleTextChange = (text: string) => {
    setText(text);
  }

  const getMovie = async () => {
    if(text !== '') {
      const response = await fetch(`https://www.omdbapi.com/?apikey=f1229b68&t=${text}`);
      if(response.status !== 200) {
        setMovie(null);
        setErrorMessage('No se encontró el título');
      } else{
        const data = await response.json();
        setMovie(data);
      }
    } else {
      setMovie(null);
      setErrorMessage('Ingrese un título');
    }
  }

  useEffect(() => {
    getMovie();
  }, [text]);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textInput}>
        <TextInput onChangeText={handleTextChange} value={text} style={styles.textInput} placeholder='Ingrese un texto' />
      </View>
      <View>
      </View>
      {
        errorMessage !== '' && <Text style={styles.text}>{errorMessage}</Text>
      }
      {
        movie !== null && <Movie Title={movie.Title} Plot={movie.Plot} Poster={movie.Poster} />
      }
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
  image: {
    width: 200,
    height: 200,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default App;
