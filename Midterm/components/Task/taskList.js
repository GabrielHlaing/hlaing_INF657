import React from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { useNavigation } from "@react-navigation/native";

export default function TaskList({ tasks, setTasks }) {
  const navigation = useNavigation();

  const deleteTask = (taskID) => {
    setTasks(tasks.filter((task) => task.id !== taskID));
  };

  const renderTask = ({ item }) => (
    <Swipeable
      renderRightActions={() => (
        <TouchableOpacity
          onPress={() => deleteTask(item.id)}
          style={styles.deleteButton}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      )}
    >
      <View style={styles.taskItem}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("TaskDetails", { task: item })}
            style={styles.details}
          >
            <Text style={styles.detailText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddTask")}
      >
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ceced9",
    alignSelf: "center",
  },
  addButton: {
    backgroundColor: "blue",
    width: "30%",
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
  },
  addButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "lightyellow",
    width: 500,
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    margin: 5,
    width: 100,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  detailText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    padding: 15,
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
  },
});
