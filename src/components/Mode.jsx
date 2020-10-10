import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

function Mode() {
  return (
    <>
      <nav>
        {/* Idea for buttons from https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button */}
        <Link to="/mode/standard">
          <Button className="mode">
            <p id="standard">Standard</p>
          </Button>
        </Link>
        <Link to="/mode/scientific">
          <Button className="mode">
            <p id="scientific">Scientific</p>
          </Button>
        </Link>
      </nav>
    </>
  )
}

export default Mode;