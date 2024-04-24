import React, { useEffect } from 'react';
import '../App.css';
import './ClipPath.css';
import city from './pic/city.jpeg';
import baby from './pic/baby.jpeg';

const ClipPath = ({ setTopic }) => {
  useEffect(() => {
    setTopic('Clippath');
  }, [setTopic]);

  return (
    <div className='flex flex-row'>
      <div className='container1'>
        <img src={city} alt="city" className='box1' />
      </div>
      <div className='container2'>
        <img src={baby} alt="baby" className='box2' />
      </div>
      <div className='container3'>
        <h1>A horse in the war</h1>
      </div>
    </div>
  );
};

export default ClipPath;
