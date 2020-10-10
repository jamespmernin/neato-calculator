import React from 'react';

function Standard() {
  return (
    <div className="keypad">
      <button className="pad" name="%" onClick={e => this.props.onClick(e.target.name)}>%</button>
      <button className="pad" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
      <button className="pad" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
      <button className="pad" name="Del" onClick={e => this.props.onClick(e.target.name)}>Del</button><br />

      <button className="pad" name="Inv" onClick={e => this.props.onClick(e.target.name)}>Inv</button>
      <button className="pad" name="Sq" onClick={e => this.props.onClick(e.target.name)}>Sq</button>
      <button className="pad" name="Sqrt" onClick={e => this.props.onClick(e.target.name)}>Sqrt</button>
      <button className="pad" name="/" onClick={e => this.props.onClick(e.target.name)}>/</button><br />

      <button className="pad" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
      <button className="pad" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
      <button className="pad" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
      <button className="pad" name="X" onClick={e => this.props.onClick(e.target.name)}>X</button><br />

      <button className="pad" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
      <button className="pad" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
      <button className="pad" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
      <button className="pad" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br />

      <button className="pad" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
      <button className="pad" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
      <button className="pad" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
      <button className="pad" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br />

      <button className="pad" name="+/-" onClick={e => this.props.onClick(e.target.name)}>+/-</button>
      <button className="pad" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
      <button className="pad" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
      <button className="pad" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button><br />
    </div>
  );
}

export default Standard;