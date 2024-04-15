import React, { useState } from 'react';
import '../App.css';
import './3dhover.css';
import card from './pic/promo_swsh061.jpg';

function ThreedHover() {
  const [rotation, setRotation] = useState({ rx: 0, ry: 0 });

  const yRange = [-20, 20];
  const xRange = [-25, 25];

  function handleMouseOver(e) {
    console.log('yes');
    const rx = getRotateDeg(xRange, e.nativeEvent.offsetY, e.target.offsetHeight);
    const ry = -getRotateDeg(yRange, e.nativeEvent.offsetX, e.target.offsetWidth);
    setRotation({ rx, ry });
  }

  function handleMouseLeave() {
    setRotation({ rx: 0, ry: 0 });
  }

  function getRotateDeg(range, value, length) {
    return (value / length) * (range[1] - range[0]) + range[0];
  }
  return (
    <div className='App-header'>
      <div
        className="card"
        style={{
          '--rx': `${rotation.rx}deg`,
          '--ry': `${rotation.ry}deg`
        }}
        onMouseMove={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <img src={card} alt="" />
      </div>
    </div>
  );
}

export default ThreedHover;
