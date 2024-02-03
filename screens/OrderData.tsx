import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
// import Sound from 'react-native-sound';
import moment from 'moment';
import {useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
type restaurant = {
  restaurantName: String;
};
const OrderData = () => {
  const time = moment().format('LT');
  const router = useRoute();
  console.log(time, router);
  const {restaurantName} = router.params.data as restaurant;
  //   const sound = new Sound('motorcycle.mp3');
  //   const playSound = () => {
  //     sound.play();
  //   };
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'orange', padding: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          {restaurantName} has accepted your order at {time}
        </Text>
      </View>
      <View
        style={{
          borderColor: '#78787867',
          height: 1,
          borderWidth: 2,
        }}
      />
      <View
        style={{
          backgroundColor: 'green',
          padding: 5,
          justifyContent: 'center',
          alignItems: 'center',
          width: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 10,
          borderRadius: 7,
          flexDirection: 'row',
        }}>
        <Ionicons name="time-outline" size={24} color="black" />
        <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 5}}>
          Delivery in 30mins
        </Text>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: 10,
        }}>
        Food Preparation will begin shortly!!!
      </Text>
    </SafeAreaView>
  );
};

export default OrderData;

const styles = StyleSheet.create({});
