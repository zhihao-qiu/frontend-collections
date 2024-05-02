import React, { useState, useEffect } from 'react';
import './FlowingLightBoard.css';
import { Box } from '@mui/system';

const ThreedHover = ({ setTopic }) => {
  useEffect(() => {
    setTopic('FlowingLightBoard');
  }, [setTopic]);

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
    <Box sx={
      {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '100px',
      }}>
      <Box className="card"
        style={{
          '--rx': `${rotation.rx}deg`,
          '--ry': `${rotation.ry}deg`
        }}
        onMouseMove={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <img src={card} alt="" />
      </Box>

    </Box>
  );
};

export default ThreedHover;
