import dbConnect from '@/config/database';
import Employee from '@/models/Employee';
import { nameRegex, emailRegex, genderRegex, phoneRegex } from '@/config/regex';

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
      const { firstName, lastName, email, number, gender } = body;

      try {
        if (!firstName || !lastName || !email || !number || !gender) {
          return res.status(400).json({ message: 'All fields are required' });
        }

        if (!firstName.match(nameRegex)) {
          return res.status(400).json({ message: 'First name is invalid' });
        }

        if (!lastName.match(nameRegex)) {
          return res.status(400).json({ message: 'Last name is invalid' });
        }

        if (!email.match(emailRegex)) {
          return res.status(400).json({ message: 'Email is invalid' });
        }

        if (!number.match(phoneRegex)) {
          return res.status(400).json({ message: 'Phone number is invalid' });
        }

        if (!gender.match(genderRegex)) {
          return res.status(400).json({ message: 'Gender is invalid' });
        }

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

    default:
      break;
  }
};

export default handler;
