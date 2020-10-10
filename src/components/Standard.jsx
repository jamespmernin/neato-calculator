import React from 'react';
import Display from './Display';

function Standard() {
  return (
    <>
      <Display default="0" />
      <div className="keypad">
        <button className="pad" name="percent" onClick={e => this.props.onClick(e.target.name)}>%</button>
        <button className="pad" name="clearentry" onClick={e => this.props.onClick(e.target.name)}>CE</button>
        <button className="pad" name="clear" onClick={e => this.props.onClick(e.target.name)}>C</button>
        <button className="pad" name="delete" onClick={e => this.props.onClick(e.target.name)}>⌫</button><br />

        <button className="pad" name="invert" onClick={e => this.props.onClick(e.target.name)}><sup>1</sup>/<sub><em>x</em></sub></button>
        <button className="pad" name="square" onClick={e => this.props.onClick(e.target.name)}><em>x</em><sup>2</sup></button>
        <button className="pad" name="squareroot" onClick={e => this.props.onClick(e.target.name)}>√</button>
        <button className="pad" name="divide" onClick={e => this.props.onClick(e.target.name)}>÷</button><br />

        <button className="pad" name="seven" onClick={e => this.props.onClick(e.target.name)}>7</button>
        <button className="pad" name="eight" onClick={e => this.props.onClick(e.target.name)}>8</button>
        <button className="pad" name="nine" onClick={e => this.props.onClick(e.target.name)}>9</button>
        <button className="pad" name="multiply" onClick={e => this.props.onClick(e.target.name)}>×</button><br />

        <button className="pad" name="four" onClick={e => this.props.onClick(e.target.name)}>4</button>
        <button className="pad" name="five" onClick={e => this.props.onClick(e.target.name)}>5</button>
        <button className="pad" name="six" onClick={e => this.props.onClick(e.target.name)}>6</button>
        <button className="pad" name="minus" onClick={e => this.props.onClick(e.target.name)}>-</button><br />

        <button className="pad" name="one" onClick={e => this.props.onClick(e.target.name)}>1</button>
        <button className="pad" name="two" onClick={e => this.props.onClick(e.target.name)}>2</button>
        <button className="pad" name="three" onClick={e => this.props.onClick(e.target.name)}>3</button>
        <button className="pad" name="add" onClick={e => this.props.onClick(e.target.name)}>+</button><br />

        <button className="pad" name="negate" onClick={e => this.props.onClick(e.target.name)}>+/-</button>
        <button className="pad" name="zero" onClick={e => this.props.onClick(e.target.name)}>0</button>
        <button className="pad" name="decimal" onClick={e => this.props.onClick(e.target.name)}>.</button>
        <button className="pad" name="equals" onClick={e => this.props.onClick(e.target.name)}>=</button><br />
      </div>
    </>
  );
}

export default Standard;