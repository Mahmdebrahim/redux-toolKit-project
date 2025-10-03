// import createAsyncThunk from './features/products/createAsyncThunk'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import cartSlice from './features/cart/cartSlice'
import { productApiSlice } from './features/products/productSlice'


const store = configureStore({
  reducer: {
    // products: createAsyncThunk,
    cart: cartSlice,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
        serializableCheck: false,
    }).concat([productApiSlice.middleware]),
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// Export a hook that can be reused to resolve types
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 

export default store