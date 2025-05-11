import React from "react";
import { Text, Dimensions, StyleSheet, View } from "react-native";
import { PieChart, BarChart } from "react-native-chart-kit";
import { useTransactions } from "../contexts/TransactionContext";

const screenWidth = Dimensions.get("window").width;

const Chart = () => {
  const { transactions } = useTransactions();

  // Filter income and expenses
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  // Data for Pie Chart
  const pieData = [
    {
      name: "Income",
      amount: income,
      color: "#4CAF50",
      legendFontColor: "#333",
      legendFontSize: 15,
    },
    {
      name: "Expense",
      amount: expense,
      color: "#F44336",
      legendFontColor: "#333",
      legendFontSize: 15,
    },
  ];

  // Group transactions by month
  const monthlyData = {};
  transactions.forEach((tx) => {
    const month = new Date(tx.date).toLocaleString("default", {
      month: "short",
    });
    if (!monthlyData[month]) monthlyData[month] = 0;
    monthlyData[month] += Number(tx.amount);
  });

  const barChartData = {
    labels: Object.keys(monthlyData),
    datasets: [
      {
        data: Object.values(monthlyData),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.chartTitle}>Income vs Expense</Text>
      <PieChart
        data={pieData}
        width={screenWidth - 40}
        height={180}
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft="15"
        center={[0, 0]}
        chartConfig={chartConfig}
        hasLegend={true}
      />

      <Text style={styles.chartTitle}>Monthly Totals</Text>
      <BarChart
        data={barChartData}
        width={screenWidth - 40}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        style={styles.barChart}
        fromZero
        showValuesOnTopOfBars
      />
    </View>
  );
};

const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.7,
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    width: "100%",
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 20,
    textAlign: "center",
  },
  barChart: {
    marginVertical: 10,
    borderRadius: 8,
    padding: 10,
  },
});

export default Chart;
