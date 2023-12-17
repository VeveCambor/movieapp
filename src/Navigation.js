import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navigation = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#191919' }}> 
      <Toolbar>
        <Typography variant="h6">
          Movie App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
