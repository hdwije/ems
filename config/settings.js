import config from '../config.json';

const settings = config[process.env.NODE_ENV];
const { baseUrl } = settings;

export const employeeApiPath = `${baseUrl}/api/employee`;
