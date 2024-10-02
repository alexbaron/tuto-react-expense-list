import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expenseSlice",
    initialState: {
        income: 1000,
        expenseList: [
            {
                name: "Rent",
                price: 300,
            }
        ],
    },
    reducers: {
        addExpense: (state, action) => {
            state.expenseList.push({
                ...action.payload,
                price: Number.parseFloat(action.payload.price)
            });
        },
        setIncome: (state, action) => {
            state.income = Number.parseFloat(action.payload);
        }
    },
});

export const { addExpense, setIncome } = expenseSlice.actions;
export default expenseSlice.reducer;