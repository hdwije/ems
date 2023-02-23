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

export const validateFirstName = (firstName) => {
  if (!firstName.match(nameRegex)) {
    return 'First name is invalid';
  }

  return null;
};

export const validateLastName = (lastName) => {
  if (!lastName.match(nameRegex)) {
    return 'Last name is invalid';
  }

  return null;
};

export const validateEmail = (email) => {
  if (!email.match(emailRegex)) {
    return 'Email is invalid';
  }

  return null;
};

export const validateNumber = (number) => {
  if (!number.match(phoneRegex)) {
    return 'Phone number is invalid';
  }

  return null;
};
