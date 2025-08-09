import { GlobalStyles } from "@/constants/styles";
import { Expense } from "@/store/expense-control";
import { getFormattedDate } from "@/util/date";
import { useState } from "react";
import { Text, View } from "react-native";
import Button from "../ui/button";
import Input from "./input";

const ExpenseForm = (props: {
  isEditing: boolean;
  onCancel: () => void;
  onSubmit: (data: Omit<Expense, "id">) => void;
  defaultValues?: Expense;
}) => {
  const { isEditing, onCancel, onSubmit, defaultValues } = props;
  const [inputs, setInputs] = useState({
    amount: {
      values: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      values: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      values: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  const inputChangedHandler = (
    inputIdentifier: "amount" | "date" | "description",
    enteredValue: string
  ) => {
    setInputs((prev) => {
      return {
        ...prev,
        [inputIdentifier]: { values: enteredValue, isValid: true },
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.values,
      date: new Date(inputs.date.values),
      description: inputs.description.values,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert("Invalid Input", "Please check your input values");
      setInputs((prev) => {
        return {
          amount: { values: prev.amount.values, isValid: amountIsValid },
          date: { values: prev.date.values, isValid: dateIsValid },
          description: {
            values: prev.description.values,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  };

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View className="mt-20">
      <Text className="text-2xl text-white font-bold my-6 text-center">
        Your Expense
      </Text>
      <View className="flex-row justify-between">
        <Input
          invalid={!inputs.amount.isValid}
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputs.amount.values,
          }}
          className="flex-1"
        />
        <Input
          invalid={!inputs.date.isValid}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputs.date.values,
          }}
          className="flex-1"
        />
      </View>
      <Input
        invalid={!inputs.description.isValid}
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputs.description.values,
        }}
      />
      {formIsInvalid && (
        <Text
          className="text-center m-2"
          style={{
            color: GlobalStyles.colors.error500,
          }}
        >
          Invalid Input values - please check your entered data!
        </Text>
      )}
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
