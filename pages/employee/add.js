import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import {
  Alert,
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

import styles from '../../styles/pages/Form.module.css';
import HeaderButton from '@/components/HeaderButton';
import PrimaryButton from '@/components/PrimaryButton';
import { addEmployee } from '@/slices/employeeSlics';

const Add = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('M');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);

  const dispatch = useDispatch();
  const { employee, loading, error } = useSelector((state) => state.employee);

  useEffect(() => {
    const name = `${employee?.firstName} ${employee?.lastName}`;
    const message = `${name} is added successful`;

    setSuccessMessage(message);
    setErrorMessage('');
    resetAddForm();
  }, [employee]);

  useEffect(() => {
    setErrorMessage(error?.message);
    setSuccessMessage('');
  }, [error]);

  const resetAddForm = () => {
    setFirstName('');
    setLastName('');
    setNumber('');
    setEmail('');
    setGender('M');
  };

  const changeField = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;

      case 'lastName':
        setLastName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'number':
        setNumber(value);
        break;

      case 'gender':
        setGender(value);
        break;

      default:
        break;
    }
  };

  const add = () => {
    dispatch(addEmployee({ firstName, lastName, email, gender, number }));
  };

  const renderSuccessAlert = () => {
    if (!successMessage) return null;

    return (
      <Grid
        md={12}
        item
        container
        justifyContent="center"
        className={styles.alert}
      >
        <Alert severity="success">{successMessage}</Alert>
      </Grid>
    );
  };

  const renderErrorAlert = () => {
    if (!errorMessage) return null;

    return (
      <Grid
        md={12}
        item
        container
        justifyContent="center"
        className={styles.alert}
      >
        <Alert severity="error">{errorMessage}</Alert>
      </Grid>
    );
  };

  if (loading === 'pending') return <div>Loading...</div>;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        md={12}
        item
        container
        spacing={2}
        justifyContent="flex-end"
        className={styles.buttonRow}
      >
        <Grid item md={2}>
          <Link href={`/employee/list`} passHref className={styles.link}>
            <HeaderButton label="List View" onClick={() => {}} />
          </Link>
        </Grid>
      </Grid>
      {renderSuccessAlert()}
      {renderErrorAlert()}
      <Grid md={12} item container justifyContent="center">
        <Grid md={4} container item>
          <Grid md={12} container item className={styles.fieldWrapper}>
            <Grid md={4} container item>
              <InputLabel>First Name</InputLabel>
            </Grid>
            <Grid md={8} container item>
              <TextField
                fullWidth
                variant="filled"
                name="firstName"
                onChange={(event) => changeField(event)}
                value={firstName}
              />
            </Grid>
          </Grid>
          <Grid md={12} container item className={styles.fieldWrapper}>
            <Grid md={4} container item>
              <InputLabel>Last Name</InputLabel>
            </Grid>
            <Grid md={8} container item>
              <TextField
                fullWidth
                variant="filled"
                name="lastName"
                onChange={(event) => changeField(event)}
                value={lastName}
              />
            </Grid>
          </Grid>
          <Grid md={12} container item className={styles.fieldWrapper}>
            <Grid md={4} container item>
              <InputLabel>Email</InputLabel>
            </Grid>
            <Grid md={8} container item>
              <TextField
                fullWidth
                variant="filled"
                name="email"
                onChange={(event) => changeField(event)}
                value={email}
              />
            </Grid>
          </Grid>
          <Grid md={12} container item className={styles.fieldWrapper}>
            <Grid md={4} container item>
              <InputLabel>Phone</InputLabel>
            </Grid>
            <Grid md={8} container item>
              <TextField
                fullWidth
                variant="filled"
                name="number"
                onChange={(event) => changeField(event)}
                value={number}
              />
            </Grid>
          </Grid>
          <Grid md={12} container item className={styles.fieldWrapper}>
            <Grid md={4} container item>
              <InputLabel>Gender</InputLabel>
            </Grid>
            <Grid md={8} container item>
              <FormControl
                variant="filled"
                fullWidth
                sx={{ m: 1, minWidth: 120 }}
              >
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={gender}
                  name="gender"
                  onChange={(event) => changeField(event)}
                  label="Age"
                >
                  <MenuItem value="M">Male</MenuItem>
                  <MenuItem value="F">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid md={12} item container justifyContent="flex-end">
            <PrimaryButton label="Add" onClick={add} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Add;
