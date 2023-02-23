import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { add, edit, getAll } from '../actions/employee';

export const getAllEmployees = createAsyncThunk(
  'employee/getAllEmployeesStatus',
  async () => {
    const employees = await getAll();
    return employees;
  },
);

export const addEmployee = createAsyncThunk(
  'employee/addEmployeeStatus',
  async (employeeData) => {
    const employee = await add(employeeData);
    return employee;
  },
);

export const editEmployee = createAsyncThunk(
  'employee/editEmployeeStatus',
  async ({ employeeId, data }) => {
    const employee = await edit(employeeId, data);
    return employee;
  },
);

const initialState = {
  employees: [],
  employee: undefined,
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
      })
      .addCase(addEmployee.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.employee = action.payload;
          state.currentRequestId = undefined;
        }
      })
      .addCase(addEmployee.rejected, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      })
      .addCase(editEmployee.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(editEmployee.fulfilled, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.employee = action.payload;
          state.currentRequestId = undefined;
        }
      })
      .addCase(editEmployee.rejected, (state, action) => {
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
