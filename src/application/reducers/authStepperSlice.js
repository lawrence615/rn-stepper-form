import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
  user:{
    role: null
  }
}

export const authStepperSlice = createSlice({
  name: 'authStepper',
  initialState,
  reducers: {
    setStep: (state, action) => {
      console.log('>>', action.payload)
      state.step = action.payload
    },
    setRole: (state, action) => {
      state.user.role = action.payload
    }
  }
})

export const { setStep, setRole } = authStepperSlice.actions

export default authStepperSlice.reducer