import Button from "@/components/ui/button";
import IconBtn from "@/components/ui/icon-btn";
import { GlobalStyles } from "@/constants/styles";
import { useExpenseStore } from "@/store/expense-control";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

const ModalScreen = () => {
  const params = useLocalSearchParams<{ expenseId: string }>();
  const editedExpenseId = params?.expenseId;
  const isEditing = !!editedExpenseId;
  const router = useRouter();
  const { removeExpense, updateExpense, addExpense } = useExpenseStore();

  const deleteExpenseHandler = () => {
    removeExpense(editedExpenseId);
    router.back();
  };
  const cancelHandler = () => {
    router.back();
  };
  const confirmHandler = () => {
    if (isEditing) {
      updateExpense(editedExpenseId, {
        amount: 75.5,
        date: new Date("2025-08-7"),
        description: "I'm just happy to be here really!!!!",
      });
    } else {
      {
        addExpense({
          amount: 75.5,
          date: new Date("2025-08-7"),
          description: "I'm just happy to be here really!",
          id: "e01",
        });
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
        <View className="flex-row justify-center items-center">
          <Button
            className="min-w-[7.5rem] mx-2"
            mode="flat"
            onPress={cancelHandler}
          >
            Cancel
          </Button>
          <Button className="min-w-[7.5rem] mx-2" onPress={confirmHandler}>
            {isEditing ? "Update" : "Add"}
          </Button>
        </View>
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
