import { create } from "zustand";

export type Expense = {
  id: string;
  amount: number;
  description: string;
  date: Date;
  category?: string;
};

type ExpenseState = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense: (id: string) => void;
  updateExpense: (id: string, updated: Partial<Omit<Expense, "id">>) => void;
  clearExpenses: () => void;
};

export const useExpenseStore = create<ExpenseState>((set) => ({
  expenses: [],
  addExpense: (expense) =>
    set((state) => ({
      expenses: [...state.expenses, { ...expense }],
    })),
  removeExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((e) => e.id !== id),
    })),
  updateExpense: (id, updated) =>
    set((state) => ({
      expenses: state.expenses.map((e) =>
        e.id === id ? { ...e, ...updated } : e
      ),
    })),
  clearExpenses: () => set({ expenses: [] }),
}));
