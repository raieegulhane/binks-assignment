import { configureStore } from "@reduxjs/toolkit";
import { reducer as usersReducer } from "../features/users/usersSlice";
import { reducer as authReducer } from "../features/auth/authSlice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        auth: authReducer
    }
});

export { store };