import dbConnect from '@/config/database';
import Employee from '@/models/Employee';
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
        const randomNum = Math.floor(Math.random() * 100);

        const employee = await Employee.create({
          firstName,
          lastName,
          email,
          gender,
          number,
          photo: `https://randomuser.me/api/portraits/men/${randomNum}.jpg`,
        });

        res.status(200).json(employee);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;

    default:
      break;
  }
};

export default handler;
