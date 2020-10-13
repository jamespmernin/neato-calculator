import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

function Mode() {
  const changeModeStyle = (e) => {
    e.target.style.textWeight = 'bold';
  }
  return (
    <>
      <nav>
        {/* Idea for buttons from https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button */}
        <Link to="/standard">
          <Button className="mode" id="standard" onClick={changeModeStyle}>Standard</Button>
        </Link>
        <Link to="/scientific">
          <Button className="mode" id="scientific" onClick={changeModeStyle}>Scientific</Button>
        </Link>
      </nav>
    </>
  )
}

export default Mode;