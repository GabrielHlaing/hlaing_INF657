import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { UserAuth } from "../contexts/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { signup } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      return;
    }
    try {
      await signup(email, password);
    } catch (err) {
      Alert.alert("Signup Failed", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        secureTextEntry
        onChangeText={setConfirmPassword}
      />

      <Button title="Sign Up" onPress={handleSignup} />
      <Text style={styles.text}>
        {" "}
        Already have an account?
        <br />
        <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
          Log In
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

export default SignupScreen;
