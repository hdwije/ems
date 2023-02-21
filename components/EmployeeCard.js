import React from 'react';
import Link from 'next/link';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const EmployeeCard = ({ employee }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={employee.photo}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/employee/edit/${employee.id}`} passHref>
          <Button size="small">Edit</Button>
        </Link>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default EmployeeCard;
