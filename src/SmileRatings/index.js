import React, { useState, useEffect } from 'react';
import '../App.css';
import './SmileRatings.css';
const SmileRatings = ({ setTopic }) => {
  useEffect(() => {
    setTopic('SmileRatings');
  }, [setTopic]);

  const [rangeValue, setRangeValue] = useState(0.5);

  const handleMove = (e) => {
    const value = parseFloat(e.target.value);
    setRangeValue(value);
  };

  useEffect(() => {
    const face = document.querySelector('.face');
    const lefteye = document.querySelector('.lefteye');
    const righteye = document.querySelector('.righteye');
    const mouth = document.querySelector('.mouth');
    face.style.setProperty('--delay', `${-rangeValue}s`);
    lefteye.style.setProperty('--delay', `${-rangeValue}s`);
    righteye.style.setProperty('--delay', `${-rangeValue}s`);
    mouth.style.setProperty('--delay', `${-rangeValue}s`);
  }, [rangeValue]);

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='smile_face'>
        <div className='face'></div>
        <div className='lefteye'></div>
        <div className='righteye'></div>
        <div className='mouth'></div>
      </div>
      <div className='w-full'>
        <input type='range' min='0' max='0.99' step='0.01' defaultValue={0.5} onInput={(e) => {
          handleMove(e);
        }} />
      </div>
    </div>
  );
};

export default SmileRatings;
