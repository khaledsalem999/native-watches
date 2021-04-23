import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WatchList from "../screens/WatchList";
import Clients from "../screens/Clients";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
   const insets = useSafeAreaInsets();
   return (
       <NavigationContainer>
          <Tab.Navigator
              initialRouteName='WatchList'
              tabBarOptions={{
                 activeTintColor: 'black',
                 inactiveColor: '#f0f0f0',
                 labelStyle: { fontSize: 12, fontWeight: 'bold' },
                 indicatorStyle: {backgroundColor: 'black'},
                 style: { backgroundColor: 'white', marginTop: insets.top, elevation: 0, borderBottomWidth: 1 }
              }}
          >
             <Tab.Screen name="Clients" component={Clients} options={{ tabBarLabel: 'Clients' }}/>
             <Tab.Screen name="WatchList" component={WatchList} options={{ tabBarLabel: 'Watch List' }}/>
          </Tab.Navigator>
       </NavigationContainer>
   )
}

export default Tabs;
