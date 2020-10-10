import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
// import axios from 'axios';
import History from './components/History';
import Standard from './components/Standard';
import Scientific from './components/Scientific';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Neato Calculator</h1>
      <h2>by: James Mernin</h2>
      <nav>
        {/* Idea for buttons from https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button */}
        <Link to="/mode/standard">
          <Button className="mode">
            <p id="standard">Standard</p>
          </Button>
        </Link>
        <Link to="/mode/scientific">
          <Button className="mode">
            <p id="scientific">Scientific</p>
          </Button>
        </Link>
      </nav>
      <Route path="/mode/standard">
        <Standard />
      </Route>
      <Route path="/mode/scientific">
        <Scientific />
      </Route>
      <Route path="/mode">
        <History />
      </Route>
    </div>
  );
}

export default App;