import React from 'react';

// Material UI Components
import Link from '@mui/material/Link'
import { Typography } from '@mui/material';

const Copyright = () => {
  return (
    <Typography variant='body2' color="GrayText" align='center'>
      { 'Copyright (C) '}
      <Link color="inherit" href='https://imaginaformacion.com'>
        Imagina Formación
      </Link>
      
    </Typography>
  );
}

export default Copyright;
