import dbConnect from '@/config/database';
import { getValidateMessage } from '@/helper/employee';
import Employee from '@/models/Employee';

const handler = async (req, res) => {
  const { method, query, body } = req;

  await dbConnect();

  switch (method) {
    case 'PUT':
      try {
        const { id } = query;

        if (!id) {
          return res.status(400).json({ message: 'Employee id is required' });
        }

        const errorMessage = getValidateMessage(body);

        if (errorMessage) {
          return res.status(400).json({ message: errorMessage });
        }

        const { firstName, lastName, email, number, gender } = body;

        const updatedEmployee = await Employee.findByIdAndUpdate(id, {
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

    case 'DELETE':
      try {
        const { id } = query;

        if (!id) {
          return res.status(400).json({ message: 'Employee id is required' });
        }

        const deletedEmployee = await Employee.deleteOne({ _id: id });
        const employees = await Employee.find({});

        res.status(200).json({ employees, deletedEmployee });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;

    default:
      break;
  }
};

export default handler;
