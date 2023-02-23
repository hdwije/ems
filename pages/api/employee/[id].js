import dbConnect from '@/config/database';
import { getValidateMessage } from '@/helper/employee';
import Employee from '@/models/Employee';

const handler = async (req, res) => {
  const { method, query, body } = req;

  await dbConnect();

  switch (method) {
    case 'PUT':
      console.log('method', method);
      console.log('query', query);
      console.log('body', body);
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

    default:
      break;
  }
};

export default handler;
