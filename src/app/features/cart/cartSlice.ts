import { createSlice } from '@reduxjs/toolkit'
import type { IProduct } from '../../../interfaces'
import type { PayloadAction } from '@reduxjs/toolkit'
import { addItemToShoppingCart } from '../../../utils/functions'


export interface CounterState {
  cartItems: IProduct[]
}
const initialState: CounterState = {
  cartItems: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: { //* Actions
    addItemToCart: (state, action: PayloadAction<IProduct>) => {
      state.cartItems = addItemToShoppingCart(state.cartItems, action.payload)
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart } = cartSlice.actions
export default cartSlice.reducer