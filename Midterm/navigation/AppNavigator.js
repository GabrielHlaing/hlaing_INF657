import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TaskList from "../components/Task/taskList";
import TaskDetails from "../screens/TaskDetails";
import AddTask from "../screens/AddTask";

const Stack = createStackNavigator();

export default function AppNavigator({ tasks, setTasks }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TaskList" options={{ title: "Task Manager" }}>
          {(props) => <TaskList {...props} tasks={tasks} setTasks={setTasks} />}
        </Stack.Screen>
        <Stack.Screen name="TaskDetails" component={TaskDetails} />
        <Stack.Screen name="AddTask">
          {(props) => <AddTask {...props} setTasks={setTasks} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
