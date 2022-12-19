import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCall, postCall } from '../../../services/RequestPostLogin';

interface asynchThumkProps {
  url: string;
  body: any;
}

export const getProductCount = createAsyncThunk(
  'onboarding/getProductCount',
  async (payload: asynchThumkProps) => {
    const data = await getCall({
      url: payload?.url,
    });
    return data;
  }
);

export const getOrderCount = createAsyncThunk(
  'onboarding/getOrderCount',
  async (payload: asynchThumkProps) => {
    try {
      const data = await postCall({
        url: payload?.url,
        body: payload?.body,
      });
      return data;
    } catch (error) {
      console.log('error', error);
    }
  }
);
