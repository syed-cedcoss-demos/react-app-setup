import { createSlice } from '@reduxjs/toolkit';
import { getLogin } from './AsyncActions';

export interface AuthSliceProps {
  value: {
    user: {
      userId: string;
      username: string;
      firstName: string;
      lastName: string;
      userType: string;
    };
    token: string;
  };
  loading: boolean;
  msg: string;
}

const initialState: AuthSliceProps = {
  value: {
    user: {
      userId: '',
      username: '',
      firstName: '',
      lastName: '',
      userType: '',
    },
    token: '',
  },
  loading: false,
  msg: '',
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  //for sync action
  reducers: {
    updateUserData: (state, action) => {
      state.value.user = {
        ...state.value.user,
        ...action.payload,
      };
    },
    updateToken: (state, action) => {
      state.value.token = action.payload;
    },
    logout: () => initialState,
  },
  //for async action
  extraReducers(builder) {
    builder
      .addCase(getLogin.pending, (state, action) => {
        // state.loading = true;
        state.msg = 'Pending';
      })
      .addCase(getLogin.fulfilled, (state, action) => {
        // state.loading = false;
        state.msg = 'Success';
        state.value.token = action.payload?.data?.token;
      })
      .addCase(getLogin.rejected, (state, action) => {
        // state.loading = false;
        state.msg = 'Failed';
      });

    //others will come here
  },
});

// Action creators are generated for each case reducer function
export const { updateUserData, logout, updateToken } = AuthSlice.actions;

export default AuthSlice.reducer;
