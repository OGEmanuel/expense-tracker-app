import ExpensesOutput from "@/components/expenses-output/expenses-output";
import ErrorOverlay from "@/components/ui/error-overlay";
import LoadingOverlay from "@/components/ui/loading-overlay";
import { useExpenseStore } from "@/store/expense-control";
import { getDateMinusDays } from "@/util/date";
import { getExpenses } from "@/util/http";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const { expenses, setExpenses } = useExpenseStore();
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const newExpenses = await getExpenses();
        setExpenses(newExpenses);
      } catch (error) {
        setError("Could not fetch expenses!");
      }
      setIsFetching(false);
    };

    fetchExpenses();
  }, []);

  const recentExpences = expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7);

    return expense.date > sevenDaysAgo;
  });

  const closeError = () => {
    setError(null);
  };

  if (error) {
    return <ErrorOverlay message={error} onConfirm={closeError} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expenses={recentExpences}
      expensesPeriod="Last 7 days"
      fallbackText="No Expenses Registered for the Last 7 days"
    />
  );
}
