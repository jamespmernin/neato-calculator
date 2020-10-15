import React from 'react';
import axios from 'axios';

function History(props) {
  const urlPrefix = 'https://api.airtable.com/v0/';
  const base = process.env.REACT_APP_AIRTABLE_BASE;
  const table = '/History';
  const airtableUrl = `${urlPrefix}${base}${table}`;

  const deleteHistory = async () => {
    const response = await axios.delete(airtableUrl, { data: { entry: '' } }, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    });
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