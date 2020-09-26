import { AppThunk } from './app-thunk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageOptions } from 'lib/models';

import * as ProductService from 'services/product-service';

export interface ProductDetailsStore {
  data: Models.Product.Model[];
}

export const initialState: ProductDetailsStore = {
  data: []
};

const slice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    setData: (state: ProductDetailsStore, action: PayloadAction<Models.Product.Model[]>) => {
      state.data = action.payload;
      // TODO: change this
    }
  }
});

export const { setData } = slice.actions;

export const reducer = slice.reducer;

// thunk
export const getProductDetails = (id: string): AppThunk => async (dispatch, store) => {
  const result = await ProductService.getProductDetails(id);

  dispatch(setData(result.data));
};
