import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './Nav.scss'

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Button color="inherit">Sleep & Rest</Button>
          <Button color="inherit">Eat</Button>
          <Button color="inherit">Play</Button>
          <Button color="inherit">Add</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}