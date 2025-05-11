import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

export default function EditTransactionScreen({ route, navigation }) {
  const { transaction } = route.params;

  const [description, setDescription] = useState(transaction.description);
  const [amount, setAmount] = useState(transaction.amount.toString());
  const [category, setCategory] = useState(transaction.category);

  const incomeCategories = ["Salary", "Loan", "Bonus"];
  const expenseCategories = ["Food", "Clothes", "Transport"];

  const categories =
    transaction.type === "income" ? incomeCategories : expenseCategories;

  const handleUpdate = async () => {
    if (!description || !amount || !category) {
      Alert.alert("Validation Error", "Please fill in all fields.");
      return;
    }

    try {
      const docRef = doc(db, "transactions", transaction.id);
      await updateDoc(docRef, {
        description,
        amount: parseFloat(amount),
        type: transaction.type,
        category,
      });
      Alert.alert("Success", "Transaction updated.");
      navigation.goBack();
    } catch (error) {
      console.error("Error updating transaction:", error);
      Alert.alert("Error", "Could not update transaction.");
    }
  };

  const handleDelete = async () => {
    try {
      console.log("Deleting transaction with ID:", transaction.id);
      await deleteDoc(doc(db, "transactions", transaction.id));
      Alert.alert("Deleted", "Transaction deleted.");
      navigation.goBack();
    } catch (error) {
      console.error("Error deleting transaction:", error);
      Alert.alert("Error", "Could not delete transaction.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Transaction</Text>

      <Text>Description</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <Text>Amount</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text>Type</Text>
      <Text style={styles.staticText}>{transaction.type.toUpperCase()}</Text>

      <Text>Category</Text>
      <Picker
        selectedValue={category}
        onValueChange={setCategory}
        style={styles.picker}
      >
        {categories.map((cat) => (
          <Picker.Item key={cat} label={cat} value={cat} />
        ))}
      </Picker>

      <Button title="Update Transaction" onPress={handleUpdate} />

      <View style={{ marginTop: 10 }}>
        <Button
          title="Delete Transaction"
          color="#f44336"
          onPress={handleDelete}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
    marginBottom: 12,
  },
  picker: {
    height: 30,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
  },
  staticText: {
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
    color: "#555",
  },
});
