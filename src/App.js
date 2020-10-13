import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import History from './components/History';
import Mode from './components/Mode';
import Standard from './components/Standard';
import Scientific from './components/Scientific';
import './App.css';

function App() {
  let [number, setNumber] = useState('');
  let [phrase, setPhrase] = useState('');
  let [result, setResult] = useState('0');

  let helpEndPhrase = false;

  const addZero = () => {
    if (number === '') {
      setNumber('0');
    }
  }

  const evaluate = () => {
    if (helpEndPhrase === true) {
      setPhrase(phrase += ')');
      helpEndPhrase = false;
    }
    setResult(eval(phrase)); // eslint-disable-line no-eval
    setPhrase('');
    setNumber('');
  }

  const handleClick = (button) => {
    switch (button) {
      case '9':
      case '8':
      case '7':
      case '6':
      case '5':
      case '4':
      case '3':
      case '2':
      case '1':
      case '0':
        // Number cases add the digit to a number
        setNumber(number += button);
        setPhrase(phrase += button);
        break;
      case 'clear':
        // Delete everything
        setNumber('');
        setPhrase(<br />);
        setResult('0');
        break;
      case 'delete':
        // Delete one entry in phrase
        setPhrase(phrase.slice(0, -1));
        break;
      case 'exponent':
        // exponent
        if (phrase === '') {
          setNumber(phrase += '0');
          setPhrase(phrase += '0');
        }
        setPhrase(phrase += '**');
        setNumber('');
        break;
      case 'yrootx':
        // yth root
        if (number !== '') {
          setPhrase(phrase += `Math.pow(${number}, 1/`);
          helpEndPhrase = true;
          setNumber('');
        }
        break;
      case 'tentothex':
        // Use number to return 10 to its power
        addZero();
        setPhrase(phrase += `10**${number}`);
        evaluate();
        break;
      case 'twotothex':
        // Use number to return 2 to its power
        addZero();
        setPhrase(phrase += `2**${number}`);
        evaluate();
        break;
      case 'log':
        // Log base 10
        addZero();
        setPhrase(phrase += `Math.log10(${number})`);
        evaluate();
        break;
      case 'logyx':
        // Log base y of x
        addZero();
        setPhrase(`Math.log(${number})/Math.log(10)`);
        helpEndPhrase = true;
        setNumber = '';
        break;
      case 'naturallog':
        // Log base e
        addZero();
        setPhrase(`Math.log(${number})`);
        evaluate();
        break;
      case 'etothex':
        // Use number to return e to its power
        addZero();
        setPhrase(`e**${number}`);
        evaluate();
        break;
      case 'pi':
        // Get value of pi
        setNumber(Math.PI());
        break;
      case 'e':
        // Get value of e
        setNumber(Math.E());
        break;
      case 'absolute':
        // Get absolute value of number
        addZero();
        setPhrase(phrase + `Math.abs(${number})`);
        evaluate();
        break;
      case 'cube':
        // Cube the number
        if (number !== '') {
          setNumber((Number(number) ** 3).toString());
          evaluate();
        }
        break;
      case 'leftparen':
        // Add a left parenthesis
        phrase += '(';
        break;
      case 'rightparen':
        // Add a right parenthesis
        setPhrase(phrase += ')');
        break;
      case 'percent':
        // Add percent to number
        if (number !== '') {
          setNumber((Number(number) / 100).toString());
          evaluate();
        }
        break;
      case 'invert':
        // Invert the number
        if (number !== '' && number !== '0') {
          setNumber((1 / Number(number)).toString());
          evaluate();
        }
        break;
      case 'square':
        // Square the number
        if (number === '') {
          setNumber('0');
        }
        setNumber((Number(number) ** 2).toString());
        evaluate();
        break;
      case 'squareroot':
        // Take the square root
        if (number !== '') {
          setNumber(Math.sqrt(Number(number)).toString());
          evaluate();
        }
        break;
      case 'negate':
        // Change positive to negative and vice versa
        if (number !== '') {
          setNumber((-Number(number)).toString());
          evaluate();
        }
        break;
      case '%':
      case '/':
      case '*':
      case '-':
      case '+':
        // Calculate the modulus (the remainder of a quotient)
        if (phrase === '') {
          setNumber(number += '0');
          setPhrase(phrase += '0');
        }
        setPhrase(phrase += button);
        setNumber(''); // Deleting number after symbol helps decimal checking
        break;
      case 'decimal':
        // Add a decimal if not already there
        if (!number.includes('.')) {
          setNumber += '.';
          phrase += '.';
        }
        break;
      case 'equals':
        // Evaluate the expression
        evaluate();
        break;
      default:
        setResult('Error');
        break;
    }
    console.log(`Number: ${number}`);
    console.log(`Phrase: ${phrase}`);
    console.log(`Result: ${result}`);
  }

  return (
    <div className="App">
      <Header />
      <Mode />
      <Route exact path="/">
        <Redirect to="/standard" />
      </Route>
      <Route path="/standard">
        <Standard handleClick={handleClick} phrase={phrase} result={result} />
      </Route>
      <Route path="/scientific">
        <Scientific handleClick={handleClick} phrase={phrase} result={result} />
      </Route>
      <Route path="/">
        <History />
      </Route>
      <Footer />
    </div>
  );
}

export default App;