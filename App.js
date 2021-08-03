import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { AppLoading } from 'expo-app-loading';
import { ImageStore, StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const cacheImages = (images) => images.map(image => {
  if (typeof image === "string"){
    return Image.prefetch(image)
  } else {
    return Asset.fromModule(image).downloadAsync();
  }
})

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {
    const images = cacheImages(["https://unsplash.com/photos/D00DEMhNptA",
  require("./assets/splash.png")])
  };
  const onFinish = () => setIsReady(true);
  return isReady ? null : (
  <AppLoading 
  startAsync={loadAssets} 
  onFinish={onFinish} 
  onError={console.error} />);
}