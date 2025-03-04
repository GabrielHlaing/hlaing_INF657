import React from 'react';
import { View, StyleSheet } from 'react-native';
 
const Card = ({ children }) => {
  return (
  <View style={styles.card}>
    {children}
    </View>
  )
};
 
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: 500,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});
 
export default Card; 
