import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (params) => {
    const { data } = await axios.post("/auth/login", params);
    return data;
  }
);
export const fetchAuthMe = createAsyncThunk(
  "auth/fetchAuthMe",
  async (params) => {
    const { data } = await axios.get("/auth/me");
    return data;
  }
);

const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchUserData.pending]: (state, action) => {
      state.status = "loaded";
      state.data = null;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      state.status = "loading";
      state.data = action.payload;
    },
    [fetchUserData.rejected]: (state, action) => {
      state.status = "error";
      state.data = null;
    },

    [fetchAuthMe.pending]: (state, action) => {
      state.status = "loaded";
      state.data = null;
    },
    [fetchAuthMe.fulfilled]: (state, action) => {
      state.status = "loading";
      state.data = action.payload;
    },
    [fetchAuthMe.rejected]: (state, action) => {
      state.status = "error";
      state.data = null;
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export default authSlice.reducer;

export const { logout } = authSlice.actions;
