import React from 'react';
import { View, Button } from 'react-native';
import Header from '../components/Header';

const About = ({ routes, navigation }) => {
  return (
    <View>
      <Header title={'About'} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default About;
