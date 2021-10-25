import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: null
}

export const authStepperSlice = createSlice({
  name: 'authStepper',
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload
    }
  }
})

export const { setRole } = authStepperSlice.actions

export default authStepperSlice.reducer