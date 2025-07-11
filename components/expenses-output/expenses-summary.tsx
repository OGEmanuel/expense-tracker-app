import { Text, View } from "react-native";

const ExpensesSummary = (props: { periodName: string; expenses: any }) => {
  const { periodName, expenses } = props;

  const expensesSum = expenses.reduce((sum: number, expense: any) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
