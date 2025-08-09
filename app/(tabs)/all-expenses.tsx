import ExpensesOutput from "@/components/expenses-output/expenses-output";
import { useExpenseStore } from "@/store/expense-control";

const AllExpenses = () => {
  const { expenses } = useExpenseStore();
  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod="Total"
      fallbackText="No Expenses Found"
    />
  );
};

export default AllExpenses;
