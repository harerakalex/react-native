import React, { useState } from 'react';
import { View, FlatList, Alert, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';

const ShoppingList = ({ navigation }) => {
  const [items, setItems] = useState([
    { id: '1', text: 'Milk' },
    { id: '2', text: 'Eggs' },
    { id: '3', text: 'Juice' },
    { id: '4', text: 'Bread' },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'Ok' }]);
    } else {
      setItems((prevItems) => {
        return [
          { id: `'${items.length + 1}'`, text, key: `'${items.length + 1}'` },
          ...prevItems,
        ];
      });
    }
  };

  return (
    <View>
      <Header title={'Shopping List'} />
      <AddItem addItem={addItem} />
      <FlatList
        style={styles.listWrapper}
        data={items}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            deleteItem={deleteItem}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listWrapper: {},
});

export default ShoppingList;
