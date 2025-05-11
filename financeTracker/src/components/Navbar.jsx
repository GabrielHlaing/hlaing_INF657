import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const navigation = useNavigation();
  const { logout } = UserAuth();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Finance Tracker</Text>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AddTransaction")}>
          <Text style={styles.link}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("TransactionList")}
        >
          <Text style={styles.link}>Transactions</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Text style={styles.link}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={logout}>
          <Text style={styles.link}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#63284c",
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 10,
    textAlign: "center",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  link: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginHorizontal: 5,
    paddingVertical: 4,
  },
});

export default Navbar;
