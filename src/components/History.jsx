import React from 'react';
// import axios from 'axios';

function History() {
  let prefix = 'https://api.airtable.com/v4/'
  /* let base = REACT_APP_AIRTABLE_BASE;
  let key = REACT_APP_AIRTABLE_KEY; */

  // let url = `${prefix}${base}`;

  /* const postApi = async () => {
    await axios.post(url);
  } */

  return (
    <div className="history">
      <h3>History</h3>
      <p id="historyList">

      </p>
    </div>
  );
}

export default History;