import React from 'react';

// Adapted from https://medium.com/@nitinpatel_20236/how-to-build-a-simple-calculator-application-with-react-js-bc10a4568bbd
function Display(props) {
  if (!props.phrase) {
    return (
      <div className="result">
        <p className="lastCalc"><br /></p>
        <p className="resultText">0</p>
      </div>
    )
  } else {
    return (
      <div className="result">
        <p className="lastCalc">{props.phrase}</p>
        <p className="resultText">{props.result}</p>
      </div>
    );
  }
}

export default Display;