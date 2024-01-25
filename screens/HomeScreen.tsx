import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Categories from '../components/Categories';
import ItemComponents from '../components/ItemComponents';
import hotel from '../data/hotel';
import Hotels from '../components/Hotels';
const HomeScreen = () => {
  const data = hotel;
  return (
    <SafeAreaView style={{backgroundColor: '#f0f0f0'}}>
      <View style={{margin: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#d8d8d8',
            padding: 7,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'gray',
          }}>
          <AntDesign name="search1" size={20} color="#e52b50" />
          <TextInput
            style={{paddingLeft: 5}}
            placeholder="Restaurant name, cuisines, or a dish"
          />
        </View>
        <ScrollView>
          <Categories />
          <Pressable>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU',
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: 'https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1002269/zomato-infinity-dining-916x516-1-916x516.jpg',
                }}
              />
            </View>
          </Pressable>
          <ItemComponents />
          {data.map(item => (
            <Hotels restaurant={item} key={item.id} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    margin: 10,
    borderRadius: 10,
    width: 158,
    height: 158,
    aspectRatio: 5 / 3,
    resizeMode: 'cover',
  },
});
