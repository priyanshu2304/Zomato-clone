import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type HotelProps = {
  restaurant: {
    id: String;
    featured_image: String;
    name: String;
    cuisines: String;
    average_cost_for_two?: Number;
    aggregate_rating: Number;
    adress: String;
    smalladress: String;
    offer: String;
    no_of_Delivery: Number;
    latitude: Number;
    longitude: Number;
    time: String;
  };
};
const Hotels = ({restaurant}: HotelProps) => {
  return (
    <View>
      <Text>ID: {restaurant.id}</Text>
      <Text>Name: {restaurant.name}</Text>
      <Text>Cuisines: {restaurant.cuisines}</Text>
      {/* Add more Text components for other properties as needed */}
    </View>
  );
};

export default Hotels;

const styles = StyleSheet.create({});
