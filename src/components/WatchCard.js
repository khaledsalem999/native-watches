import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const WatchCard = ({watchName, watchModel, watchImage, watchViews, watchDelivery}) => {
   return (
       <View style={styles.container}>
          <View>
             <View style={styles.infoSection}>
                <Text style={styles.watchTitle}>{watchName}</Text>
                <Text style={styles.watchTitle}>{watchModel}</Text>
             </View>
             <View style={styles.bottomSection}>
                <View style={styles.viewsSection}>
                   <Ionicons name="person" size={20} color="black" />
                   <Text style={styles.watchTitle}>{watchViews}</Text>
                </View>
                <View style={styles.deliveryTimeSection}>
                   <MaterialCommunityIcons name="timer-sand" size={20} color="black" />
                   <Text style={styles.monthsLabel}>{watchDelivery} months</Text>
                </View>
             </View>
          </View>
          <View>
             <Image
                 source={{ uri: watchImage }}
                 style={styles.watchImage}
             />
          </View>
       </View>
   )
}

const styles = StyleSheet.create({
   container: {
      padding: 10,
      width: '100%',
      borderRadius: 10,
      backgroundColor: '#fafafa',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10
   },
   watchTitle:{
      textTransform: 'uppercase',
      fontWeight: 'bold',

   },
   infoSection:{
     marginBottom: 10
   },
   bottomSection:{
      flexDirection: 'row'
   },
   deliveryTimeSection:{
      flexDirection: 'row',
      padding: 10,
      borderColor: "#e8e8e8",
      borderWidth: 1,
      borderRadius: 10,
      width: 110,
      justifyContent: 'space-between'
   },
   viewsSection: {
      flexDirection: 'row',
      padding: 10,
      borderColor: "#e8e8e8",
      borderWidth: 1,
      borderRadius: 10,
      width: 70,
      justifyContent: 'space-between',
      marginRight: 10
   },
   monthsLabel:{
      fontWeight: 'bold'
   },
   watchImage:{
      width: 100,
      height: 100,
      marginTop: 'auto',
      marginBottom: 'auto',
      borderColor: "#e8e8e8",
      borderWidth: 1,
      borderRadius: 10
   }

});

export default WatchCard;
