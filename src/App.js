import React from 'react';
import './App.css';
import ListPage from './ListPage';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './Content';

function App() {
  return (
    <Router>
      <div className="App">

        <ListPage />
        <Content />

      </div>
    </Router >
  );
}

export default App;
