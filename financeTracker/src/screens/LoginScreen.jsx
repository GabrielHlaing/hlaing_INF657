import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { UserAuth } from "../contexts/AuthContext";

const LoginScreen = ({ navigation }) => {
  const { login } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (err) {
      Alert.alert("Login Failed", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Log In" onPress={handleLogin} />
      <Text style={styles.text}>
        Don't have an account?
        <br />
        <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fce3d4",
    borderWidth: 1,
    borderColor: "#855a41",
    padding: 30,
    marginHorizontal: "30%",
    marginTop: 100,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#29bef0",
  },
  input: {
    borderWidth: 1,
    borderColor: "#29bef0",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  text: {
    color: "white",
    marginTop: 20,
    color: "#29bef0",
    textAlign: "center",
  },
  link: {
    color: "#de6b26",
  },
});

export default LoginScreen;
