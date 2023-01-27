import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
        <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 60,
    height: 100,
    backgroundColor: 'silver'
  },
  text: {
    fontWeight: 18,
    color: 'red',
    fontStyle: 'bold',
    textAlign: 'center'
  }
});
