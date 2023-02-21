import { Box, Grid, Typography } from '@mui/material';

import styles from '../styles/components/Header.module.css'

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container item md={12} className={styles.mainHeader}>
      <Typography variant="h6">Employee Manager</Typography>
    </Grid>
  </Box>
);

export default Header;
