import { Expense } from "@/store/expense-control";
import { useState } from "react";
import { Text, View } from "react-native";
import Button from "../ui/button";
import Input from "./input";
import { getFormattedDate } from "@/util/date";

const ExpenseForm = (props: {
  isEditing: boolean;
  onCancel: () => void;
  onSubmit: (data: Omit<Expense, "id">) => void;
  defaultValues?: Expense;
}) => {
  const { isEditing, onCancel, onSubmit, defaultValues } = props;
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? getFormattedDate(defaultValues.date) : "",
    description: defaultValues ? defaultValues.description : "",
  });

  const inputChangedHandler = (
    inputIdentifier: "amount" | "date" | "description",
    enteredValue: string
  ) => {
    setInputValues((prev) => {
      return {
        ...prev,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    onSubmit(expenseData);
  };

  return (
    <View className="mt-20">
      <Text className="text-2xl text-white font-bold my-6 text-center">
        Your Expense
      </Text>
      <View className="flex-row justify-between">
        <Input
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
          className="flex-1"
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputValues.date,
          }}
          className="flex-1"
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <View className="flex-row justify-center items-center">
        <Button className="min-w-[7.5rem] mx-2" mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button className="min-w-[7.5rem] mx-2" onPress={submitHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;
