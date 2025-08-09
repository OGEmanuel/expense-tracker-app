import "@/global.css";
import { FlatList, ListRenderItem, View } from "react-native";
import ExpenseItem from "./expense-item";
import { Expense } from "@/store/expense-control";

const renderExpenseItem: ListRenderItem<Expense> = ({ item }) => {
  return <ExpenseItem {...item} />;
};

const ExpensesList = (props: { expenses: Expense[] }) => {
  const { expenses } = props;

  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpensesList;
