import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import axios from 'axios';
import Footer from './components/Footer';
import Header from './components/Header';
import History from './components/History';
import Mode from './components/Mode';
import Standard from './components/Standard';
import Scientific from './components/Scientific';
import './App.css';

function App() {

  // const prefix = 'http://api.mathjs.org/v4/?expr=';
  // let expr = '';
  let number = '';
  let phrase = '';

  const handleClick = (button) => {
    switch (button) {
      case 'nine':
        number += '9';
        phrase += '9';
        break;
      case 'eight':
        number += '8';
        phrase += '8';
        break;
      case 'seven':
        number += '7';
        phrase += '7';
        break;
      case 'six':
        number += '6';
        phrase += '6';
        break;
      case 'five':
        number += '5';
        phrase += '5';
        break;
      case 'four':
        number += '4';
        phrase += '4';
        break;
      case 'three':
        number += '3';
        phrase += '3';
        break;
      case 'two':
        number += '2';
        phrase += '2';
        break;
      case 'one':
        number += '1';
        phrase += '1';
        break;
      case 'zero':
        number += '0';
        phrase += '0';
        break;
      case 'clear':
        // Delete everything
        number = '';
        phrase = '';
        break;
      case 'delete':
        phrase = phrase.slice(0, -1);
        break;
      case 'percent':
        // Add percent to expr
        if (number !== '') {
          number = (Number(number) / 100).toString();
        }
        break;
      case 'invert':
        if (number !== '') {
          // expr = expr.slice(0, -number.length);
          /* expr += `1%2F${number}`;
          calculate(prefix + expr); */
          number = (1 / Number(number)).toString();
        }
        break;
      case 'square':
        if (number !== '') {
          /* expr += '%5E2';
          calculate(prefix + expr); */
          number = (Number(number) ** 2).toString();
        }
        break;
      case 'squareroot':
        if (number !== '') {
          /*           expr = expr.slice(0, -number.length);
                    expr += `sqrt(${number})`; */
          // calculate(prefix + expr);
          number = Math.sqrt(Number(number)).toString();
        }
        break;
      case 'negate':
        // Change positive to negative and vice versa
        if (number !== '') {
          /*           expr = expr.slice(0, -number.length);
                    expr += `unaryMinus(${number})`; */
          // calculate(prefix + expr);
          number = (-Number(number)).toString();
        }
        break;
      case 'mod':
        if (number === '') {
          number += '0';
          phrase += '0';
        }
        phrase += '%';
        break;
      case 'divide':
        if (number === '') {
          number += '0';
          phrase += '0';
        }
        phrase += '/';
        break;
      case 'multiply':
        if (number === '') {
          number += '0';
          phrase += '0';
        }
        phrase += '*';
        break;
      case 'subtract':
        if (number === '') {
          number += '0';
          phrase += '0';
        }
        phrase += '-';
        break;
      case 'add':
        if (number === '') {
          number += '0';
          phrase += '0';
        }
        phrase += '+';
        break;
      case 'decimal':
        if (number === '') {
          number += '0';
          phrase += '0';
        }
        if (!number.includes('.')) {
          number += '.';
          phrase += '.';
        }
        break;
      case 'equals':
        // calculate(prefix + expr);
        number = eval(phrase);
        phrase = '';
        break;
      default:
        // Better error handling needed
        console.log('Somehow you did something I cannot handle');
        break;
    }
    console.log(`Number: ${number}`);
    console.log(`Phrase: ${phrase}`);
    /* console.log(`expr: ${prefix}${expr}`); */
    // return expr;
  }

  return (
    <div className="App">
      <Header />
      <Mode />
      <Route exact path="/">
        <Redirect to="/standard" />
      </Route>
      <Route path="/standard">
        <Standard handleClick={handleClick} />
      </Route>
      <Route path="/scientific">
        <Scientific />
      </Route>
      <Route path="/">
        <History />
      </Route>
      <Footer />
    </div>
  );
}

export default App;