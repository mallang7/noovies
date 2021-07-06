import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo-app-loading';
import { ImageStore, StyleSheet, Text, View } from 'react-native';

const cacheImages = (images) => images.map(image => {
  if (typeof image === "string"){
    return Image.prefetch(image)
  } else {
    return Asset.fromModule(image).downloadAsync();
  }
})

export default function App() {
  const [isReady, setIsReady] = useState(false)
  const loadAssets = async () =>{};
  const onFinish = () => setIsReady(true);
  return isReady ? null : (
  <AppLoading 
  startAsync={loadAssets} 
  onFinish={onFinish} 
  onError={console.error} />);
}