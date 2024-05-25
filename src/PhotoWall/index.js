import React, { useEffect } from 'react';
import './PhotoWall.css';
import pic1 from './pic/pic1.jpg';
import pic2 from './pic/pic2.jpg';
import pic3 from './pic/pic3.jpg';
import pic4 from './pic/pic4.jpg';
import pic5 from './pic/pic5.jpg';
import pic6 from './pic/pic6.jpg';
import { Box } from '@mui/material';

const PhotoWall = ({ setTopic }) => {

  useEffect(() => {
    setTopic('PhotoWall');
  }, [setTopic]);


  return (

    <Box sx={
      {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

    <div className='container'>
      <div className='imgbox'>
        <img src={pic1} alt='' />
      </div>
      <div className='imgbox'>
        <img src={pic2} alt='' />
      </div>
      <div className='imgbox'>
        <img src={pic3} alt='' />
      </div>
      <div className='imgbox'>
        <img src={pic4} alt='' />
      </div>
      <div className='imgbox'>
        <img src={pic5} alt='' />
      </div>
      <div className='imgbox'>
        <img src={pic6} alt='' />
      </div>

    </div>
    </Box>
  );
};

export default PhotoWall;
