import axios from 'axios';

export const getAll = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/employee');
    const employees = response.data ?? [];

    return employees;
  } catch (error) {
    throw error;
  }
};

export const add = async (employee) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/employee',
      employee,
    );

    const addedEmployee = response.data ?? [];

    return addedEmployee;
  } catch (error) {
    throw error;
  }
};

export const update = async (employee) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/employee/${employee.id}`,
      employee,
    );

    const updatedEmployee = response.data ?? [];

    return updatedEmployee;
  } catch (error) {
    throw error;
  }
};
