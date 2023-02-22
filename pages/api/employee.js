import dbConnect from '@/config/database';
import Employee from '../../models/Employee';

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const employees = await Employee.find({});
        res.json(employees);
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      break;
  }
};

export default handler;
