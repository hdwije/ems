import path from 'path';
import fs from 'fs';

const buildPath = () => {
  return path.join(process.cwd(), 'data/employees.json');
};

const extractData = (filePath) => {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return data;
};

export default function handler(req, res) {
  const { method } = req;
  const filePath = buildPath();
  const employees = extractData(filePath);

  if (!employees)
    return res.status(404).json({ message: 'Employees not found' });

  switch (method) {
    case 'POST':
      const { id, firstName } = req.body;

      const updatedEmployees = employees.map((employee) => {
        if (employee.id === id) {
          employee.first_name = firstName;
        }

        return employee;
      });

      fs.writeFileSync(filePath, JSON.stringify(updatedEmployees));

      res.json({ message: 'Successfully added ' + firstName });
      break;

    default:
      break;
  }
}
