import React, { useEffect } from 'react';
import '../App.css';
import './ClipPath.css';
import city from './pic/city.jpeg';
import baby from './pic/baby.jpeg';
import { Box } from '@mui/material';


const ClipPath = ({ setTopic }) => {
  useEffect(() => {
    setTopic('Clippath');
  }, [setTopic]);

  return (
    <Box sx={
      {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '100px',
      }}>
      <Box component="div" className='container1'>
        <img src={city} alt="city" className='box1' />
      </Box>
      <Box component="div" className='container2'>
        <img src={baby} alt="baby" className='box2' />
      </Box>
      <Box component="div" className='container3'>
        <h1>A horse in the war</h1>
      </Box>
    </Box>
  );
};

export default ClipPath;
