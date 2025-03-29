import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

export default function TaskDetails({ route, navigation }) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Image source={task.image} style={styles.image} />
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <Text style={styles.category}>Category - {task.category}</Text>
      <Text style={styles.date}>Date: {task.date}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  category: {
    fontSize: 20,
    marginVertical: 5,
  },
  date: {
    fontSize: 20,
    marginBottom: 10,
  },
});
