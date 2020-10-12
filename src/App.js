import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import axios from 'axios';
import Footer from './components/Footer';
import Header from './components/Header';
import History from './components/History';
import Mode from './components/Mode';
import Standard from './components/Standard';
import Scientific from './components/Scientific';
import './App.css';

function App() {

  const prefix = 'http://api.mathjs.org/v4/?expr=';
  let expr = '';
  let number = '';

  const handleClick = (button) => {
    switch (button) {
      case 'nine':
        number += '9';
        expr += '9';
        break;
      case 'eight':
        number += '8';
        expr += '8';
        break;
      case 'seven':
        number += '7';
        expr += '7';
        break;
      case 'six':
        number += '6';
        expr += '6';
        break;
      case 'five':
        number += '5';
        expr += '5';
        break;
      case 'four':
        number += '4';
        expr += '4';
        break;
      case 'three':
        number += '3';
        expr += '3';
        break;
      case 'two':
        number += '2';
        expr += '2';
        break;
      case 'one':
        number += '1';
        expr += '1';
        break;
      case 'zero':
        number += '0';
        expr += '0';
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
        expr = expr.slice(0, -1);
        break;
      case 'percent':
        // Add percent to expr
        if (number !== '') {
          Number(number);
          number = (number / 100);
          number = number.toString();
          expr = expr.slice(0, -number.length);
          expr += number;
        }
        break;
      case 'invert':
        if (number !== '') {
          expr = expr.slice(0, -number.length);
          expr += `1%2F${number}`;
          calculate(prefix + expr);
        }
        break;
      case 'square':
        if (number !== '') {
          console.log('^');
          expr += '%5E2';
          calculate(prefix + expr);
        }
        break;
      case 'squareroot':
        if (number !== '') {
          expr = expr.slice(0, -number.length);
          expr += `sqrt(${number})`;
          calculate(prefix + expr);
        }
        break;
      case 'negate':
        // Change positive to negative and vice versa
        if (number !== '') {
          expr = expr.slice(0, -number.length);
          expr += `unaryMinus(${number})`;
          calculate(prefix + expr);
        }
        break;
      case 'divide':
        if (number === '') {
          number += '0';
        }
        expr += '%2F';
        break;
      case 'multiply':
        if (number === '') {
          number += '0';
        }
        expr += '*';
        break;
      case 'subtract':
        if (number === '') {
          number += '0';
        }
        expr += '-';
        break;
      case 'add':
        if (number === '') {
          number += '0';
        }
        expr += '+';
        break;
      case 'decimal':
        if (number === '') {
          number += '0';
        }
        expr += '.';
        break;
      case 'equals':
        calculate(prefix + expr);
        break;
      default:
        // Better error handling needed
        console.log('Somehow you did something I cannot handle');
        break;
    }
    console.log(`expr: ${prefix}${expr}`);
    return expr;
  }
  const calculate = async (call) => {
    let result;
    try {
      result = await axios.get(call);
      console.log(`Result: ${result.data}`);

    } catch (e) {
      result = "Error"
    }
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