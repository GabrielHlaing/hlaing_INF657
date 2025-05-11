import { View, Text, StyleSheet } from "react-native";
import { useTransactions } from "../contexts/TransactionContext";
import { ScrollView } from "react-native-web";
import Chart from "../components/Chart";

export default function HomeScreen() {
  const { transactions } = useTransactions();

  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + Number(tx.amount), 0);

  const expenses = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + Number(tx.amount), 0);

  const balance = income - expenses;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <View style={styles.card}>
            <Text style={styles.label}>Total Income:</Text>
            <Text style={styles.income}>${income.toFixed(2)}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Total Expenses:</Text>
            <Text style={styles.expense}>${expenses.toFixed(2)}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Balance:</Text>
            <Text style={styles.balance}>${balance.toFixed(2)}</Text>
          </View>
        </View>
      </View>
      <Chart />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f2f2f2",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  summary: {
    backgroundColor: "#aecdf2",
    padding: 20,
    marginBottom: 15,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderWidth: 1,
    borderColor: "#1c1c1c",
    borderRadius: 10,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  income: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
    marginTop: 5,
  },
  expense: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
    marginTop: 5,
  },
  balance: {
    fontSize: 18,
    color: "#007bff",
    fontWeight: "bold",
    marginTop: 5,
  },
});
