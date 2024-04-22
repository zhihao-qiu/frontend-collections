import React from 'react';
import './App.css';
import ListPage from './ListPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThreedHover from './ThreeDHover';
import SimpleMap from './SimpleMap';
import Landing from './Landing';
import BgImgScrolling from './BgImgScrolling'
import ClipPath from './ClipPath'

function App() {
  return (
    <Router>
      <div className="App">
        <div className='sidebar'>
          <ListPage />
        </div>
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/ThreedHover" element={<ThreedHover />} />
            <Route path="/SimpleMap" element={<SimpleMap />} />
            <Route path="/BgImgScrolling" element={<BgImgScrolling />} />
            <Route path="/ClipPath" element={<ClipPath />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
