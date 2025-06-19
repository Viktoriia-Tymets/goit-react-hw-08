import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.goit.global';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', credentials);
            setAuthHeader(`Bearer ${response.data.token}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const responce = await axios.post('/users/login', credentials);
            setAuthHeader(`Bearer ${responce.data.token}`);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout', async () => {
        await axios.post('/users/logout');
        setAuthHeader('')
});
    
export const refreshUser = createAsyncThunk('auth/refresh',
    async (_, thunkAPI) => {
        try {
            const reduxState = thunkAPI.getState();
            setAuthHeader(`Bearer ${reduxState.auth.token}`);
            const responce = await axios.get('/users/me');
            return responce.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)

        }
    },
    {
        condition: (_, thunkAPI) => {
            const reduxState = thunkAPI.getState();
            return reduxState.auth.token !== null;
        }
    }
)