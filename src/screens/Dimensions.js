import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import Landscape from '../assets/images/landscape.jpg';

const style = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width > 350 ? 175 : 105,
    justifyContent: 'center',
    paddingVertical: 4,
    marginHorizontal: 2,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonA: {
    backgroundColor: 'lightblue',
  },
  buttonB: {
    backgroundColor: 'pink',
  },
});

const TopicDimensions = () => {
  return (
    <View>
      <Text>DIMENSIONS</Text>
      <Text>Width: {parseInt(Dimensions.get('window').width)}</Text>
      <Text>Height: {parseInt(Dimensions.get('window').height)}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity style={{...style.button, ...style.buttonA}}>
          <Text>Button A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...style.button, ...style.buttonB}}>
          <Text>Button B</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={Landscape}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').width,
        }}
      />
    </View>
  );
};

export default TopicDimensions;
