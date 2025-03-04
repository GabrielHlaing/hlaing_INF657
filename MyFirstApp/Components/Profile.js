import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default function Profile({name}) {
  const image = require("../assets/UserPhoto.jpg");
    return (
      <View>
        <Image
          source = {image}
          style = {styles.image}
        />
        <Text><h3>My name is {name}</h3></Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    image: {
      width: 150,
      height: 150,
      borderRadius: 75,
    },
  });