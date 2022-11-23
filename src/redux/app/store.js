import { configureStore } from "@reduxjs/toolkit";
import { reducer as usersReducer } from "../features/users/usersSlice";

const store = configureStore({
    reducer: {
        users: usersReducer
    }
});

export { store };