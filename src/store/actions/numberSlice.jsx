import { createSlice } from '@reduxjs/toolkit'

export const numberSlice = createSlice({
  name: 'number',
  initialState: {
    min: 0,
    max: 10
  },
  reducers: {
    updateMin: (state, action) => {
        if(action.payload == ""|| action.payload == undefined ){
            action.payload = 0
        }
        state.min = action.payload;
        
    },
    updateMax: (state, action) =>{
        if(action.payload == ""|| action.payload == undefined ){
            action.payload = 0
        }
        state.max = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateMin, updateMax, increment, decrement, incrementByAmount } = numberSlice.actions

export default numberSlice.reducer