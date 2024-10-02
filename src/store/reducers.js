// reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import expenseReducer from './expense/expense-slice';

const rootReducer = combineReducers({
    EXPENSE: expenseReducer,
    // ajoutez d'autres réducteurs ici
});

export default rootReducer;