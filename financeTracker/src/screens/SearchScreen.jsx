import { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { useTransactions } from "../contexts/TransactionContext";

export default function SearchScreen() {
  const { transactions } = useTransactions();
  const [query, setQuery] = useState("");

  const filteredTransactions = transactions.filter((tx) => {
    const lowerQuery = query.toLowerCase();
    return (
      tx.description.toLowerCase().includes(lowerQuery) ||
      tx.category.toLowerCase().includes(lowerQuery) ||
      tx.amount.toString().includes(lowerQuery)
    );
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
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Transactions</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by description, category, or amount"
        value={query}
        onChangeText={setQuery}
      />

      {filteredTransactions.length > 0 ? (
        <FlatList
          data={filteredTransactions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.noData}>No matching transactions</Text>
      )}
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
    marginBottom: 12,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
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
});
