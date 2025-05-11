import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Navbar from "./src/components/Navbar";
import { TransactionProvider } from "./src/contexts/TransactionContext";
import { AuthProvider } from "./src/contexts/AuthContext";
import AppNavigator from "./src/navigation/AppNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <TransactionProvider>
        <NavigationContainer>
          <View style={styles.container}>
            <Navbar />
            <AppNavigator style={styles.content} />
          </View>
        </NavigationContainer>
      </TransactionProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
});
