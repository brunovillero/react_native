import { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { CameraView, CameraType, useCameraPermissions, CameraPictureOptions } from 'expo-camera';

export default function Index() {
  
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraReady, setCameraReady] = useState(false);
  const cameraRef = useRef<CameraView>(null);
  const [image, setImage] = useState<string>('');

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Se necesitan permisos para mostrar la camara</Text>
        <Button onPress={requestPermission} title="Dar permisos" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function takePicture() {
    if (cameraReady && cameraRef.current) {
      const options: CameraPictureOptions = {
        quality: 0.5,
        base64: true,
        skipProcessing: true
      }

      cameraRef.current.takePictureAsync(options)
        .then((picture) => {
          if (picture && picture.uri) {
            setImage(picture.uri);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} onCameraReady={() => setCameraReady(true)} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Voltear la camara</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Tomar foto</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      {
        image &&
        <Image source={{ uri: image }} style={styles.image} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  image : {
    width: 'auto',
    height: 300,
  }
});