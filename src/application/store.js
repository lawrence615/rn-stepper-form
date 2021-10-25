import { configureStore } from '@reduxjs/toolkit'

import authStepper from 'reducers/authStepperSlice'

export const store = configureStore({
  reducer: {
    authStepper
  }
})