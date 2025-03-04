import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TaskList from '../components/Task/taskList';
import TaskDetails from '../screens/TaskDetails';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TaskList" component={TaskList} options={{ title: 'Task Manager: Click the Card for details' }} />
        <Stack.Screen name="TaskDetails" component={TaskDetails} options={{ title: 'Task Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
