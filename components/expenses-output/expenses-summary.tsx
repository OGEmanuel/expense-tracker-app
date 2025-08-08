import { GlobalStyles } from "@/constants/styles";
import "@/global.css";
import { Text, View } from "react-native";

const ExpensesSummary = (props: { periodName: string; expenses: any }) => {
  const { periodName, expenses } = props;

  const expensesSum = expenses.reduce((sum: number, expense: any) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View
      className="p-2 rounded-[6px] flex-row justify-between items-center"
      style={{
        backgroundColor: GlobalStyles.colors.primary50,
      }}
    >
      <Text
        className="text-xs"
        style={{
          color: GlobalStyles.colors.primary400,
        }}
      >
        {periodName}
      </Text>
      <Text
        className="font-bold text-base"
        style={{
          color: GlobalStyles.colors.primary500,
        }}
      >
        ${expensesSum.toFixed(2)}
      </Text>
    </View>
  );
};

export default ExpensesSummary;
