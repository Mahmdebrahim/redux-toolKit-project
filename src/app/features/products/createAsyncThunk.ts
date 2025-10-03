import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { IProduct } from '../../../interfaces'
import type { PayloadAction } from '@reduxjs/toolkit'
import axiosInstance from '../../../config/axios.config'

export interface IProductsState {
  loading: boolean,
  error: null | unknown,
  data: IProduct[]
}
const initialState: IProductsState = {
  loading: true,
  error: null,
  data: []
}
export const getProducts = createAsyncThunk("products/getProducts", async (_, thunkAPI) => {
    const{rejectWithValue}= thunkAPI
    try {
       const {data}= await axiosInstance.get(`/products?limit=15&select=title,price,thumbnail`,)
       console.log(data);
       return data;
    }catch (error) {
        return rejectWithValue(error)
    }
 })
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ** pending
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true
    })
    // ** fulfilled
    builder.addCase(getProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
      state.loading = false
      state.data = action.payload
    //   console.log(action.payload);
    })
    // ** rejected
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false
      state.data = []
      state.error = action.payload
    })
  },
});

// export const data = ({products}:RootState) => products;

export default productSlice.reducer