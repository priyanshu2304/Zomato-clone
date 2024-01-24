import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionics from 'react-native-vector-icons/Ionicons';
type HotelProps = {
  restaurant: {
    id: String;
    featured_image: string;
    name: String;
    cuisines: String;
    average_cost_for_two?: Number;
    aggregate_rating: number;
    adress: String;
    smalladress: String;
    offer: String;
    no_of_Delivery: number;
    latitude: Number;
    longitude: Number;
    time: String;
  };
};
const Hotels = ({restaurant}: HotelProps) => {
  const {
    id,
    featured_image,
    name,
    cuisines,
    average_cost_for_two,
    aggregate_rating,
    adress,
    smalladress,
    offer,
    no_of_Delivery,
    latitude,
    longitude,
    time,
  } = restaurant;
  return (
    <View>
      <View style={{margin: 10}}>
        <Image
          style={{
            width: '100%',
            aspectRatio: 6 / 4,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
          source={{uri: featured_image}}
        />
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            backgroundColor: '#fff',

            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontSize: 17, fontWeight: '600'}}>{name}</Text>
            <Text style={{fontSize: 15, color: 'gray', marginVertical: 5}}>
              {cuisines}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#17b169',
              padding: 7,
              borderRadius: 6,
            }}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                paddingRight: 3,
                fontSize: 16,
              }}>
              {aggregate_rating}
            </Text>
            <AntDesign name="star" size={18} color="#fff" />
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#fff',
            right: 20,
            top: 170,
            padding: 4,
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <AntDesign name="clockcircleo" size={17} color="green" />
          <Text style={{fontSize: 12, paddingLeft: 3, alignItems: 'center'}}>
            32 mins
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#007fff',
            left: 0,
            top: 160,
            padding: 6,
            borderRadius: 5,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              paddingLeft: 3,
              alignItems: 'center',
              color: '#fff',
              fontWeight: '600',
            }}>
            {offer}
          </Text>
          <Text
            style={{
              fontSize: 14,
              paddingLeft: 3,
              alignItems: 'center',
              color: '#000',
              fontWeight: '600',
              paddingTop: 4,
            }}>
            Up to ₹40
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            paddingHorizontal: 10,
            paddingBottom: 10,
          }}>
          <Text style={{borderColor: '#78787858', borderWidth: 1, height: 1}} />
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: '#7cb9e8',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AntDesign size={20} name="doubleright" color="#fff" />
            </View>

            <Text style={{marginLeft: 5}}>
              {no_of_Delivery} + orders placed here
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Hotels;

const styles = StyleSheet.create({});
