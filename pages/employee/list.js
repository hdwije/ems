import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

function List({ employees }) {
  return (
    <Grid container spacing={2}>
      {employees.map((employee) => (
        <Grid item md={3} key={employee.id}>
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
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={`/employee/edit/${employee.id}`}>
              <Button size="small">Edit</Button>
              </Link>
              <Button size="small">Delete</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export async function getServerSideProps() {
  const response = await import('/data/employees.json');
  const employees = await JSON.parse(JSON.stringify(response.default ?? []));

  return {
    props: {
      employees,
    },
  };
}

export default List;
