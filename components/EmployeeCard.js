import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const EmployeeCard = ({ employee, openDeleteDialog }) => {
  const name = `${employee.firstName} ${employee.lastName}`;
  const gender = employee.gender === 'M' ? 'Male' : 'Female';

  return (
    <Card sx={{ maxWidth: 400 }}>
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
          <DeleteButton name={name} id={employee._id} onClick={openDeleteDialog} />
          <Link href={`/employee/edit/${employee._id}`} passHref>
            <EditButton />
          </Link>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default EmployeeCard;
