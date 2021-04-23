import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home'
import { SafeAreaProvider } from "react-native-safe-area-context";
import Tabs from "./src/layout/Tabs";

export default function App() {
  return (
      <SafeAreaProvider>
            <StatusBar/>
            <Home/>
      </SafeAreaProvider>
  );
}
