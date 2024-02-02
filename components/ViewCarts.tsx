import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {CartItems} from '../Context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
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
type restaurant = {
  restaurantName: string;
};
const ViewCarts = (props: restaurant) => {
  const {restaurantName} = props;
  const {cart, setCart} = useContext(CartItems);
  const [modal, setModal] = useState(false);
  const total = cart
    .map((item: {price: string}) => Number(item.price.replace('₹', '')))
    .reduce((prev: any, curr: any) => prev + curr, 0);
  const navigation = useNavigation();
  const onPress = () => {
    setModal(false);
    setCart([]);
    (navigation as any).navigate('OrderData', {
      data: {restaurantName: restaurantName},
    });
  };
  const checkout = () => {
    return (
      <View
        style={{
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.5)',
          flex: 1,
        }}>
        <Pressable
          onPress={() => setModal(false)}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <AntDesign name="closecircle" size={44} />
        </Pressable>

        <View
          style={{
            height: 500,
            backgroundColor: 'white',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 8,
              color: 'red',
              fontSize: 17,
            }}>
            {restaurantName}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <MaterialCommunityIcons size={24} name="timer" color="green" />
            <Text style={{paddingLeft: 5, fontWeight: '600'}}>
              Delivery in 30mins
            </Text>
          </View>
          <View
            style={{
              borderColor: '#78787867',
              height: 1,
              borderWidth: 1,
              marginTop: 10,
            }}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            {cart.map((item: menuProps) => (
              <View
                key={item.id}
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 10,
                }}>
                <Text
                  style={{color: '#e52b50', fontSize: 16, fontWeight: 'bold'}}>
                  {item.name}
                </Text>
                <Text
                  style={{color: '#e52b50', fontSize: 16, fontWeight: '500'}}>
                  {item.price}
                </Text>
              </View>
            ))}

            <View
              style={{
                borderColor: '#78787867',
                height: 1,
                borderWidth: 1,
                marginTop: 10,
              }}
            />
            <View style={{paddingTop: 10}}>
              <Text>Offers</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: 5,
                }}>
                <MaterialCommunityIcons
                  name="brightness-percent"
                  size={24}
                  color="blue"
                />
                <Text style={{paddingLeft: 5}}>Select a Promo code</Text>
              </View>
              <View
                style={{
                  borderColor: '#78787867',
                  height: 1,
                  borderWidth: 1,
                  marginTop: 10,
                }}
              />
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, paddingTop: 10}}>
                  Climate Conscious Delivery
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingTop: 10,
                    alignItems: 'center',
                  }}>
                  <MaterialIcons name="fastfood" size={24} color="green" />
                  <View style={{paddingLeft: 10}}>
                    <Text style={{color: 'green', fontSize: 16}}>
                      Don't send cultery tissues and star
                    </Text>
                    <Text style={{fontSize: 16}}>
                      Thank you for caring for environment
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderColor: '#78787867',
                  height: 1,
                  borderWidth: 1,
                  marginTop: 10,
                }}
              />
              <View
                style={{
                  paddingTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Entypo name="leaf" size={24} color="green" />
                <Text style={{paddingLeft: 10}}>
                  We fund environment projects to offset carbon footprint of our
                  deliveries
                </Text>
              </View>
              <View
                style={{
                  borderColor: '#78787867',
                  height: 1,
                  borderWidth: 2,
                  marginTop: 10,
                }}
              />
              <View style={{backgroundColor: '#f0e68c'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 10,
                  }}>
                  <Text style={{color: 'white'}}>Item Total</Text>
                  <Text>₹{total}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 10,
                  }}>
                  <Text>Delivery Fee</Text>
                  <Text>₹50</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 10,
                  }}>
                  <Text>Donation Fee</Text>
                  <Text>₹3</Text>
                </View>
              </View>
              <View
                style={{
                  borderColor: '#78787867',
                  height: 1,
                  borderWidth: 2,
                  marginTop: 10,
                }}
              />
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Grand Total </Text>
            <Text style={{marginRight: 20, fontWeight: '700'}}>
              ₹{total + 50 + 3}
            </Text>
          </View>
          <Pressable style={{backgroundColor: 'red'}} onPress={onPress}>
            <Text
              style={{
                textAlign: 'center',
                padding: 10,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Place Order
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        style={{borderTopLeftRadius: 40}}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModal(!modal);
        }}>
        {checkout()}
      </Modal>
      <View>
        {total === 0 ? null : (
          <Pressable
            onPress={() => setModal(true)}
            style={{
              justifyContent: 'center',
              backgroundColor: '#fd5c63',
              width: 140,
              padding: 10,
              borderRadius: 10,
              position: 'absolute',
              bottom: 40,
              left: 140,
            }}>
            <Text
              style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
              View Cart • ₹{total}
            </Text>
          </Pressable>
        )}
      </View>
    </>
  );
};

export default ViewCarts;

const styles = StyleSheet.create({});
