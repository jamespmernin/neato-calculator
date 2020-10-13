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
  let result = '';

  const evaluate = () => {
    result = eval(phrase);
    phrase = result;
    number = '';
  }

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
      case 'exponent':
        // exponent
        if (phrase === '') {
          number += '0';
          phrase += '0';
        }
        phrase += '**';
        number = '';
        break;
      case 'yrootx':
        // yth root
        if (number !== '') {
          phrase = `Math.pow(${number}, 1/)`;
          number = '';
        }
        // TODO: Check for number and add it to phrase
        break;
      case 'tentothex':
        // Use number to return 10 to its power
        if (number === '') {
          number = 0;
        }
        phrase = `10**${number}`;
        evaluate();
        break;
      case 'twotothex':
        // Use number to return 2 to its power
        if (number === '') {
          number = 0;
        }
        phrase = `2**${number}`;
        evaluate();
        break;
      case 'log':
        // Log base 10
        if (number === '') {
          number = 0;
        }
        phrase = `Math.log10(${number})`;
        evaluate();
        break;
      case 'logyx':
        // Log base y of x
        if (number === '') {
          number = 0;
        }
        phrase = `Math.log(${number})/Math.log(10)`;
        // TODO: How to get x
        break;
      case 'naturallog':
        // Log base e
        if (number === '') {
          number = 0;
        }
        phrase = `Math.log(${number})`;
        evaluate();
        break;
      case 'etothex':
        // Use number to return e to its power
        if (number === '') {
          number = 0;
        }
        phrase = `e**${number}`;
        evaluate();
        break;
      case 'pi':
        // Get value of pi
        number = Math.PI();
        break;
      case 'e':
        // Get value of e
        number = Math.E();
        break;
      case 'absolute':
        // Get absolute value of number
        if (number === '') {
          number = 0;
        }
        phrase = `Math.abs(${number})`;
        evaluate();
        break;
      case 'cube':
        // Cube the number
        if (number !== '') {
          number = (Number(number) ** 3).toString();
          result = number;
          phrase = number;
        }
        break;
      case 'leftparen':
        // Add a left parenthesis
        phrase += '(';
        break;
      case 'rightparen':
        // Add a right parenthesis
        phrase += ')';
        break;
      case 'percent':
        // Add percent to number
        if (number !== '') {
          number = (Number(number) / 100).toString();
          result = eval(phrase);
          phrase = result;
          number = '';
        }
        break;
      case 'invert':
        // Invert the number
        if (number !== '') {
          number = (1 / Number(number)).toString();
          result = eval(phrase);
          phrase = result;
          number = '';
        }
        break;
      case 'square':
        // Square the number
        if (number !== '') {
          number = (Number(number) ** 2).toString();
          result = eval(phrase);
          phrase = result;
          number = '';
        }
        break;
      case 'squareroot':
        // Take the square root
        if (number !== '') {
          number = Math.sqrt(Number(number)).toString();
          result = eval(phrase);
          phrase = result;
          number = '';
        }
        break;
      case 'negate':
        // Change positive to negative and vice versa
        if (number !== '') {
          number = (-Number(number)).toString();
          result = eval(phrase);
          phrase = result;
          number = '';
        }
        break;
      case 'mod':
        // Calculate the modulus (the remainder of a quotient)
        if (phrase === '') {
          number += '0';
          phrase += '0';
        }
        phrase += '%';
        number = ''; // Deleting number after symbol helps decimal checking
        break;
      case 'divide':
        // Division operator
        if (phrase === '') {
          number += '0';
          phrase += '0';
        }
        phrase += '/';
        number = '';
        break;
      case 'multiply':
        // Multiplication operator
        if (phrase === '') {
          number += '0';
          phrase += '0';
        }
        phrase += '*';
        number = '';
        break;
      case 'subtract':
        // Subtraction operator
        if (phrase === '') {
          number += '0';
          phrase += '0';
        }
        phrase += '-';
        number = '';
        break;
      case 'add':
        // Addition operator
        if (phrase === '') {
          number += '0';
          phrase += '0';
        }
        phrase += '+';
        number = '';
        break;
      case 'decimal':
        // Add a decimal if not already there
        if (!number.includes('.')) {
          number += '.';
          phrase += '.';
        }
        break;
      case 'equals':
        // Evaluate the expression
        /* let cleanPhrase = phrase.replace(/[^-()\d/*+.]/g, '') */; // found this regex here: https://stackoverflow.com/questions/6479236/calculate-string-value-in-javascript-not-using-eval
        result = eval(phrase);
        phrase = '';
        number = '';
        break;
      default:
        // Better error handling needed
        console.log('Somehow you did something I cannot handle');
        break;
    }
    console.log(number);
    console.log(phrase);
    console.log(result);
  }

  return (
    <div className="App">
      <Header />
      <Mode />
      <Route exact path="/">
        <Redirect to="/standard" />
      </Route>
      <Route path="/standard">
        <Standard handleClick={handleClick} result={result} />
      </Route>
      <Route path="/scientific">
        <Scientific handleClick={handleClick} />
      </Route>
      <Route path="/">
        <History />
      </Route>
      <Footer />
    </div>
  );
}

export default App;