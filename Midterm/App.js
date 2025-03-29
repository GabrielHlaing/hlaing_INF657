import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import taskData from "./components/Task/taskData";

export default function App() {
  const [tasks, setTasks] = useState(taskData);

  return (
    <View style={styles.container}>
      <AppNavigator tasks={tasks} setTasks={setTasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
