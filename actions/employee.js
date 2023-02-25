import axios from 'axios';
import { employeeApiPath } from '@/config/settings';

export const getAll = async () => {
  try {
    const response = await axios.get(employeeApiPath);
    const employees = response.data ?? [];

    return employees;
  } catch (error) {
    throw error;
  }
};

export const add = async (employee) => {
  try {
    const response = await axios.post(employeeApiPath, employee);

    const addedEmployee = response.data ?? [];

    return addedEmployee;
  } catch (error) {
    throw error;
  }
};

export const edit = async (employeeId, data) => {
  try {
    const response = await axios.put(`${employeeApiPath}/${employeeId}`, data);

    const updatedEmployee = response.data ?? [];

    return updatedEmployee;
  } catch (error) {
    throw error;
  }
};

export const remove = async (employeeId) => {
  try {
    const response = await axios.delete(`${employeeApiPath}/${employeeId}`);

    const deletedEmployee = response.data ?? [];

    return deletedEmployee;
  } catch (error) {
    throw error;
  }
};
