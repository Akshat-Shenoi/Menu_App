import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Categories = () => {
  const [data, setData] = useState(Array.from({ length: 20 }, (_, index) => ({ id: index, text: `Item ${index + 1}` })));

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>View Your Menu</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2EFE9',
    alignItems: 'center',
    marginTop: 60,
    marginLeft: 10,
    marginRight: 10
  },
  item: {
    width: 140,
    height: 140,
    margin: 10,
    backgroundColor: '#568259',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 20,
    color: '#F2EFE9',
  },
  header: {
    color: '#568259',
    fontSize: 35,
    marginBottom: 20
  }
});

export default Categories;
