/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const WelcomeText = props => {
  return <Text>{props.input}</Text>;
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    color: 'red',
  },
  heading1: {
    fontSize: 36,
    color: 'blue',
    fontWeight: 'bold',
  },
  boxBlue: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
  boxRed: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  boxGreen: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
});

const Topic123 = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={style.textStyle}>Hello World</Text>
      <Text style={style.heading1}>Hello Teman Teman</Text>
      <Text style={{...style.heading1, color: 'green'}}>
        React <Text style={{color: 'lightblue'}}>Native</Text>
      </Text>
      <WelcomeText input="Selamat Datang" />
      <View style={{...style.boxBlue}} />
      <View style={{...style.boxRed}} />
      <View style={{...style.boxGreen}} />
    </View>
  );
};

export default Topic123;
