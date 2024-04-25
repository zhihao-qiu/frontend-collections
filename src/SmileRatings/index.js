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

  const handleKeyDown = (e) => {
    const currentKey = e.key;
    const value = parseFloat(e.target.value);
    console.log(currentKey);
    // if key is Enter, then setRangeValue to (current value / 100)
    if (currentKey === 'Enter') {
      console.log(value);
      if (!Number(value)) {
        alert('Please enter a valid number between 0 and 99');
        return;
      }

      if (value < 0 || value > 99) {
        alert('Please enter a valid number between 0 and 99');
        return;
      }
      setRangeValue(value / 100);
    }
  };


  useEffect(() => {
    const slider = document.querySelector('input[type="range"]');
    slider.value = rangeValue;
    const face = document.querySelector('.face');
    const lefteye = document.querySelector('.lefteye');
    const righteye = document.querySelector('.righteye');
    const mouth = document.querySelector('.mouth');
    const digitValue = document.querySelector('input[type="text"]');
    digitValue.value = Math.floor(rangeValue * 100);

    face.style.setProperty('--delay', `${-rangeValue}s`);
    lefteye.style.setProperty('--delay', `${-rangeValue}s`);
    righteye.style.setProperty('--delay', `${-rangeValue}s`);
    mouth.style.setProperty('--delay', `${-rangeValue}s`);
  }, [rangeValue]);

  return (
    <div className='w-full h-full flex flex-col items-center mt-16'>
      <div className='w-full mb-16'>
        <p className='text-2xl'>How do you like our service?</p>
      </div>
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
      <div>
        <input type='text' className='border border-gray-300 rounded-md w-40 py-2 px-4 mt-8 mr-8' onKeyDown={(e) => { handleKeyDown(e); }}>
        </input>
        <button className='inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold w-40 py-2 px-4 rounded-full mt-8' onClick={() => {
          setRangeValue(0.5);
        }}>Reset</button>
      </div>
    </div>
  );
};

export default SmileRatings;
