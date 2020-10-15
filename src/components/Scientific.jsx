import React from 'react';
import Display from './Display';

function Scientific(props) {
  return (
    <div id="scientific-display">
      <Display phrase={props.phrase} result={props.result} />
      <div className='keypad'>
        <button className='pad' id='t11' onClick={e => props.handleClick('exponent')}><em>x</em><sup><em>y</em></sup></button>
        <button className='pad' id='t12' onClick={e => props.handleClick('yrootx')}><sup><em>y</em></sup>√<sub><em>x</em></sub></button>
        <button className='pad' id='t13' onClick={e => props.handleClick('clear')}>C</button>
        <button className='pad' id='t14' onClick={e => props.handleClick('delete')}>⌫</button>

        <button className='pad' id='t21' onClick={e => props.handleClick('tentothex')}>10<sup><em>x</em></sup></button>
        <button className='pad' id='t22' onClick={e => props.handleClick('twotothex')}>2<sup><em>x</em></sup></button>
        <button className='pad' id='t23' onClick={e => props.handleClick('log')}>log</button>
        <button className='pad' id='t24' onClick={e => props.handleClick('logyx')}>log<sub><em>y</em></sub><em>x</em></button>

        <button className='pad' id='t31' onClick={e => props.handleClick('naturallog')}>ln</button>
        <button className='pad' id='t32' onClick={e => props.handleClick('etothex')}>e<sup><em>x</em></sup></button>
        <button className='pad' id='t33' onClick={e => props.handleClick('pi')}>π</button>
        <button className='pad' id='t34' onClick={e => props.handleClick('e')}>e</button>

        <button className='pad' id='t41' onClick={e => props.handleClick('invert')}><sup>1</sup>/<sub><em>x</em></sub></button>
        <button className='pad' id='t42' onClick={e => props.handleClick('absolute')}>|<em>x</em>|</button>
        <button className='pad' id='t43' onClick={e => props.handleClick('cube')}>x<sup>3</sup></button>
        <button className='pad' id='t44' onClick={e => props.handleClick('factorial')}><em>x</em>!</button>

        <button className='pad' id='t51' onClick={e => props.handleClick('leftparen')}>(</button>
        <button className='pad' id='t52' onClick={e => props.handleClick('rightparen')}>)</button>
        <button className='pad' id='t53' onClick={e => props.handleClick('%')}>mod</button>
        <button className='pad' id='t54' onClick={e => props.handleClick('/')}>÷</button>

        <button className='pad' id='t61' onClick={e => props.handleClick('7')}>7</button>
        <button className='pad' id='t62' onClick={e => props.handleClick('8')}>8</button>
        <button className='pad' id='t63' onClick={e => props.handleClick('9')}>9</button>
        <button className='pad' id='t64' onClick={e => props.handleClick('*')}>×</button>

        <button className='pad' id='t71' onClick={e => props.handleClick('4')}>4</button>
        <button className='pad' id='t72' onClick={e => props.handleClick('5')}>5</button>
        <button className='pad' id='t73' onClick={e => props.handleClick('6')}>6</button>
        <button className='pad' id='t74' onClick={e => props.handleClick('-')}>-</button>

        <button className='pad' id='t81' onClick={e => props.handleClick('1')}>1</button>
        <button className='pad' id='t82' onClick={e => props.handleClick('2')}>2</button>
        <button className='pad' id='t83' onClick={e => props.handleClick('3')}>3</button>
        <button className='pad' id='t84' onClick={e => props.handleClick('+')}>+</button>

        <button className='pad' id='t91' onClick={e => props.handleClick('negate')}>+/-</button>
        <button className='pad' id='t92' onClick={e => props.handleClick('0')}>0</button>
        <button className='pad' id='t93' onClick={e => props.handleClick('decimal')}>.</button>
        <button className='pad' id='t94' onClick={e => props.handleClick('equals')}>=</button>
      </div>
    </div>
  );
}

export default Scientific;