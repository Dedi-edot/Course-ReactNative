import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
  },
});

const H1 = ({children, bold, color, size = styles.h1.fontSize}) => {
  return (
    <Text
      style={{
        fontFamily: bold ? 'OpenSans-Bold' : 'OpenSans-Regular',
        color,
        fontSize: size,
      }}>
      {children}
    </Text>
  );
};

export default H1;
