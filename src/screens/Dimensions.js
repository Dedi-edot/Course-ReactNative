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

const IMAGE_WIDHT_HEIGHT = Dimensions.get('window').width * 0.7;
const MARGIN_BTN = 16;

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
  buttonC: {
    width: Dimensions.get('window').width - MARGIN_BTN * 2,
    justifyContent: 'center',
    paddingVertical: 4,
    marginHorizontal: 2,
    borderRadius: 6,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'lightblue',
  },
  image: {
    width: IMAGE_WIDHT_HEIGHT,
    height: IMAGE_WIDHT_HEIGHT,
    borderRadius: IMAGE_WIDHT_HEIGHT * 0.5,
    alignSelf: 'center',
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
      <Image source={Landscape} style={{...style.image}} />
      <TouchableOpacity style={{...style.buttonC}}>
        <Text>Button C</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopicDimensions;
