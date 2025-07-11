import { FlatList, ListRenderItem, Text, View } from "react-native";
import { DUMMY_EXPENSES } from "./expenses-output";

type Expense = (typeof DUMMY_EXPENSES)[number];

const renderExpenseItem: ListRenderItem<Expense> = ({ item }) => {
  return <Text>{item.description}</Text>;
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
