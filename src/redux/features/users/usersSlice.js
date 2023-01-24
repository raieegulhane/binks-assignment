import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    userList: [],
    loadingError: "",
    currentUser: {}
}

const fetchUserList = createAsyncThunk("users/fetchUserList", async () => {
    try {
        const response = await axios.get("https://randomuser.me/api/?results=10");
        return(response.data);
    } catch (error) {
        console.log("ERROR___error_while_fetch_user_list");
        return(error);
    }
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        fetchCurrentUser: (state, action) => {
            state.currentUser = state.userList.find((user) => user.login.uuid === action.payload); 
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserList.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchUserList.fulfilled, (state, action) => {
            state.loading = false;
            state.userList = action.payload.results ?? [];
            state.error = "";
        });

        builder.addCase(fetchUserList.rejected, (state) => {
            state.loading = false;
            state.userList = [];
            state.error = "Unable to fetch user-list.";
        });
    }
});

const { reducer, actions } = usersSlice;
const { fetchCurrentUser } = actions;
export { fetchUserList, reducer, fetchCurrentUser };