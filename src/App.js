import React from 'react';
import { Route } from 'react-router-dom';
// import axios from 'axios';
import Footer from './components/Footer';
import Header from './components/Header';
import History from './components/History';
import Mode from './components/Mode';
import Standard from './components/Standard';
import Scientific from './components/Scientific';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Mode />
      <Route path="/mode/standard">
        <Standard />
      </Route>
      <Route path="/mode/scientific">
        <Scientific />
      </Route>
      <Route path="/mode">
        <History />
      </Route>
      <Footer />
    </div>
  );
}

export default App;