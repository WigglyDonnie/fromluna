import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './Nav.scss'

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <button>Sleep & Rest</button>
          <button>Eat</button>
          <button>Play</button>
          <button>Add</button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}