import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <Navigation>
      <View></View>
    </Navigation>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
