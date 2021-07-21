/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import {primaryBrand, secondaryBrand} from '../styles/colors';
import {padding, margin} from '../styles/index';

const todoItemStyles = StyleSheet.create({
  todoItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: secondaryBrand,
    ...margin.mx3,
    ...margin.my1,
    ...padding.px3,
    ...padding.py2,
    borderRadius: 4,
    alignItems: 'center',
  },
  todoBtn: {
    ...padding.px2,
    ...padding.p1,
    ...margin.mx1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Todo = [{}];

const TodoCount = ({todoActivity}) => {
  return (
    <View
      style={{
        ...todoItemStyles.todoItemContainer,
      }}>
      <Text>{todoActivity}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableHighlight
          style={{backgroundColor: primaryBrand, ...todoItemStyles.todoBtn}}
          activeOpacity={(0, 3)}
          underlayColor="white"
          onPress={() => {
            null;
          }}>
          <Text>Done</Text>
        </TouchableHighlight>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{...todoItemStyles.todoBtn, backgroundColor: secondaryBrand}}>
          <Text style={{color: 'white'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TopicScrollView = () => {
  const todoData = [
    {
      todoActivity: 'Mandi',
    },
    {
      todoActivity: 'Sholat',
    },
    {
      todoActivity: 'Tilawah',
    },
    {
      todoActivity: 'Belajar',
    },
    {
      todoActivity: 'Coding',
    },
    {
      todoActivity: 'Rebahan',
    },
    {
      todoActivity: 'Mandi',
    },
    {
      todoActivity: 'Makan',
    },
    {
      todoActivity: 'Minum',
    },
    {
      todoActivity: 'Bermain',
    },
    {
      todoActivity: 'Mandi',
    },
    {
      todoActivity: 'Sholat',
    },
    {
      todoActivity: 'Belajar',
    },
    {
      todoActivity: 'Coding',
    },
    {
      todoActivity: 'Tidur',
    },
  ];

  const renderTodos = () => {
    return todoData.map((todo, index) => {
      return <TodoCount key={index} todoActivity={todo.todoActivity} />;
    });
  };

  return (
    <ScrollView style={{backgroundColor: 'lightblue', height: '100%'}}>
      {renderTodos()}
    </ScrollView>
  );
};

export default TopicScrollView;
