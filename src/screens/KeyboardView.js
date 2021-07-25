import React from 'react';
import {
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
} from 'react-native';
import {padding} from '../styles';

const style = StyleSheet.create({
  container: {
    height: 800,
  },
  textInput: {
    borderRadius: 16,
    marginHorizontal: 32,
    marginVertical: 8,
    backgroundColor: 'lightgrey',
  },
  headerMain: {
    height: 60,
    backgroundColor: 'lightblue',
    padding: 8,
    borderRightWidth: 1,
    borderBottomColor: 'red',
  },
  headerAndroid: {
    backgroundColor: 'lightblue',
    borderBottomColor: 'red',
  },
  headerIos: {
    backgroundColor: 'red',
    borderBottomColor: 'lightblue',
  },
});

const KeyboardView = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <>
        <View
          style={{
            ...style.headerMain,
            ...Platform.select({
              ios: style.headerIos,
              android: style.headerAndroid,
            }),
          }}>
          <Text>PLATFORM HEADER</Text>
        </View>
        <ScrollView contentContainerStyle={{...style.container}}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : 'position'}
            keyboardVerticalOffset={0}>
            <TextInput style={{...style.textInput}} />
            <TextInput style={{...style.textInput}} />
            <TextInput style={{...style.textInput}} />
            <TextInput style={{...style.textInput}} />
            <TextInput style={{...style.textInput}} />
            <TextInput style={{...style.textInput}} />
            <TextInput style={{...style.textInput}} />
            <TextInput style={{...style.textInput}} />
            <TextInput style={{...style.textInput}} />
            <TextInput style={{...style.textInput}} />
            <TextInput style={{...style.textInput}} />
            <TextInput style={{...style.textInput}} />
          </KeyboardAvoidingView>
        </ScrollView>
      </>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardView;
