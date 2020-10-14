import React from 'react';
// import axios from 'axios';

function History(props) {
  const deleteHistory = () => {
    // Delete everything in axios with delete call
  }

  return (
    <div className="history">
      <span id="historyHeader">
        <h3>History</h3>
        <button id="deleteHistory" onClick={deleteHistory}>Delete</button>
      </span>
      <p id="historyList">
        {props.submit}
      </p>
    </div>
  );
}

export default History;