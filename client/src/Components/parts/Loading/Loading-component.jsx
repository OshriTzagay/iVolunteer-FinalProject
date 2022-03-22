import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (<div className='Container' style={{margin:'40vh'}}>
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    </div>);
}