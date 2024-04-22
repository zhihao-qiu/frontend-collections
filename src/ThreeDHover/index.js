import React, { useState } from 'react';
import '../App.css';
import './3dhover.css';
import card from './pic/promo_swsh061.jpg';
function ThreedHover() {
  const [rotation, setRotation] = useState({ rx: 0, ry: 0 });

  const yRange = [-20, 20];
  const xRange = [-25, 25];

  function handleMouseOver(e) {
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
    <div className="w-full h-screen flex flex-col justify-start items-center">
      <div>
        <p className="text-4xl font-bold mt-10">3D Hover Card</p>
        <p className="text-2xl mt-10">Hover over the card to see the 3D effect</p>
      </div>
      <div className='h-full flex justify-center items-center'>
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
    </div>
  );
}

export default ThreedHover;
