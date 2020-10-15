import React, { useState, useEffect } from 'react';
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
  const [number, setNumber] = useState('');
  const [phrase, setPhrase] = useState('');
  const [result, setResult] = useState('0');
  const [errorMessage, setErrorMessage] = useState('');
  const [helpEndPhrase, setHelpEndPhrase] = useState(false);
  const [history, setHistory] = useState([]);
  const [getHistory, toggleGetHistory] = useState(false);

  useEffect(() => {
    const fetchHistory = async () => {
      const urlPrefix = 'https://api.airtable.com/v0/';
      const base = process.env.REACT_APP_AIRTABLE_BASE;
      const table = '/History';
      const airtableUrl = `${urlPrefix}${base}${table}`;
      const response = await axios.get(airtableUrl, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      });
      // Sort records by createdTime field (waterlogged as example)
      setHistory(response.data.records);
    }
    fetchHistory();
  }, [getHistory]);

  const addZero = () => {
    if (number === '') {
      setNumber('0');
    }
  }

  const handleSubmit = async (finalPhrase) => {
    const urlPrefix = 'https://api.airtable.com/v0/';
    const base = process.env.REACT_APP_AIRTABLE_BASE;
    const table = '/History';
    const fields = {
      entry: finalPhrase.toString()
    };
    const airtableUrl = `${urlPrefix}${base}${table}`;
    await axios.post(airtableUrl, { fields }, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    });
    toggleGetHistory((prevGetHistory) => !prevGetHistory);
  }

  const evaluate = async () => {
    const finalPhrase = helpEndPhrase ? phrase + ')' : phrase;
    try {
      await handleSubmit(`${finalPhrase} = ${eval(finalPhrase)}`); // eslint-disable-line no-eval
      setResult(eval(finalPhrase)); // eslint-disable-line no-eval
      setPhrase(phrase + ' = ' + eval(finalPhrase)); // eslint-disable-line no-eval
      setHelpEndPhrase(false);
    } catch (e) {
      setErrorMessage(e.message);
      setPhrase('');
    }
  }

  const logResults = () => {
    console.log(`Number: ${number}`);
    console.log(`Phrase: ${phrase}`);
    console.log(`Result: ${result}`);
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
        setNumber(number + button);
        setPhrase(phrase + button);
        logResults();
        break;
      case 'clear':
        // Delete everything
        setNumber('');
        setPhrase('');
        setResult('0');
        logResults();
        break;
      case 'delete':
        // Delete one entry in phrase
        setPhrase(phrase.slice(0, -1));
        logResults();
        break;
      case 'exponent':
        // exponent
        if (phrase === '') {
          setNumber(phrase + '0');
          setPhrase(phrase + '0');
        }
        setPhrase(phrase + '**');
        setNumber('');
        logResults();
        break;
      case 'yrootx':
        // yth root
        if (number !== '') {
          setPhrase(`Math.pow(${number}, 1/`);
          setHelpEndPhrase(true);
          setNumber('');
        }
        logResults();
        break;
      case 'tentothex':
        // Use number to return 10 to its power
        addZero();
        setPhrase(`10**${number}`);
        logResults();
        break;
      case 'twotothex':
        // Use number to return 2 to its power
        addZero();
        setPhrase(`2**${number}`);
        logResults();
        break;
      case 'log':
        // Log base 10
        addZero();
        setPhrase(`Math.log10(${number})`);
        logResults();
        break;
      case 'logyx':
        // Log base y of x
        addZero();
        setPhrase(`Math.log(${number})/Math.log(10)`);
        setNumber('');
        logResults();
        break;
      case 'naturallog':
        // Log base e
        addZero();
        setPhrase(`Math.log(${number})`);
        logResults();
        break;
      case 'etothex':
        // Use number to return e to its power
        addZero();
        setPhrase(`Math.E**${number}`);
        logResults();
        break;
      case 'pi':
        // Get value of pi
        setNumber(Math.PI);
        setPhrase(phrase + Math.PI)
        break;
      case 'e':
        // Get value of e
        setNumber(Math.E);
        setPhrase(phrase + Math.E)
        logResults();
        break;
      case 'absolute':
        // Get absolute value of number
        addZero();
        setPhrase(`Math.abs(${number})`);
        logResults();
        break;
      case 'cube':
        // Cube the number
        if (number !== '') {
          setPhrase(`${number}**3`);
        }
        logResults();
        break;
      case 'leftparen':
        // Add a left parenthesis
        setPhrase(phrase + '(');
        logResults();
        break;
      case 'rightparen':
        // Add a right parenthesis
        setPhrase(phrase + ')');
        logResults();
        break;
      case 'percent':
        // Add percent to number
        if (number !== '') {
          setPhrase(phrase + '*.01');
        }
        logResults();
        break;
      case 'invert':
        // Invert the number
        if (number !== '' && number !== '0') {
          setPhrase(`1/${number}`);
        }
        logResults();
        break;
      case 'square':
        // Square the number
        if (number === '') {
          setNumber('0');
        }
        setPhrase(`${number}**2`);
        logResults();
        break;
      case 'squareroot':
        // Take the square root
        if (number !== '') {
          setNumber(`Math.sqrt(${number}`);
        }
        logResults();
        break;
      case 'negate':
        // Change positive to negative and vice versa
        if (number !== '') {
          setPhrase(`-${number})`);
        }
        logResults();
        break;
      case '%':
      case '/':
      case '*':
      case '-':
      case '+':
        // Calculate the modulus (the remainder of a quotient)
        if (phrase === '') {
          setNumber(number + '0');
          setPhrase(phrase + '0');
        }
        setPhrase(`${number} ${button} `);
        setNumber(''); // Deleting number after symbol helps decimal checking
        logResults();
        break;
      case 'decimal':
        // Add a decimal if not already there
        if (!number.includes('.')) {
          setNumber(number + '.');
          setPhrase(phrase + '.');
        }
        logResults();
        break;
      case 'equals':
        // Evaluate the expression
        evaluate();
        logResults();
        break;
      default:
        setResult('Error');
        logResults();
        break;
    }
  }

  return (
    <div className="App">
      <Header />
      <h3>{errorMessage}</h3>
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
        <History history={history} toggleGetHistory={toggleGetHistory} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;