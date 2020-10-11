import React from 'react';
import Display from './Display';

function Scientific(props) {
  return (
    <>
      <Display />
      <div className="keypad">
        <button className="pad" name="" onClick={e => props.onClick(e.target.name)}><em>x</em><sup><em>y</em></sup></button>
        <button className="pad" name="" onClick={e => props.onClick(e.target.name)}><sup><em>y</em></sup>√<sub><em>x</em></sub></button>
        <button className="pad" name="clear" onClick={e => props.onClick(e.target.name)}>C</button>
        <button className="pad" name="" onClick={e => props.onClick(e.target.name)}>⌫</button><br />

        <button className="pad" name="" onClick={e => props.onClick(e.target.name)}>10<sup><em>x</em></sup></button>
        <button className="pad" name="" onClick={e => props.onClick(e.target.name)}>2<sup><em>x</em></sup></button>
        <button className="pad" name="" onClick={e => props.onClick(e.target.name)}>log</button>
        <button className="pad" name="" onClick={e => props.onClick(e.target.name)}>log<sub><em>y</em></sub><em>x</em></button><br />

        <button className="pad" name="" onClick={e => props.onClick(e.target.name)}>ln</button>
        <button className="pad" name="" onClick={e => props.onClick(e.target.name)}>e<sup><em>x</em></sup></button>
        <button className="pad" name="" onClick={e => props.onClick(e.target.name)}>π</button>
        <button className="pad" name="" onClick={e => props.onClick(e.target.name)}>e</button><br />

        <button className="pad" name="" onClick={e => props.onClick(e.target.name)}><sup>1</sup>/<sub><em>x</em></sub></button>
        <button className="pad" name="" onClick={e => props.onClick(e.target.name)}>|<em>x</em>|</button>
        <button className="pad" name="^" onClick={e => props.onClick(e.target.name)}>exp</button>
        <button className="pad" name="!" onClick={e => props.onClick(e.target.name)}><em>x</em>!</button><br />

        <button className="pad" name="(" onClick={e => props.onClick(e.target.name)}>(</button>
        <button className="pad" name=")" onClick={e => props.onClick(e.target.name)}>)</button>
        <button className="pad" name="mod" onClick={e => props.onClick(e.target.name)}>mod</button>
        <button className="pad" name="/" onClick={e => props.onClick(e.target.name)}>÷</button><br />

        <button className="pad" name="7" onClick={e => props.onClick(e.target.name)}>7</button>
        <button className="pad" name="8" onClick={e => props.onClick(e.target.name)}>8</button>
        <button className="pad" name="9" onClick={e => props.onClick(e.target.name)}>9</button>
        <button className="pad" name="*" onClick={e => props.onClick(e.target.name)}>×</button><br />

        <button className="pad" name="4" onClick={e => props.onClick(e.target.name)}>4</button>
        <button className="pad" name="5" onClick={e => props.onClick(e.target.name)}>5</button>
        <button className="pad" name="6" onClick={e => props.onClick(e.target.name)}>6</button>
        <button className="pad" name="-" onClick={e => props.onClick(e.target.name)}>-</button><br />

        <button className="pad" name="1" onClick={e => props.onClick(e.target.name)}>1</button>
        <button className="pad" name="2" onClick={e => props.onClick(e.target.name)}>2</button>
        <button className="pad" name="3" onClick={e => props.onClick(e.target.name)}>3</button>
        <button className="pad" name="+" onClick={e => props.onClick(e.target.name)}>+</button><br />

        <button className="pad" name="" onClick={e => props.onClick(e.target.name)}>+/-</button>
        <button className="pad" name="" onClick={e => props.onClick(e.target.name)}>0</button>
        <button className="pad" name="" onClick={e => props.onClick(e.target.name)}>.</button>
        <button className="pad" name="equals" onClick={e => props.onClick(e.target.name)}>=</button><br />
      </div>
    </>
  );
}

export default Scientific;