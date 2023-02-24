import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Image from 'next/image';

import styles from '../styles/components/TableView.module.css';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const columns = [
  { id: 'image', label: 'Image' },
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'email', label: 'Email' },
  { id: 'phone', label: 'Phone' },
  { id: 'gender', label: 'Gender' },
  { id: 'action', label: 'Action' },
];

const TableView = ({ employees, openDeleteDialog }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const updatedRows = employees.map((employee) => ({
      image: employee.photo,
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      phone: employee.number,
      gender: employee.gender,
      action: employee.id,
      id: employee._id,
    }));

    setRows(updatedRows);
  }, [employees]);

  const renderTableCell = (columnId, value, row) => {
    if (columnId === 'gender') {
      if (value === 'M') {
        return 'Male';
      } else {
        return 'Female';
      }
    }

    if (columnId === 'image') {
      return <Image width={50} height={50} src={value} alt={value} />;
    }

    if (columnId === 'action') {
      const name = `${row.firstName} ${row.lastName}`;

      return (
        <Grid container item md={12} spacing={1}>
          <DeleteButton name={name} id={row.id} onClick={openDeleteDialog} />
          <Link href={`/employee/edit/${row.id}`} passHref>
            <EditButton />
          </Link>
        </Grid>
      );
    }

    return value;
  };

  return (
    <Grid md={12} item container spacing={2} className={styles.tableGrid}>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 'calc(100vh - 200px)' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} sx={{ fontWeight: 600 }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id}>
                          {renderTableCell(column.id, value, row)}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>
  );
};

export default TableView;
