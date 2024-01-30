import {Pressable, StyleSheet, Text, View, Modal, Alert} from 'react-native';
import React, {useContext, useState} from 'react';
import {CartItems} from '../Context';
import AntDesign from 'react-native-vector-icons/AntDesign';
const ViewCarts = () => {
  const {cart, setCart} = useContext(CartItems);
  const [modal, setModal] = useState(false);
  const total = cart
    .map((item: {price: string}) => Number(item.price.replace('₹', '')))
    .reduce((prev: any, curr: any) => prev + curr, 0);
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
          }}></View>
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
