import React, { useState, useEffect } from 'react';
import '../App.css';
const SmileRatings = ({ setTopic }) => {
  useEffect(() => {
    setTopic('SmileRatings');
  }, [setTopic]);

  return (
    <div className='w-full h-full flex justify-center items-center mt-32'>
      <div>
      </div>
    </div>
  );
};

export default SmileRatings;
