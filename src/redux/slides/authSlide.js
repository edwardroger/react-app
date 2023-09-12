import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LoginService } from "../../services/AuthService"

const initialState = {
    user: {
        access_token: '',
        user: {

        }
    },
    isLoggedIn: false,
}

export const login = createAsyncThunk(
    "auth/login",
    async ({email, password}) => {
        return await LoginService({email, password});
    }
)

const authSlide = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.user = action.payload?.data?.data;
            state.isLoggedIn = true;
        }
    }
})

const { reducer } = authSlide;

export default reducer;