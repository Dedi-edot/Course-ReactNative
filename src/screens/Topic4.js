/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {padding, margin} from '../styles';
import {card} from '../styles/card';

const Topic4 = () => {
  return (
    <View>
      <Text>Topic 4</Text>
      <View
        style={{
          borderColor: 'blue',
          borderWidth: 1,
          ...padding.p3,
          ...margin.m4,
          ...card.cardContainer,
        }}>
        <Text>Ini Contoh Padding</Text>
      </View>
    </View>
  );
};

export default Topic4;
