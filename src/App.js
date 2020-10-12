import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import History from './components/History';
import Mode from './components/Mode';
import Standard from './components/Standard';
import Scientific from './components/Scientific';
import './App.css';

function App() {
  let number = '';
  let phrase = '';

  const handleClick = (button) => {
    switch (button) {
      // Number cases add a number to number
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
        // Delete one entry in phrase
        phrase = phrase.slice(0, -1);
        break;
      case 'percent':
        // Add percent to number
        if (number !== '') {
          number = (Number(number) / 100).toString();
          phrase = number;
        }
        break;
      case 'invert':
        // Invert the number
        if (number !== '') {
          number = (1 / Number(number)).toString();
          phrase = number;
        }
        break;
      case 'square':
        // Square the number
        if (number !== '') {
          number = (Number(number) ** 2).toString();
          phrase = number;
        }
        break;
      case 'squareroot':
        // Take the square root
        if (number !== '') {
          number = Math.sqrt(Number(number)).toString();
          phrase = number;
        }
        break;
      case 'negate':
        // Change positive to negative and vice versa
        if (number !== '') {
          number = (-Number(number)).toString();
          phrase = number;
        }
        break;
      case 'mod':
        // Calculate the modulus (the remainder of a quotient)
        if (phrase === '') {
          number += '0';
          phrase += '0';
        }
        phrase += '%';
        break;
      case 'divide':
        // Division operator
        if (phrase === '') {
          number += '0';
          phrase += '0';
        }
        phrase += '/';
        break;
      case 'multiply':
        // Multiplication operator
        if (phrase === '') {
          number += '0';
          phrase += '0';
        }
        phrase += '*';
        break;
      case 'subtract':
        // Subtraction operator
        if (phrase === '') {
          number += '0';
          phrase += '0';
        }
        phrase += '-';
        break;
      case 'add':
        // Addition operator
        if (phrase === '') {
          number += '0';
          phrase += '0';
        }
        phrase += '+';
        break;
      case 'decimal':
        // Add a decimal if not already there
        if (phrase === '') {
          number += '0';
          phrase += '0';
        }
        if (!phrase.includes('.')) {
          phrase += '.';
        }
        break;
      case 'equals':
        // Evaluate the expression
        number = eval(phrase);
        phrase = '';
        break;
      default:
        // Better error handling needed
        console.log('Somehow you did something I cannot handle');
        break;
    }
    /*     console.log(`Number: ${number}`);
        console.log(`Phrase: ${phrase}`); */
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