import dbConnect from '@/config/database';
import Employee from '../../models/Employee';

const handler = async (req, res) => {
  const { method, query } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const employees = await Employee.find({});
        res.status(200).json(employees);
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case 'GET':
      try {
        const employees = await Employee.find({});
        res.status(200).json(employees);
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      break;
  }
};

export default handler;
