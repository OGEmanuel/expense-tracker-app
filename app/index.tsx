import ExpensesOutput from "@/components/expenses-output/expenses-output";
import { useState } from "react";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return <ExpensesOutput expensesPeriod="Last 7 days" />;
}
