import { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTransactions } from "../contexts/TransactionContext";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function TransactionListScreen() {
  const { transactions } = useTransactions();
  const navigation = useNavigation();
  const [selectedMonth, setSelectedMonth] = useState("All");

  const months = [
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const filteredTransactions =
    selectedMonth === "All"
      ? transactions
      : transactions.filter((tx) => {
          const txMonth = new Date(tx.date).getMonth();
          return txMonth === months.indexOf(selectedMonth) - 1;
        });

  const renderItem = ({ item }) => {
    const isExpense = item.type === "expense";
    return (
      <View style={[styles.card, isExpense ? styles.expense : styles.income]}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.amount}>
          {isExpense ? "-" : "+"}${parseFloat(item.amount).toFixed(2)}
        </Text>
        <Text style={styles.meta}>
          {item.category} • {item.type} •{" "}
          {new Date(item.date).toLocaleDateString()}
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditTransaction", { transaction: item })
          }
        >
          <Text style={styles.editLink}>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transactions</Text>

      <Picker
        selectedValue={selectedMonth}
        onValueChange={(value) => setSelectedMonth(value)}
        style={styles.picker}
      >
        {months.map((month) => (
          <Picker.Item key={month} label={month} value={month} />
        ))}
      </Picker>

      {filteredTransactions.length > 0 ? (
        <FlatList
          data={filteredTransactions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.noData}>No data found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  picker: {
    height: 30,
    backgroundColor: "#f0f0f0",
    marginBottom: 16,
  },
  card: {
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
  },
  income: {
    backgroundColor: "#a5f0c2",
  },
  expense: {
    backgroundColor: "#fcb2a9",
  },
  description: {
    fontSize: 16,
    fontWeight: "600",
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },
  meta: {
    fontSize: 12,
    color: "#555",
    marginTop: 4,
  },
  noData: {
    textAlign: "center",
    marginTop: 20,
    fontStyle: "italic",
  },
  editLink: {
    marginTop: 8,
    color: "#007BFF",
    fontWeight: "500",
  },
});
