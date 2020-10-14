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
      <div id="historyList">
        {props.history.map((h, idx) => <h6 key={idx}>{h.fields.entry}</h6>)}
      </div>
    </div>
  );
}

export default History;