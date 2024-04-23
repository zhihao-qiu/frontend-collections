import React, { useState } from 'react';
import './App.css';
import ListPage from './ListPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThreedHover from './ThreeDHover';
import SimpleMap from './SimpleMap';
import BgImgScrolling from './BgImgScrolling';
import ClipPath from './ClipPath';
import Topic from './Topic';

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
          </Routes>

        </div>
      </div>
    </Router >
  );
}

export default App;
