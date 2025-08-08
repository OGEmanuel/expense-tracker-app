import "@/global.css";
import { FlatList, ListRenderItem, View } from "react-native";
import ExpenseItem from "./expense-item";
import { DUMMY_EXPENSES } from "./expenses-output";

type Expense = (typeof DUMMY_EXPENSES)[number];

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
