import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import Link from 'next/link';

import styles from '../../styles/pages/Add.module.css';
import HeaderButton from '@/components/HeaderButton';
import PrimaryButton from '@/components/PrimaryButton';

const add = () => {
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
      <Grid md={12} item container justifyContent="center">
        <Grid md={4} container item>
          <Grid md={12} container item className={styles.fieldWrapper}>
            <Grid md={4} container item>
              <InputLabel>First Name</InputLabel>
            </Grid>
            <Grid md={8} container item>
              <TextField fullWidth variant="filled" value={''} />
            </Grid>
          </Grid>
          <Grid md={12} container item className={styles.fieldWrapper}>
            <Grid md={4} container item>
              <InputLabel>Last Name</InputLabel>
            </Grid>
            <Grid md={8} container item>
              <TextField fullWidth variant="filled" value={''} />
            </Grid>
          </Grid>
          <Grid md={12} container item className={styles.fieldWrapper}>
            <Grid md={4} container item>
              <InputLabel>Email</InputLabel>
            </Grid>
            <Grid md={8} container item>
              <TextField fullWidth variant="filled" value={''} />
            </Grid>
          </Grid>
          <Grid md={12} container item className={styles.fieldWrapper}>
            <Grid md={4} container item>
              <InputLabel>Phone</InputLabel>
            </Grid>
            <Grid md={8} container item>
              <TextField fullWidth variant="filled" value={''} />
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
                  value={'M'}
                  onChange={() => {}}
                  label="Age"
                >
                  <MenuItem value="M">Male</MenuItem>
                  <MenuItem value="F">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid md={12} item container justifyContent="flex-end">
            <PrimaryButton label="Add" onClick={() => {}} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default add;
