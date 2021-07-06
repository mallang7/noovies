import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AppLoading} from 'expo';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  const [isReady, setIsReady] = useState(false)
  const loadAssets = async () =>{};
  const onfinish = () => setIsReady(true);
  return isReady ? null : (<AppLoading 
  startAsync={loadAssets} 
  onFinish={onFinish} 
  onError={console.error} />);
}


