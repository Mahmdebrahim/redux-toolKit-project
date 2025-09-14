import { createSlice } from '@reduxjs/toolkit'
import type { IProduct } from '../../../interfaces'


export interface CounterState {
  value: number,
  cartItems: IProduct[]
}

//! const [counter,setCounter]= useState(0) => for compare

const initialState: CounterState = {
  value: 0,
  cartItems: []
}

const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: { //* Actions
    // increment: (state, actoinPayLoad:PayloadAction<number>) => {
    //   state.value += actoinPayLoad.payload
    // },
  },
})

// Action creators are generated for each case reducer function
// export const { increment } = counterSlice.actions

export default counterSlice.reducer