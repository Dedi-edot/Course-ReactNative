import React from 'react';
import {Text, SafeAreaView, StatusBar, Platform} from 'react-native';
import SafeViewGlobal from '../components/General/SafeViewGlobal';

const TopicSafeAreaView = () => {
  return (
    <SafeViewGlobal>
      <Text>Topic Safe Area View</Text>
    </SafeViewGlobal>
  );
};

export default TopicSafeAreaView;
