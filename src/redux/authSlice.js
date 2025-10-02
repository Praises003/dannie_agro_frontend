// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../utils/api';
import { toast } from 'react-toastify';

// Register user
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (formData, thunkAPI) => {
    try {
      const res = await api.post('api/auth/register', formData);
      toast.success('Registration successful!');
      return res.data.user;
    } catch (err) {
      toast.error(err.response?.data?.error || 'Registration failed');
      return thunkAPI.rejectWithValue(err.response?.data);
    }
  }
);

// Login user
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData, thunkAPI) => {
    try {
      const res = await api.post('api/auth/login', formData);
      toast.success('Login successful!');
      return res.data.user;
    } catch (err) {
      toast.error(err.response?.data?.error || 'Login failed');
      return thunkAPI.rejectWithValue(err.response?.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      toast.info('Logged out');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
