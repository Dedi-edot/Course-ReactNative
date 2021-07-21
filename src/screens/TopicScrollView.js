/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  FlatList,
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
      todoActivity: 'Mandi Pagi',
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
      todoActivity: 'Mandi Sore',
    },
    {
      todoActivity: 'Sholat Malam',
    },
    {
      todoActivity: 'Belajar Coding',
    },
    {
      todoActivity: 'Coding Malam',
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

  // const renderTodosFlatList = todoActivity => {
  //   return <TodoCount todoActivity={todoActivity} />;
  // };

  const renderTodosFlatList = ({item}) => {
    return <TodoCount todoActivity={item.todoActivity} />;
  };

  return (
    <View style={{backgroundColor: 'lightblue', height: '100%'}}>
      {/* {renderTodos()} */}
      <FlatList
        data={todoData}
        keyExtractor={item => item.todoActivity}
        // renderItem={({item}) => <TodoCount todoActivity={item.todoActivity} />}
        // renderItem={({item}) => renderTodosFlatList(item.todoActivity)}
        renderItem={renderTodosFlatList}
      />
    </View>
  );
};

export default TopicScrollView;
