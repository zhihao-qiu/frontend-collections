import React, { useState, useEffect } from 'react';
import './FlowingLightBoard.css';
import { Box } from '@mui/system';
import { Button, Container } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const FlowingLightBoard = ({ setTopic }) => {
  const [schema, setSchema] = useState('night');

  useEffect(() => {
    setTopic('FlowingLightBoard');
  }, [setTopic]);

  useEffect(() => {
    if (schema === 'night') {
      document.documentElement.style.setProperty('--bg-color', '#000');
      document.documentElement.style.setProperty('--flowing-color', '#22292f');
    } else {
      document.documentElement.style.setProperty('--bg-color', '#fff');
      document.documentElement.style.setProperty('--flowing-color', '#9bbb27');
    }
  }, [schema]);

  return (

    <Box sx={
      {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: 5,
        ...(schema === 'night' && { bgcolor: '#000' }),
        ...(schema === 'day' && { bgcolor: '#fff' }),
      }}>
      <Container component="div" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', gap: 2, padding: 5 }}>
        <Button variant="contained" color="secondary" sx={{ width: 150 }} startIcon={<LightModeIcon />} onClick={() => {
          setSchema('day');
        }}>Light On</Button>
        <Button variant="contained" color="secondary" sx={{ width: 150 }} startIcon={<DarkModeIcon />} onClick={() => {
          setSchema('night');
        }}>Light Off</Button>

      </Container>

      <div className='box'>Flowing Light</div>
    </Box>
  );
};

export default FlowingLightBoard;
