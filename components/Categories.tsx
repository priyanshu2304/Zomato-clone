import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import React from 'react';

const Categories = () => {
  const items = [
    {
      id: '1',
      name: 'fastest delivery',
    },
    {
      id: '2',
      name: 'rating 4.0+',
    },
    {
      id: '3',
      name: 'offers',
    },
    {
      id: '4',
      name: 'cuisines',
    },
    {
      id: '5',
      name: 'MAX Safety',
    },
    {
      id: '6',
      name: 'Pro',
    },
  ];
  return (
    <View style={{marginTop: 10}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({item}) => (
          <Pressable
            style={{
              borderColor: 'red',
              marginHorizontal: 5,
              backgroundColor: '#cb202ed5',
              padding: 5,
              borderRadius: 5,
              borderWidth: 1,
            }}>
            <Text style={{color: 'white'}}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
