import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Topic from "./Topic";
import ThreedHover from "./ThreeDHover";
import SimpleMap from './SimpleMap';
import BgImgScrolling from './BgImgScrolling';
import ClipPath from './ClipPath';
import SmileRatings from './SmileRatings';
import FlowingLightBoard from './FlowingLightBoard';

import Box from '@mui/material/Box';

const Content = () => {
  const [topic, setTopic] = useState("");
  return (
    <Box sx={{ width: '80%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1}}>
      <Topic topic={topic} />
      <Routes>
        <Route path="/" element={<ThreedHover setTopic={setTopic} />} />
        <Route path="/SimpleMap" element={<SimpleMap setTopic={setTopic} />} />
        <Route path="/BgImgScrolling" element={<BgImgScrolling setTopic={setTopic} />} />
        <Route path="/ClipPath" element={<ClipPath setTopic={setTopic} />} />
        <Route path="/SmileRatings" element={<SmileRatings setTopic={setTopic} />} />
        <Route path="/FlowingLightBoard" element={<FlowingLightBoard setTopic={setTopic} />} />
      </Routes>
    </Box>
  );
};

export default Content;
