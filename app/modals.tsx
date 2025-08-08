import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const ModalScreen = () => {
  const params = useLocalSearchParams<{ expenseId: string }>();
  const editedExpenseId = params?.expenseId;
  const isEditing = !!editedExpenseId;

  return (
    <>
      <Stack.Screen
        options={{
          title: isEditing ? "Edit Expense" : "Add Expense",
        }}
      />
      <View>
        <Text>Manage Expenses</Text>
      </View>
    </>
  );
};

export default ModalScreen;
