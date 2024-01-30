import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MenuData from '../data/menuData';
import Menu from '../components/Menu';
import {CartItems} from '../Context';
import ViewCarts from '../components/ViewCarts';
type restaurant = {
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

type menuProps = {
  id: string;
  name: string;
  price: string;
  review: number;
  star: number;
  bestSeller?: string;
  image: string;
  mustTry?: string;
};
const HomeRooms = () => {
  const route = useRoute();
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
  } = route.params as restaurant;
  const navigation = useNavigation();
  const data = MenuData;
  const {cart, setCart} = useContext(CartItems);
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Pressable
            style={{
              backgroundColor: '#000',
              width: 40,
              marginLeft: 10,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.goBack()}>
            <Ionicons size={24} name="chevron-back-outline" color="white" />
          </Pressable>
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <AntDesign size={24} name="camerao" />
            <Feather style={{marginHorizontal: 10}} size={24} name="bookmark" />
            <MaterialCommunityIcons size={24} name="share-outline" />
          </Pressable>
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{marginLeft: 10, marginTop: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: 'gray',
                marginVertical: 5,
              }}>
              {cuisines}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#6082b6',
                width: 180,
              }}>
              {adress}
            </Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'green',
                padding: 7,
                width: 100,
                justifyContent: 'center',
                borderBottomLeftRadius: 7,
                borderTopLeftRadius: 7,
                marginTop: 8,
              }}>
              <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
                {aggregate_rating}
              </Text>
              <AntDesign size={20} name="star" color="white" />
            </View>
            <View
              style={{
                backgroundColor: '#f9629f',
                padding: 7,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomLeftRadius: 7,
                borderTopLeftRadius: 7,
                marginTop: 6,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>30</Text>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Photos</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="motorcycle"
              style={{backgroundColor: '#d8d8d8', padding: 4}}
              size={24}
              color="gray"
            />
            <View style={{marginLeft: 8}}>
              <Text style={{fontSize: 12}}>Mode</Text>
              <Text style={{fontSize: 12}}>Delivery</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="time"
              style={{backgroundColor: '#d8d8d8', padding: 4}}
              size={24}
              color="gray"
            />
            <View style={{marginLeft: 8}}>
              <Text style={{fontSize: 12}}>TIME</Text>
              <Text style={{fontSize: 12}}>30minutes or free</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="brightness-percent"
              style={{backgroundColor: '#d8d8d8', padding: 4}}
              size={24}
              color="blue"
            />
            <View style={{marginLeft: 8}}>
              <Text style={{fontSize: 12}}>Offers</Text>
              <Text style={{fontSize: 12}}>View All</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 15,
            backgroundColor: '#c8c8c8',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 7,
            borderRadius: 7,
          }}>
          <Fontisto style={{paddingLeft: 10}} name="motorcycle" size={24} />
          <Text style={{paddingLeft: 10, fontSize: 16}}>
            ₹30 additional distance fee
          </Text>
        </View>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 18}}>Full Menu</Text>
          <Text
            style={{
              borderColor: '#ff1493',
              borderWidth: 2,
              height: 2,
              width: 70,
              marginTop: 4,
            }}
          />
          {data.map(item => (
            <Menu
              menu={item as menuProps}
              key={item.id}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </View>
      </ScrollView>
      <ViewCarts />
    </SafeAreaView>
  );
};

export default HomeRooms;

const styles = StyleSheet.create({});
