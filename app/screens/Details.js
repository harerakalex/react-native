import React from 'react';
import { View, Button } from 'react-native';
import Header from '../components/Header';

const Details = ({ route, navigation }) => {
  const { id, text } = route.params;
  return (
    <View>
      <Header title={text} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Details;
