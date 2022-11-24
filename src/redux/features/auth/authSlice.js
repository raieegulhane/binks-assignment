import { createSlice } from "@reduxjs/toolkit";

const savedAuthStatus = JSON.parse(localStorage.getItem("authSuccessStatus"));

const initialState = {
    authData: {
        username: "",
        email: "",
        password: ""
    },
    authMessage: "",
    authSuccess: savedAuthStatus ?? false
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

            localStorage.setItem("authSuccessStatus", JSON.stringify(true));
        },

        handleLogout: (state) => {
            state.authData.username = "";
            state.authData.email = "";
            state.authData.password = "";

            state.authMessage = "";
            state.authSuccess = false;

            localStorage.removeItem("authSuccessStatus");
        }
    },
});

const { reducer, actions } = authSlice;
export { reducer, actions };
