import React from 'react';
import Display from './Display';

function Standard(props) {
  return (
    <>
      <Display phrase={props.phrase} result={props.result} />
      <div className='keypad'>
        <button className='pad' onClick={e => props.handleClick('percent')}>%</button>
        <button className='pad' onClick={e => props.handleClick('%')}>mod</button>
        <button className='pad' onClick={e => props.handleClick('clear')}>C</button>
        <button className='pad' onClick={e => props.handleClick('delete')}>⌫</button><br />

        <button className='pad' onClick={e => props.handleClick('invert')}><sup>1</sup>/<sub><em>x</em></sub></button>
        <button className='pad' onClick={e => props.handleClick('square')}><em>x</em><sup>2</sup></button>
        <button className='pad' onClick={e => props.handleClick('squareroot')}>√</button>
        <button className='pad' onClick={e => props.handleClick('/')}>÷</button><br />

        <button className='pad' onClick={e => props.handleClick('7')}>7</button>
        <button className='pad' onClick={e => props.handleClick('8')}>8</button>
        <button className='pad' onClick={e => props.handleClick('9')}>9</button>
        <button className='pad' onClick={e => props.handleClick('*')}>×</button><br />

        <button className='pad' onClick={e => props.handleClick('4')}>4</button>
        <button className='pad' onClick={e => props.handleClick('5')}>5</button>
        <button className='pad' onClick={e => props.handleClick('6')}>6</button>
        <button className='pad' onClick={e => props.handleClick('-')}>-</button><br />

        <button className='pad' onClick={e => props.handleClick('1')}>1</button>
        <button className='pad' onClick={e => props.handleClick('2')}>2</button>
        <button className='pad' onClick={e => props.handleClick('3')}>3</button>
        <button className='pad' onClick={e => props.handleClick('+')}>+</button><br />

        <button className='pad' onClick={e => props.handleClick('negate')}>+/-</button>
        <button className='pad' onClick={e => props.handleClick('0')}>0</button>
        <button className='pad' onClick={e => props.handleClick('.')}>.</button>
        <button className='pad' onClick={e => props.handleClick('equals')}>=</button><br />
      </div>
    </>
  );
}

export default Standard;