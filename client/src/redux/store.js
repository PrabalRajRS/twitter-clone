import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/auth'
import usersReducer from './slice/users'

export default configureStore({
    reducer: {
        auth: authReducer,
        user: usersReducer
    }
})