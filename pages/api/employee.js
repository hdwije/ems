import dbConnect from '@/config/database';
import Employee from '@/models/Employee';
import { nameRegex, emailRegex, genderRegex, phoneRegex } from '@/config/regex';
import { getValidateMessage } from '@/helper/employee';

const handler = async (req, res) => {
  const { method, query, body } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const employees = await Employee.find({});
        res.status(200).json(employees);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;

    case 'POST':
      try {
        const errorMessage = getValidateMessage(body);

        if (errorMessage) {
          return res.status(400).json({ message: errorMessage });
        }

        const { firstName, lastName, email, number, gender } = body;

        const employee = await Employee.create({
          firstName,
          lastName,
          email,
          gender,
          number,
        });

        res.status(200).json(employee);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;

    case 'PUT':
      try {
        const { empId } = query;

        if (!empId) {
          return res.status(400).json({ message: 'Employee id is required' });
        }

        const errorMessage = getValidateMessage(body);

        if (errorMessage) {
          return res.status(400).json({ message: errorMessage });
        }

        const { firstName, lastName, email, number, gender } = body;

        const updatedEmployee = await Employee.findByIdAndUpdate(empId, {
          firstName,
          lastName,
          email,
          number,
          gender,
        })
          .lean()
          .exec();

        if (!updatedEmployee) {
          return res.status(400).json({ message: 'Employee is not exists' });
        }

        res.status(200).json(updatedEmployee);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;

    default:
      break;
  }
};

export default handler;
