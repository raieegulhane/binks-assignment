import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authData: {
        username: "",
        email: "",
        password: ""
    },
    authMessage: "",
    authSuccess: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateAuthMessage: (state, action) => {
            state.authMessage = action.payload;
        },

        handleLogin: (state, action) => {
            state.authData.username = action.payload.username;
            state.authData.email = action.payload.email;
            state.authData.password = action.payload.password;

            state.authMessage = "";
            state.authSuccess = true;
        },

        handleLogin: (state) => {
            state.authData.username = "";
            state.authData.email = "";
            state.authData.password = "";

            state.authMessage = "";
            state.authSuccess = false;
        }
    },
});

const { reducer, actions } = authSlice;
export { reducer, actions };
