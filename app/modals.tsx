import ExpenseForm from "@/components/manage-expense/expense-form";
import IconBtn from "@/components/ui/icon-btn";
import { GlobalStyles } from "@/constants/styles";
import { Expense, useExpenseStore } from "@/store/expense-control";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

const ModalScreen = () => {
  const params = useLocalSearchParams<{ expenseId: string }>();
  const editedExpenseId = params?.expenseId;
  const isEditing = !!editedExpenseId;
  const router = useRouter();
  const { removeExpense, updateExpense, addExpense, expenses } =
    useExpenseStore();

  const selectedExpense = expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  const deleteExpenseHandler = () => {
    removeExpense(editedExpenseId);
    router.back();
  };
  const cancelHandler = () => {
    router.back();
  };
  const confirmHandler = (data: Omit<Expense, "id">) => {
    if (isEditing) {
      updateExpense(editedExpenseId, data);
    } else {
      {
        addExpense(data);
      }
    }
    router.back();
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: isEditing ? "Edit Expense" : "Add Expense",
        }}
      />
      <View
        className="flex-1 p-6"
        style={{
          backgroundColor: GlobalStyles.colors.primary800,
        }}
      >
        <ExpenseForm
          isEditing={isEditing}
          onCancel={cancelHandler}
          onSubmit={confirmHandler}
          defaultValues={selectedExpense}
        />
        {isEditing ? (
          <View
            className="mt-4 pt-2 border-t-2 items-center"
            style={{
              borderTopColor: GlobalStyles.colors.primary200,
            }}
          >
            <IconBtn
              name={"trash"}
              color={GlobalStyles.colors.error500}
              size={36}
              onPress={deleteExpenseHandler}
            />
          </View>
        ) : (
          ""
        )}
      </View>
    </>
  );
};

export default ModalScreen;
