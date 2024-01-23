import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const ItemComponents = () => {
  return (
    <View>
      <Text style={{fontSize: 17, fontWeight: 'bold', padding: 4}}>
        Eat What makes you happy
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{margin: 8}}>
            <Image
              style={{width: 70, height: 70, borderRadius: 35}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU',
              }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: 'gray',
                margin: 10,
                textAlign: 'center',
              }}>
              Thalis
            </Text>
          </View>
          <View style={{margin: 8}}>
            <Image
              style={{width: 70, height: 70, borderRadius: 35}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU',
              }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: 'gray',
                margin: 10,
                textAlign: 'center',
              }}>
              Pizzas
            </Text>
          </View>
          <View style={{margin: 8}}>
            <Image
              style={{width: 70, height: 70, borderRadius: 35}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU',
              }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: 'gray',
                margin: 10,
                textAlign: 'center',
              }}>
              Burger
            </Text>
          </View>
          <View style={{margin: 8}}>
            <Image
              style={{width: 70, height: 70, borderRadius: 35}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU',
              }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: 'gray',
                margin: 10,
                textAlign: 'center',
              }}>
              Dosas
            </Text>
          </View>
          <View style={{margin: 8}}>
            <Image
              style={{width: 70, height: 70, borderRadius: 35}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU',
              }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: 'gray',
                margin: 10,
                textAlign: 'center',
              }}>
              Ice Cream
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ItemComponents;

const styles = StyleSheet.create({});
