/* Soleil will review this code */
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

  let call = 'http://api.math.js.org/v4/?expr=';
  let expr = '';
  let number = '';

  const handleClick = (button) => {
    console.log(button);
    switch (button) {
      case 'nine':
        number += '9';
        expr += '9';
        // console.log(9);
        break;
      case 'eight':
        number += '8';
        expr += '8';
        // console.log(8);
        break;
      case 'seven':
        number += '7';
        expr += '7';
        // console.log(7);
        break;
      case 'six':
        number += '6';
        expr += '6';
        // console.log(6);
        break;
      case 'five':
        number += '5';
        expr += '5';
        // console.log(5);
        break;
      case 'four':
        number += '4';
        expr += '4';
        // console.log(4);
        break;
      case 'three':
        number += '3';
        expr += '3';
        // console.log(3);
        break;
      case 'two':
        number += '2';
        expr += '2';
        // console.log(2);
        break;
      case 'one':
        number += '1';
        expr += '1';
        // console.log(1);
        break;
      case 'zero':
        number += '0';
        expr += '0';
        // console.log(0);
        break;
      case 'clearentry':
        // Delete last thing entered
        console.log('CE');
        break;
      case 'clear':
        // Delete everything
        console.log('C');
        break;
      case 'delete':
        // Redundant
        console.log('⌫');
        break;
      case 'percent':
        // Add percent to expr
        // console.log('%');
        if (number !== '') {
          Number(number);
          number = (number / 100);
          number = number.toString();
          expr = expr.slice(0, -number.length);
          expr += number;
        }
        break;
      case 'invert':
        // console.log('1/x');
        if (number !== '') {
          expr = expr.slice(0, -number.length);
          expr += `1%2F${number}`;
          // calculate(call + expr);
        }
        break;
      case 'square':
        console.log(number);
        if (number !== '') {
          console.log('^');
          expr += '%5E2';
        }
        break;
      case 'squareroot':
        break;
      case 'negate':
        // Change positive to negative and vice versa
        // console.log('+/-');
        if (number !== '') {
          expr = expr.slice(0, -number.length);
          expr += `unaryMinus(${number})`;
          // calculate(call + expr);
        }
        break;
      case 'divide':
        console.log('/');
        break;
      case 'multiply':
        console.log('*');
        break;
      case 'subtract':
        console.log('-');
        break;
      case 'add':
        console.log('+');
        break;
      case 'decimal':
        console.log('.');
        break;
      case 'equals':
        // Make axios expr here
        console.log('=');
        break;
      default:
        // Better error handling needed
        console.log('Somehow you did something I cannot handle');
        break;
    }
    console.log(number);
    console.log(`expr: ${call}${expr}`);
    return expr;
  }
  /* 
    const calculate = () => {
      try {
        result = ((eval(this.result) || "") + "");
      } catch (e) {
        result = "Error"
      }
    }
  
    const reset = () => {
      result = '';
    }
  
    const backspace = () => {
      result = result.slice(0, -1);
    } */

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