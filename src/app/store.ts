import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import cartSlice from './features/cart/cartSlice'
import productSlice from './features/products/productSlice'

// ...
const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
  devTools: true
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types



export default store