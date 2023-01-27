import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text: 'Купить молоко', index: 1},
    {text: 'Помыть машину', index: 2},
    {text: 'Купить квартиру', index: 3},
    {text: 'Стать миллиардером', index: 4}
  ])


  return (
    <View> 
      <Header />
      <Form />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <ListItem el={item}/>
        )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
