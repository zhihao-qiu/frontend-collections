import React from 'react';
import './App.css';
import ListPage from './ListPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThreedHover from './ThreeDHover';
import SimpleMap from './SimpleMap';
import Landing from './Landing';

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
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
