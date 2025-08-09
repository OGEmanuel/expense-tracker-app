import { GlobalStyles } from "@/constants/styles";
import "@/global.css";
import { Expense } from "@/store/expense-control";
import { Text, View } from "react-native";
import ExpensesList from "./expenses-list";
import ExpensesSummary from "./expenses-summary";

const ExpensesOutput = (props: {
  expenses: Expense[];
  expensesPeriod: string;
  fallbackText?: string;
}) => {
  const { expensesPeriod, expenses, fallbackText } = props;

  let content = (
    <Text className="text-white text-base text-center mt-8">
      {fallbackText}
    </Text>
  );

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View
      className="px-6 pt-6 pb-12 flex-1"
      style={{
        backgroundColor: GlobalStyles.colors.primary700,
      }}
    >
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
};

export default ExpensesOutput;
