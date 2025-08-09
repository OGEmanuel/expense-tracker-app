import ExpensesOutput from "@/components/expenses-output/expenses-output";
import { useExpenseStore } from "@/store/expense-control";
import { getDateMinusDays } from "@/util/date";

export default function HomeScreen() {
  const { expenses } = useExpenseStore();
  const recentExpences = expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7);

    return expense.date > sevenDaysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recentExpences}
      expensesPeriod="Last 7 days"
      fallbackText="No Expenses Registered for the Last 7 days"
    />
  );
}
