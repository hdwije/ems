import React from 'react';
import { Button } from '@mui/material';

import styles from '../styles/components/PrimaryButton.module.css';

const PrimaryButton = ({ label, onClick }) => {
  return <Button onClick={() => onClick()} className={styles.button}>{label}</Button>;
};

export default PrimaryButton;
