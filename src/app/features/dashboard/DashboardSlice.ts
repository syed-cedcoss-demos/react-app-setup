import { createSlice } from '@reduxjs/toolkit';
import { getOrderCount, getProductCount } from './AsyncActions';

interface DashboardSliceProps {
  value: {
    data: {
      productCount: any;
      orderCount: any;
    };
    step: number;
  };
  loading: boolean;
  msg: string;
}

const initialState: DashboardSliceProps = {
  value: {
    data: {
      productCount: {},
      orderCount: {},
    },
    step: 0,
  },
  loading: false,
  msg: '',
};

export const DashboardSlice = createSlice({
  name: 'onboarding',
  initialState,
  //sync action
  reducers: {
    incrementStep: (state) => {
      state.value.step += 1;
    },
  },
  //async action
  extraReducers(builder) {
    builder
      //get product count info
      .addCase(getProductCount.pending, (state) => {
        state.loading = true;
        state.msg = 'Pending';
      })
      .addCase(getProductCount.fulfilled, (state, action) => {
        state.loading = false;
        state.msg = 'Success';
        state.value.data.productCount = action?.payload?.data;
      })
      .addCase(getProductCount.rejected, (state) => {
        state.loading = false;
        state.msg = 'Failed';
      })

      //get order count info
      .addCase(getOrderCount.pending, (state) => {
        state.loading = true;
        state.msg = 'Pending';
      })
      .addCase(getOrderCount.fulfilled, (state, action) => {
        state.loading = false;
        state.msg = 'Success';
        state.value.data.orderCount = action?.payload?.data;
      })
      .addCase(getOrderCount.rejected, (state) => {
        state.loading = false;
        state.msg = 'Failed';
      });
    //others will come here
  },
});

// export const { incrementStep } = DashboardSlice.actions;

export default DashboardSlice.reducer;
