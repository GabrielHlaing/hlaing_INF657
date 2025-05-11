import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen";
import AddTransactionScreen from "../screens/AddTransactionScreen";
import TransactionListScreen from "../screens/TransactionListScreen";
import { StyleSheet, View } from "react-native";
import { UserAuth } from "../contexts/AuthContext";
import EditTransactionScreen from "../screens/EditTransactionScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { user } = UserAuth();
  return (
    <View style={styles.container}>
      {user ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="AddTransaction"
            component={AddTransactionScreen}
          />
          <Stack.Screen
            name="TransactionList"
            component={TransactionListScreen}
          />
          <Stack.Screen
            name="EditTransaction"
            component={EditTransactionScreen}
          />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
});

export default AppNavigator;
