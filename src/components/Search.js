import React from 'react';
import { StyleSheet, Text, View, TextInput} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Search = ({term,onChangeTerm}) => {
   return (
       <View style={styles.searchBox}>
          <Ionicons style={styles.searchIcon} name="search" size={24} color="black" />
          <TextInput style={styles.textStyle} placeholder='Search' value={term} onChangeText={onChangeTerm}/>
       </View>
   )
}

const styles = StyleSheet.create(
    {
       searchBox: {
          width: '90%',
          height: 35,
          backgroundColor: '#fafafa',
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          borderRadius: 10,
          flexDirection: 'row'
       },
       searchIcon: {
          marginTop: 'auto',
          marginBottom: 'auto',
          marginLeft: 10,
          marginRight: 10
       },
       textStyle: {
          width: '80%',
       }
    }
)

export default Search;
