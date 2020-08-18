import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar as statusBarSize,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackRoutes from './app/routes/stackRoutes';
import About from './app/screens/About';
import Home from './app/screens/Home';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Shopping List" component={StackRoutes} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? statusBarSize.currentHeight : 0,
  },
});
