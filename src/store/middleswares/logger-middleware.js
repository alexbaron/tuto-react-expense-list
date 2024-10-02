import { createListenerMiddleware } from "@reduxjs/toolkit";

export const loggerMiddleware = createListenerMiddleware({});

loggerMiddleware.startListening({
    predicate: (action) => {
        return action.type === 'expenseSlice/addExpense';
    },
    effect: async (action, listenerAPI) => {
        console.log(action);
        console.log(listenerAPI.getState());
    }
})