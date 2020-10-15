import React from 'react';
import Display from './Display';

function Standard(props) {
  return (
    <div id="standard-display">
      <Display phrase={props.phrase} result={props.result} />
      <div className='keypad'>
        <button className='pad' id='s11' onClick={e => props.handleClick('percent')}>%</button>
        <button className='pad' id='s12' onClick={e => props.handleClick('%')}>mod</button>
        <button className='pad' id='s13' onClick={e => props.handleClick('clear')}>C</button>
        <button className='pad' id='s14' onClick={e => props.handleClick('delete')}>⌫</button>

        <button className='pad' id='s21' onClick={e => props.handleClick('invert')}><sup>1</sup>/<sub><em>x</em></sub></button>
        <button className='pad' id='s22' onClick={e => props.handleClick('square')}><em>x</em><sup>2</sup></button>
        <button className='pad' id='s23' onClick={e => props.handleClick('squareroot')}>√</button>
        <button className='pad' id='s24' onClick={e => props.handleClick('/')}>÷</button>

        <button className='pad' id='s31' onClick={e => props.handleClick('7')}>7</button>
        <button className='pad' id='s32' onClick={e => props.handleClick('8')}>8</button>
        <button className='pad' id='s33' onClick={e => props.handleClick('9')}>9</button>
        <button className='pad' id='s34' onClick={e => props.handleClick('*')}>×</button>

        <button className='pad' id='s41' onClick={e => props.handleClick('4')}>4</button>
        <button className='pad' id='s42' onClick={e => props.handleClick('5')}>5</button>
        <button className='pad' id='s43' onClick={e => props.handleClick('6')}>6</button>
        <button className='pad' id='s44' onClick={e => props.handleClick('-')}>-</button>

        <button className='pad' id='s51' onClick={e => props.handleClick('1')}>1</button>
        <button className='pad' id='s52' onClick={e => props.handleClick('2')}>2</button>
        <button className='pad' id='s53' onClick={e => props.handleClick('3')}>3</button>
        <button className='pad' id='s54' onClick={e => props.handleClick('+')}>+</button>

        <button className='pad' id='s61' onClick={e => props.handleClick('negate')}>+/-</button>
        <button className='pad' id='s62' onClick={e => props.handleClick('0')}>0</button>
        <button className='pad' id='s63' onClick={e => props.handleClick('.')}>.</button>
        <button className='pad' id='s64' onClick={e => props.handleClick('equals')}>=</button>
      </div>
    </div >
  );
}

export default Standard;