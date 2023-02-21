import React from 'react';
import Link from 'next/link';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';

import styles from '../styles/components/EmployeeCard.module.css';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const EmployeeCard = ({ employee }) => {
  const name = `${employee.first_name} ${employee.last_name}`;
  const gender = employee.gender === 'M' ? 'Male' : 'Female';

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={employee.photo}
        title="green iguana"
      />
      <CardContent>
        <Grid container item md={12}>
          <List>
            <ListItem disablePadding>
              <Typography sx={{ fontSize: '0.75rem' }}>{name}</Typography>
            </ListItem>
            <ListItem disablePadding>
              <Typography sx={{ fontSize: '0.75rem' }}>
                {employee.email}
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <Typography sx={{ fontSize: '0.75rem' }}>
                {employee.number}
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <Typography sx={{ fontSize: '0.75rem' }}>{gender}</Typography>
            </ListItem>
          </List>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container item md={12} spacing={2} justifyContent="flex-end">
          <DeleteButton />
          <Link href={`/employee/edit/${employee.id}`} passHref>
            <EditButton />
          </Link>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default EmployeeCard;
