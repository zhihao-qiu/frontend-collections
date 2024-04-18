import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import ListPage from './ListPage';
import ThreedHover from './ThreeDHover';
import SimpleMap from './SimpleMap';

function Layout() {
  return (
    <Router>
      <div className="layout">
        <ListPage />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/ThreeDHover" element={<ThreedHover />} />
          <Route path="/SimpleMap" element={<SimpleMap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Layout;