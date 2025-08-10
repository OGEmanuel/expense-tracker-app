import { Expense } from "@/store/expense-control";
import axios from "axios";

const BACKEND_URL =
  "https://reactnative-project-b3fc4-default-rtdb.europe-west1.firebasedatabase.app/";

export const storeExpense = async (expenseData: Omit<Expense, "id">) => {
  const resp = await axios.post(`${BACKEND_URL}/expenses.json`, expenseData);
  const id = resp.data.name;
  return id;
};

export const getExpenses = async () => {
  const resp = await axios.get(`${BACKEND_URL}/expenses.json`);
  const expenses = [];
  //   console.log(resp.data);
  for (const key in resp.data) {
    const expenseObj = {
      id: key,
      amount: resp.data[key].amount as number,
      date: new Date(resp.data[key].date),
      description: resp.data[key].description as string,
    };

    expenses.push(expenseObj);
  }

  return expenses;
};

export const updateExpenseOnline = (
  id: string,
  expenseData: Omit<Expense, "id">
) => {
  return axios.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData);
};

export const deleteExpenseOnline = (id: string) => {
  return axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
};
