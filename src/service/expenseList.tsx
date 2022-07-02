import { createSlice } from "@reduxjs/toolkit";

export interface ExpenseState {
  id: number,
  title: string,
  amount: string,
  date: string
}

export interface ExpenseListState {
  list: Array<ExpenseState>;
}

const data = require("../utils/mock-data.json");
export const expenses = data.expenses;
console.log(expenses);

const expenseListSlice = createSlice({
  name: 'expenseList',
  initialState: expenses,
  reducers: {
    addExpense: (state, action) => {
      state.unshift(action.payload);
    },
    updateExpense: (state, action) => {
      const newItem = action.payload;
      state = state.map((item: any) => {
        if(item.id === newItem.id) 
        return newItem;
      });
    }
  }
});

export const { addExpense, updateExpense } = expenseListSlice.actions;
export default expenseListSlice.reducer;