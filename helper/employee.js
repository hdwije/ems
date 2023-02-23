import { nameRegex, emailRegex, genderRegex, phoneRegex } from '@/config/regex';

export const getValidateMessage = ({
  firstName,
  lastName,
  email,
  number,
  gender,
}) => {
  let message = undefined;

  if (!firstName || !lastName || !email || !number || !gender) {
    message = 'All fields are required';
  }

  if (!firstName.match(nameRegex)) {
    message = 'First name is invalid';
  }

  if (!lastName.match(nameRegex)) {
    message = 'Last name is invalid';
  }

  if (!email.match(emailRegex)) {
    message = 'Email is invalid';
  }

  if (!number.match(phoneRegex)) {
    message = 'Phone number is invalid';
  }

  if (!gender.match(genderRegex)) {
    message = 'Gender is invalid';
  }

  return message;
};
