import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { db } from "../utils/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { UserAuth } from "../contexts/AuthContext";

const AddTransactionScreen = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { user } = UserAuth();

  const incomeCategories = ["Salary", "Loan", "Bonus", "Other"];
  const expenseCategories = ["Food", "Clothes", "Transport", "Other"];
  const categories =
    type === "income"
      ? incomeCategories
      : type === "expense"
      ? expenseCategories
      : [];

  const handleAddTransaction = async () => {
    if (!user) return;

    if (!amount || !description || !type || !category) {
      alert("Please Fill all the Fields!");
      return;
    }

    try {
      await addDoc(collection(db, "transactions"), {
        userId: user.uid,
        amount: parseFloat(amount),
        description,
        category,
        type,
        date: date.toISOString(),
        createdAt: serverTimestamp(),
      });

      // Clear inputs
      setAmount("");
      setDescription("");
      setCategory("");
      setType("");
      setDate(new Date());
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Type</Text>
      <Picker
        selectedValue={type}
        onValueChange={(value) => {
          setType(value);
          setCategory("");
        }}
        style={styles.picker}
      >
        <Picker.Item label="Select Type" value="" />
        <Picker.Item label="Expense" value="expense" />
        <Picker.Item label="Income" value="income" />
      </Picker>

      <Text style={styles.label}>Category</Text>
      <Picker
        selectedValue={category}
        onValueChange={(value) => setCategory(value)}
        enabled={type !== ""}
        style={[styles.picker, type === "" && styles.disabledPicker]}
      >
        <Picker.Item label="Select Category" value="" />
        {categories.map((cat) => (
          <Picker.Item key={cat} label={cat} value={cat} />
        ))}
      </Picker>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.btnText}>Select Date</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(e, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      <TouchableOpacity style={styles.btn} onPress={handleAddTransaction}>
        <Text style={styles.btnText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  picker: {
    height: 30,
    backgroundColor: "#f0f0f0",
    marginTop: 5,
    marginBottom: 10,
  },
  disabledPicker: {
    opacity: 0.5,
  },
  btn: {
    height: 40,
    margin: 5,
    backgroundColor: "#428ced",
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    margin: 5,
    fontWeight: "bold",
  },
});

export default AddTransactionScreen;
