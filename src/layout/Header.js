import React from 'react';
import { StyleSheet, Text, View} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Header = () => {
   return (
       <View style={styles.header}>
          <Text style={styles.headerText}>Welcome Sirhan</Text>
          <View style={styles.headerButtons}>
             <AntDesign name='pluscircle' size={21} color="black" style={styles.addIcon}/>
             <MaterialIcons name='menu' size={28} />
          </View>
       </View>
   )
}

const styles = StyleSheet.create(
    {
       header: {
          width: '100%',
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20
       },
       headerText: {
          fontWeight: 'bold',
          fontSize: 20,
          letterSpacing: 1
       },
       headerButtons: {
          flexDirection: 'row',
       },
       addIcon: {
          marginTop: 'auto',
          marginBottom: 'auto',
          marginRight: 15
       }
    }
)

export default Header;
