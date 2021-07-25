import React from 'react';
import {View, StatusBar} from 'react-native';
import TopicSafeAreaView from './src/screens/TopicSafeAreaView';

const App = () => {
  return (
    <View>
      <StatusBar translucent />
      <TopicSafeAreaView />
    </View>
  );
};

export default App;
