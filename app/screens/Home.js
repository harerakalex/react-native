import React from 'react';
import { ImageBackground, StyleSheet, View, Button } from 'react-native';

const image = require('../assets/mypic.jpeg');

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Button
          style={styles.btn}
          title={'Expole more'}
          color={'darkslateblue'}
          onPress={() => navigation.navigate('Shopping List')}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  btn: {
    width: '100%',
    height: 70,
    backgroundColor: 'darkslateblue',
  },
});

export default Home;
