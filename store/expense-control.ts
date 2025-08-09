import { create } from "zustand";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2022-02-18"),
  },
  {
    id: "e6",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e7",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e8",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e9",
    description: "Another book",
    amount: 18.59,
    date: new Date("2022-02-18"),
  },
];

export type Expense = {
  id: string;
  amount: number;
  description: string;
  date: Date;
  category?: string;
};

type ExpenseState = {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, "id">) => void;
  removeExpense: (id: string) => void;
  updateExpense: (id: string, updated: Partial<Omit<Expense, "id">>) => void;
  clearExpenses: () => void;
};

export const useExpenseStore = create<ExpenseState>((set) => ({
  expenses: DUMMY_EXPENSES,
  addExpense: (expense) =>
    set((state) => ({
      expenses: [
        ...state.expenses,
        { ...expense, id: new Date().toString() + Math.random().toString() },
      ],
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
