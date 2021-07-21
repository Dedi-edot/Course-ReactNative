/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

const SampleComponent = () => {
  //ComponentWillUnmount
  useEffect(() => {
    return () => {
      Alert.alert('Component Unmount');
    };
  }, []);

  return (
    <View>
      <Text>Component Will Unmount</Text>
    </View>
  );
};

const Topic5 = () => {
  const [todoCount, setTodoCount] = useState(0);
  const [todoInput, setTodoInput] = useState('Hello');
  const [todoAku, setTodoAku] = useState({
    todoCount: 0,
    todoInput: 'Hello',
  });

  //   ComponentDidmount;
  useEffect(() => {
    console.log('Hello World');
  }, []);

  //ComponentDidUpdate
  useEffect(() => {
    console.log('TODO COUNT BERUBAH');
  }, [todoCount]);

  //   //componentWillUnmount
  //   useEffect(() => {
  //     return () => {
  //       console.log('Component Unmount');
  //     };
  //   }, []);

  return (
    <View>
      <View>
        <Text>Topic 5 A</Text>
        <Text>TODO COUNT : {todoCount}</Text>
        <TouchableOpacity
          onPress={() => {
            setTodoCount(100);
          }}>
          <Text>Change State to 100!!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTodoCount(todoCount + 1);
          }}>
          <Text>Increment State</Text>
        </TouchableOpacity>

        <Text>TODO Input : {todoInput}</Text>
        <TouchableOpacity
          onPress={() => {
            setTodoInput('Hello World!');
          }}>
          <Text>Change State to HelloWorld!</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Topic 5 B</Text>
        <Text>TODO COUNT : {todoAku.todoCount}</Text>
        <TouchableOpacity
          onPress={() => {
            setTodoAku({
              ...todoAku,
              todoCount: 100,
            });
          }}>
          <Text>Change State to 100!!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTodoAku({
              ...todoAku,
              todoCount: todoAku.todoCount + 1,
            });
          }}>
          <Text>Increment State</Text>
        </TouchableOpacity>

        <Text>TODO Input : {todoAku.todoInput}</Text>
        <TouchableOpacity
          onPress={() => {
            setTodoAku({
              ...todoAku,
              todoInput: 'Hello World',
            });
          }}>
          <Text>Change State to HelloWorld!</Text>
        </TouchableOpacity>
      </View>
      {todoCount === 0 ? <SampleComponent /> : null}
    </View>
  );
};

export default Topic5;
