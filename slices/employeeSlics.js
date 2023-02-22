import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAll } from '../actions/employee';

export const getAllEmployees = createAsyncThunk(
  'employee/getAllEmployeesStatus',
  async () => {
    const employees = await getAll();
    return employees;
  },
);

const initialState = {
  employees: [],
  loading: 'idle',
  currentRequestId: undefined,
  error: null,
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEmployees.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getAllEmployees.fulfilled, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.employees = action.payload;
          state.currentRequestId = undefined;
        }
      })
      .addCase(getAllEmployees.rejected, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export default employeeSlice.reducer;
