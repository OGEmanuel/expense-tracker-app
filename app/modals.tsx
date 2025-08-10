import ExpenseForm from "@/components/manage-expense/expense-form";
import ErrorOverlay from "@/components/ui/error-overlay";
import IconBtn from "@/components/ui/icon-btn";
import LoadingOverlay from "@/components/ui/loading-overlay";
import { GlobalStyles } from "@/constants/styles";
import { Expense, useExpenseStore } from "@/store/expense-control";
import {
  deleteExpenseOnline,
  storeExpense,
  updateExpenseOnline,
} from "@/util/http";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

const ModalScreen = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<any>();
  const params = useLocalSearchParams<{ expenseId: string }>();
  const editedExpenseId = params?.expenseId;
  const isEditing = !!editedExpenseId;
  const router = useRouter();
  const { removeExpense, updateExpense, addExpense, expenses } =
    useExpenseStore();

  const selectedExpense = expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  const deleteExpenseHandler = async () => {
    setIsUpdating(true);
    try {
      removeExpense(editedExpenseId);
      await deleteExpenseOnline(editedExpenseId);
      router.back();
    } catch (error) {
      setError("Could not delete! Please try again later.");
    }
    setIsUpdating(false);
  };
  const cancelHandler = () => {
    router.back();
  };
  const confirmHandler = async (data: Omit<Expense, "id">) => {
    setIsUpdating(true);
    if (isEditing) {
      try {
        updateExpense(editedExpenseId, data);
        await updateExpenseOnline(editedExpenseId, data);
        router.back();
      } catch (error) {
        setError("Unable to update now! Please try again later.");
      }
      setIsUpdating(false);
    } else {
      try {
        const id = await storeExpense(data);
        {
          addExpense(data, id);
        }
        router.back();
      } catch (error) {
        setError("Unable to add now! Please try again later.");
      }

      setIsUpdating(false);
    }
  };

  const handleCloseError = () => {
    setError(null);
  };

  if (error && !isUpdating) {
    return <ErrorOverlay message={error} onConfirm={handleCloseError} />;
  }

  if (isUpdating) {
    return <LoadingOverlay />;
  }

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
