import React from 'react';
import axios from 'axios';

function History(props) {
  const urlPrefix = 'https://api.airtable.com/v0/';
  const base = process.env.REACT_APP_AIRTABLE_BASE;
  const table = '/History';
  const airtableUrl = `${urlPrefix}${base}${table}`;

  const deleteHistory = async () => {
    const urls = props.history.map((h) => `${airtableUrl}/${h.id}`);
    const time = urls.length * 200;
    urls.forEach((url, i) => {
      setTimeout(async () => {
        await axios.delete(url, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
          }
        });
      }, 200 * (i + 1))
    })
    setTimeout(() => {
      props.toggleGetHistory((prevGetHistory) => !prevGetHistory)
    }, time + 1000);
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