import React from 'react';

// Adapted from https://medium.com/@nitinpatel_20236/how-to-build-a-simple-calculator-application-with-react-js-bc10a4568bbd
function Display(props) {
  if (!props.phrase) {
    return (
      <div className="display">
        <p className="lastCalc"><br /></p>
      </div>
    )
  } else {
    return (
      <div className="display">
        <p className="lastCalc">{props.phrase} </p>
      </div>
    );
  }
}

export default Display;