import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './src/views/Home';
import Mapa from './src/views/Mapa';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Mapa
  })
)

export default function App() {
  return <Routes/>
}