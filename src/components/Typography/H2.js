import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  h2: {
    fontSize: 28,
  },
});

const H2 = ({children, bold, color, size = styles.h2.fontSize}) => {
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

export default H2;
