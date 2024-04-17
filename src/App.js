import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from './ListPage';
import ThreedHover from './ThreeDHover';
import SimpleMap from './SimpleMap';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/ThreeDHover" element={<ThreedHover />} />
          <Route path="/SimpleMap" element={<SimpleMap />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
