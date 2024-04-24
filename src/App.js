import React, { useState } from 'react';
import './App.css';
import ListPage from './ListPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topic from './Topic';
import ThreedHover from './ThreeDHover';
import SimpleMap from './SimpleMap';
import BgImgScrolling from './BgImgScrolling';
import ClipPath from './ClipPath';
import SmileRatings from './SmileRatings';

function App() {
  const [topic, setTopic] = useState('');
  return (
    <Router>
      <div className="App">
        <div className='sidebar'>
          <ListPage />
        </div>
        <div className='main-content'>
          <Topic topic={topic} />
          <Routes>
            <Route path="/" element={<ThreedHover setTopic={setTopic} />} />
            <Route path="/SimpleMap" element={<SimpleMap setTopic={setTopic} />} />
            <Route path="/BgImgScrolling" element={<BgImgScrolling setTopic={setTopic} />} />
            <Route path="/ClipPath" element={<ClipPath setTopic={setTopic} />} />
            <Route path="/SmileRatings" element={<SmileRatings setTopic={setTopic} />} />
          </Routes>

        </div>
      </div>
    </Router >
  );
}

export default App;
