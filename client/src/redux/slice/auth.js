import { createSlice } from '@reduxjs/toolkit';
const isEmpty = require("is-empty");

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: {},
        loading: false
    },
    reducers: {
        setCurrentUser: (state, action) => {
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        }
    }
})

export const { setCurrentUser } = authSlice.actions

export default authSlice.reducer;
