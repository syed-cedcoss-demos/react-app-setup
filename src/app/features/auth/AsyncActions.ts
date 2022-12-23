import { createAsyncThunk } from '@reduxjs/toolkit';
import { postCall } from '../../../services/RequestPreLogin';

export const getLogin = createAsyncThunk('auth/getLogin', async (payload: any) => {
  try {
    const body = {
      ...payload,
      target_marketplace: process.env.REACT_APP_TARGET_MARKETPLACE,
    };
    const data = await postCall({ url: 'user/login', body });
    return data;
  } catch (error) {
    console.log('error', error);
  }
});
