import React from 'react';
import Display from './Display';

function Standard(props) {
  return (
    <>
      <Display />
      <div className="keypad">
        <button className="pad" name="percent" onClick={e => props.handleClick(e.target.name)}>%</button>
        <button className="pad" name="mod" onClick={e => props.handleClick(e.target.name)}>mod</button>
        <button className="pad" name="clear" onClick={e => props.handleClick(e.target.name)}>C</button>
        <button className="pad" name="delete" onClick={e => props.handleClick(e.target.name)}>⌫</button><br />

        <button className="pad" name="invert" onClick={e => props.handleClick(e.target.name)}><sup>1</sup>/<sub><em>x</em></sub></button>
        <button className="pad" name="square" onClick={e => props.handleClick(e.target.name)}><em>x</em><sup>2</sup></button>
        <button className="pad" name="squareroot" onClick={e => props.handleClick(e.target.name)}>√</button>
        <button className="pad" name="divide" onClick={e => props.handleClick(e.target.name)}>÷</button><br />

        <button className="pad" name="seven" onClick={e => props.handleClick(e.target.name)}>7</button>
        <button className="pad" name="eight" onClick={e => props.handleClick(e.target.name)}>8</button>
        <button className="pad" name="nine" onClick={e => props.handleClick(e.target.name)}>9</button>
        <button className="pad" name="multiply" onClick={e => props.handleClick(e.target.name)}>×</button><br />

        <button className="pad" name="four" onClick={e => props.handleClick(e.target.name)}>4</button>
        <button className="pad" name="five" onClick={e => props.handleClick(e.target.name)}>5</button>
        <button className="pad" name="six" onClick={e => props.handleClick(e.target.name)}>6</button>
        <button className="pad" name="subtract" onClick={e => props.handleClick(e.target.name)}>-</button><br />

        <button className="pad" name="one" onClick={e => props.handleClick(e.target.name)}>1</button>
        <button className="pad" name="two" onClick={e => props.handleClick(e.target.name)}>2</button>
        <button className="pad" name="three" onClick={e => props.handleClick(e.target.name)}>3</button>
        <button className="pad" name="add" onClick={e => props.handleClick(e.target.name)}>+</button><br />

        <button className="pad" name="negate" onClick={e => props.handleClick(e.target.name)}>+/-</button>
        <button className="pad" name="zero" onClick={e => props.handleClick(e.target.name)}>0</button>
        <button className="pad" name="decimal" onClick={e => props.handleClick(e.target.name)}>.</button>
        <button className="pad" name="equals" onClick={e => props.handleClick(e.target.name)}>=</button><br />
      </div>
    </>
  );
}

export default Standard;