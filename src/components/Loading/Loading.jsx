import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loading() {
  return (
    <div className="container">
      <Box size="500" sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  );
}

export default Loading;
