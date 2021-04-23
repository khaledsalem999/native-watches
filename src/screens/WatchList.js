import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import WatchCard from "../components/WatchCard";
import Search from "../components/Search";
import ListOptions from "../components/ListOptions";

const WatchesList = require('../data/watches.json');


const WatchList = () => {
   const [watchesData] = useState(WatchesList);
   const [term, setTerm] = useState("");
   const [sortingTerm, setSortingTerm] = useState("");
   const [filteringTerm, setSFilteringTerm] = useState("");
   let [watchesList] = useState([]);

   // Rearranging watch objects with the variants in a complete list
   watchesList = []
   watchesData.map( watch => {
      watchesList.push(watch);
      watch.variants.map( variant => {
         watchesList.push(variant);
      })
   })

   // Sorting Handling
   switch(sortingTerm){
      case "Demand(High)":
          watchesList.sort(function(a, b) {
             return parseFloat(b.views) - parseFloat(a.views);
          });
          break;
      case "Delivery(High)":
          watchesList.sort(function(a, b) {
             return parseFloat(b.delivery_time) - parseFloat(a.delivery_time);
          });
          break;
      case "Demand(Low)":
         watchesList.sort(function(a, b) {
            return parseFloat(a.views) - parseFloat(b.views);
         });
         break;
      case "Delivery(Low)":
         watchesList.sort(function(a, b) {
            return parseFloat(a.delivery_time) - parseFloat(b.delivery_time);
         });
         break;
   }

   //Filter handling
   switch(filteringTerm){
      case "copeland":
         watchesList = watchesList.filter( watch => watch.name.toLowerCase().includes(filteringTerm.toLowerCase()));
         break;
      case "strap":
         watchesList = watchesList.filter( watch => watch.name.toLowerCase().includes(filteringTerm.toLowerCase()));
         break;
   }

   //Search Handling
   watchesList = watchesList.filter( watch => watch.name.toLowerCase().includes(term.toLowerCase()))
   return (
       <View style={{ backgroundColor: 'white', flex: 1 }}>
          <Search term={term} onChangeTerm={(newTerm) => {setTerm(newTerm);}}/>
          <ListOptions sortingValue={item => {setSortingTerm(item)}} filterValue={item => setSFilteringTerm(item)}/>
          <ScrollView style={{ padding: 20, paddingTop: 0 }}>
             {
                watchesList.map(watch => (
                    <View key={watch.model_code}>
                       <WatchCard watchName={watch.name}
                                  watchModel={watch.model_code}
                                  watchImage={watch.image}
                                  watchViews={watch.views}
                                  watchDelivery={watch.delivery_time}/>
                    </View>
                ))
             }
          </ScrollView>
       </View>
   )
}

export default WatchList;
