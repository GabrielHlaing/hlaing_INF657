import React, { useState } from 'react';
import { Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import taskData from './taskData';
import Card from '../Shared/Card';

export default function TaskList() {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState(taskData);

  const toggleComplete = (taskID) => {
    setTasks(tasks.map(task =>
      task.id === taskID ? { ...task, completed: !task.completed } : task
    ));
  }; 

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {tasks.map(task => (
        <Card key={task.id}>
          <TouchableOpacity onPress={() => navigation.navigate('TaskDetails', { task })}>
            <Image source={task.image} style={styles.image} />
            <Text style={task.completed ? styles.completedTask : styles.title}>
              {task.title}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleComplete(task.id)} style={styles.button}>
            <Text style={styles.buttonText}>{task.completed ? "Undo" : "Complete"}</Text>
          </TouchableOpacity>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    backgroundColor: '#fffacd',
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  completedTask: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
    alignSelf: 'center', 
  },
  button: {
    margin: 5,
    width: '30%',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
