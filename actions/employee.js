import axios from 'axios';

export const getAll = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/employee');
    const employees = response.data ?? [];

    return employees;
  } catch (error) {
    console.error('getAll ERROR: ', error);
  }
};

export const add = async (employee) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/employee',
      employee,
    );

    const addEmployee = response.data ?? [];

    return addEmployee;
  } catch (error) {
    console.error('add ERROR: ', error);
  }
};
