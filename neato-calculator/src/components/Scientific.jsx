import React from 'react';

function Scientific() {
  return (
    <div className="keypad">
      <button className="pad" name="xtothey" onClick={e => this.props.onClick(e.target.name)}>x^y</button>
      <button className="pad" name="yrootofx" onClick={e => this.props.onClick(e.target.name)}>yrtx</button>
      <button className="pad" name="clear" onClick={e => this.props.onClick(e.target.name)}>C</button>
      <button className="pad" name="delete" onClick={e => this.props.onClick(e.target.name)}>Del</button><br />

      <button className="pad" name="tentothex" onClick={e => this.props.onClick(e.target.name)}>10^x</button>
      <button className="pad" name="twotothex" onClick={e => this.props.onClick(e.target.name)}>2^x</button>
      <button className="pad" name="log" onClick={e => this.props.onClick(e.target.name)}>log</button>
      <button className="pad" name="logyx" onClick={e => this.props.onClick(e.target.name)}>logyx</button><br />

      <button className="pad" name="ln" onClick={e => this.props.onClick(e.target.name)}>ln</button>
      <button className="pad" name="etothex" onClick={e => this.props.onClick(e.target.name)}>e^x</button>
      <button className="pad" name="pi" onClick={e => this.props.onClick(e.target.name)}>pi</button>
      <button className="pad" name="e" onClick={e => this.props.onClick(e.target.name)}>e</button><br />

      <button className="pad" name="invert" onClick={e => this.props.onClick(e.target.name)}>Inv</button>
      <button className="pad" name="absolutevalue" onClick={e => this.props.onClick(e.target.name)}>abs</button>
      <button className="pad" name="exponent" onClick={e => this.props.onClick(e.target.name)}>exp</button>
      <button className="pad" name="modulus" onClick={e => this.props.onClick(e.target.name)}>mod</button><br />

      <button className="pad" name="leftparenthesis" onClick={e => this.props.onClick(e.target.name)}>(</button>
      <button className="pad" name="rightparenthesis" onClick={e => this.props.onClick(e.target.name)}>)</button>
      <button className="pad" name="factorial" onClick={e => this.props.onClick(e.target.name)}>n!</button>
      <button className="pad" name="divide" onClick={e => this.props.onClick(e.target.name)}>/</button><br />

      <button className="pad" name="seven" onClick={e => this.props.onClick(e.target.name)}>7</button>
      <button className="pad" name="eight" onClick={e => this.props.onClick(e.target.name)}>8</button>
      <button className="pad" name="nine" onClick={e => this.props.onClick(e.target.name)}>9</button>
      <button className="pad" name="multiply" onClick={e => this.props.onClick(e.target.name)}>X</button><br />

      <button className="pad" name="four" onClick={e => this.props.onClick(e.target.name)}>4</button>
      <button className="pad" name="five" onClick={e => this.props.onClick(e.target.name)}>5</button>
      <button className="pad" name="six" onClick={e => this.props.onClick(e.target.name)}>6</button>
      <button className="pad" name="minus" onClick={e => this.props.onClick(e.target.name)}>-</button><br />

      <button className="pad" name="one" onClick={e => this.props.onClick(e.target.name)}>1</button>
      <button className="pad" name="two" onClick={e => this.props.onClick(e.target.name)}>2</button>
      <button className="pad" name="three" onClick={e => this.props.onClick(e.target.name)}>3</button>
      <button className="pad" name="plus" onClick={e => this.props.onClick(e.target.name)}>+</button><br />

      <button className="pad" name="negate" onClick={e => this.props.onClick(e.target.name)}>+/-</button>
      <button className="pad" name="zero" onClick={e => this.props.onClick(e.target.name)}>0</button>
      <button className="pad" name="decimal" onClick={e => this.props.onClick(e.target.name)}>.</button>
      <button className="pad" name="equals" onClick={e => this.props.onClick(e.target.name)}>=</button><br />
    </div>
  );
}

export default Scientific;