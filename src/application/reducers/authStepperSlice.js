import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  steps: [
    {
      label: 'STEP 01',
      desc: 'Start',
      isComplete: false
    },
    {
      label: 'STEP 02',
      desc: 'Contacts',
      isComplete: false
    },
    {
      label: 'STEP 03',
      desc: 'Credentials',
      isComplete: false
    },
    {
      label: 'STEP 04',
      desc: 'Confirm',
      isComplete: false
    }
  ],
  step: 1,
  user: {
    role: null
  }
}

export const authStepperSlice = createSlice({
  name: 'authStepper',
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.user.role = action.payload
    },
    setStep: (state, action) => {
      console.log('>>', action.payload)
      state.step = action.payload
    },
    setComplete: (state, action) => {

    }
  }
})

export const { setStep, setRole } = authStepperSlice.actions

export default authStepperSlice.reducer