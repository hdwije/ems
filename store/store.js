import { configureStore } from '@reduxjs/toolkit';

import employeeReducer from '../slices/employeeSlics';

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;
