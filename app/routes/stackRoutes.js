import React from 'react';
import { View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingList from '../screens/ShoppingList';
import Details from '../screens/Details';

const Stack = createStackNavigator();
const StackRoutes = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Shopping"
        component={ShoppingList}
        options={{
          headerTitle: () => (
            <View style={{ width: 80 }}>
              <Button title="Menu" onPress={() => navigation.openDrawer()} />
            </View>
          ),
        }}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
