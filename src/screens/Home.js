import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../layout/Header'
import Tabs from "../layout/Tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Home = () => {
   return (
       <SafeAreaProvider>
          <Header/>
          <Tabs/>
       </SafeAreaProvider>
   )
}

export default Home;
