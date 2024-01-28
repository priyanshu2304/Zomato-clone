import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
type MenuProps = {
  menu: {
    id: string;
    name: string;
    price: string;
    review: number;
    star: number;
    bestSeller?: string;
    image: string;
    mustTry?: string;
  };
};

const Menu = ({menu}: MenuProps) => {
  const {id, name, price, review, star, bestSeller, image, mustTry} = menu;
  const [additems, setAdditems] = useState(0);

  return (
    // <Pressable>
    <Pressable>
      <ScrollView
        style={{flex: 1, backgroundColor: 'white'}}
        showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 13,
          }}>
          <View>
            <Text
              style={{
                width: 160,
                marginLeft: 10,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              {menu.name}
            </Text>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,

                marginVertical: 4,
                fontSize: 15,
                fontWeight: '600',
              }}>
              {menu.price}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  marginLeft: 10,
                  backgroundColor: '#FFFFF0',
                  padding: 3,
                  borderRadius: 4,
                }}>
                {[0, 0, 0, 0, 0].map((en, i) => (
                  <FontAwesome
                    key={`${menu.id}-${i}`}
                    style={{margin: 2, marginHorizontal: 3}}
                    name={i < Math.floor(menu.star) ? 'star' : 'star-o'}
                    size={13}
                    color="#FFD700"
                  />
                ))}
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  padding: 2,
                  paddingHorizontal: 4,
                  borderRadius: 5,
                  fontSize: 13,
                  backgroundColor: '#FFF5EE',
                  color: '#E52B50',
                }}>
                {(bestSeller && menu.bestSeller) || menu.mustTry}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
                marginTop: 8,
              }}>
              <Pressable
                style={{
                  borderColor: 'gray',
                  borderRadius: 20,
                  borderWidth: 1,
                  padding: 4,
                }}>
                <Entypo name="heart-outlined" size={24} color="red" />
              </Pressable>
              <Pressable
                style={{
                  marginHorizontal: 10,
                  borderColor: 'gray',
                  borderRadius: 20,
                  borderWidth: 1,
                  padding: 4,
                }}>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={24}
                  color="red"
                />
              </Pressable>
            </View>
          </View>

          <Image
            style={{
              width: 120,
              height: 120,
              marginRight: 15,
              marginBottom: 20,
              borderRadius: 10,
              resizeMode: 'cover',
            }}
            source={{
              uri: menu.image,
            }}
          />
        </View>
        <Pressable
          style={{
            position: 'absolute',
            right: 43,
            top: 115,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FF3366',
            borderRadius: 5,
          }}>
          <Pressable
            onPress={() => {
              setAdditems(Math.max(0, additems - 1));
              //   setCart(cart.filter(p => p.id !== menu.id));
            }}>
            <Text style={{fontSize: 25, color: 'white', paddingHorizontal: 10}}>
              -
            </Text>
          </Pressable>

          <Pressable>
            <Text style={{fontSize: 20, color: 'white', paddingHorizontal: 10}}>
              {additems}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              //   setCart([...cart, menu]);
              setAdditems(additems + 1);
            }}>
            <Text style={{fontSize: 20, color: 'white', paddingHorizontal: 10}}>
              +
            </Text>
          </Pressable>
        </Pressable>
      </ScrollView>
    </Pressable>
  );
};

export default Menu;

const styles = StyleSheet.create({});
