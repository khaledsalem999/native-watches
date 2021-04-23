import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import PickerItem from "react-native-web/dist/exports/Picker/PickerItem";

const ListOptions = ({ sortingValue, filterValue }) => {
   const [selectedSortingValue, setSelectedSortingValue] = useState("");
   const [selectedFilteringValue, setSelectedFilteringValue] = useState("");
   return (
       <View style={styles.optionsContainer}>
          <MaterialCommunityIcons style={styles.iconsSpacing} name="sort" size={19} color="black" />
          <View style={{flexDirection: 'row'}}>
             <Text style={{marginRight: 20}}>Sort By:</Text>
             <Picker style={styles.pickerStyle} onValueChange={(itemValue, itemIndex) => {setSelectedSortingValue(itemValue); sortingValue(itemValue)}} selectedValue={selectedSortingValue}>
                <PickerItem label='Nothing' value='Nothing'/>
                <PickerItem label='Demand(High)' value='Demand(High)'/>
                <PickerItem label='Delivery(High)' value='Delivery(High)'/>
                <PickerItem label='Demand(Low)' value='Demand(Low)'/>
                <PickerItem label='Delivery(Low)' value='Delivery(Low)'/>
             </Picker>
          </View>
          <Ionicons style={styles.iconsSpacing} name="ios-filter" size={15} color="black" />
          <Picker style={styles.filterPickerStyle} onValueChange={(itemValue, itemIndex) => {setSelectedFilteringValue(itemValue); filterValue(itemValue)}} selectedValue={selectedFilteringValue}>
             <PickerItem label='Filter' value='Filter'/>
             <PickerItem label='Copeland' value='copeland'/>
             <PickerItem label='Strap' value='strap'/>
          </Picker>
       </View>
   )
}

const styles = StyleSheet.create(
    {
       optionsContainer: {
          width: '90%',
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          marginBottom: 20,
          flexDirection: 'row',
          justifyContent: 'flex-end'
       },
       iconsSpacing: {
          marginTop: 'auto',
          marginBottom: 'auto',
          marginRight: 5
       },
       pickerStyle:{
          backgroundColor: 'white',
          width: 100,
          marginTop: -15,
          marginBottom: -30,
          marginLeft: -25
       },
       filterPickerStyle:{
          backgroundColor: 'white',
          width: 65,
          marginTop: -15,
          marginBottom: -30,
          marginLeft: -10
       }
    }
)

export default ListOptions;
