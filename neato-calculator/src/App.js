import React from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Display from './components/Display';
import Standard from './components/Standard';
import Scientific from './components/Scientific';

function App() {
  return (
    <div className="App">
      <h1>Neato Calculator</h1>
      <h2>by: James Mernin</h2>
      <nav>
        <button className="mode">Standard</button>
        <button className="mode">Scientific</button>
      </nav>
      <Display />
      <Route path="/standard">
        <Standard />
      </Route>
      <Route path="/scientific">
        <Scientific />
      </Route>
    </div>
  );
}

export default App;