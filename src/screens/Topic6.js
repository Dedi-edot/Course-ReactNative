/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import Landscape from '../assets/images/landscape.jpg';

const Topic6 = () => {
  return (
    <View>
      <Text>Topic 6</Text>
      <Image
        source={Landscape}
        style={{width: 200, height: 200, resizeMode: 'contain'}}
      />
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1580654712603-eb43273aff33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        }}
        style={{width: 200, height: 200, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default Topic6;
