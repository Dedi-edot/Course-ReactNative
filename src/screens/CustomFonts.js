import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomFonts = () => {
  return (
    <View>
      <Text>Font Regular</Text>
      <Text style={{fontFamily: 'OpenSans-Bold'}}>Font Custom</Text>
    </View>
  );
};

export default CustomFonts;
