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
