import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

function Mode() {
  return (
    <>
      <nav>
        {/* Idea for buttons from https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button */}
        <Link to="/standard">
          <Button className="mode">Standard</Button>
        </Link>
        <Link to="/scientific">
          <Button className="mode">Scientific</Button>
        </Link>
      </nav>
    </>
  )
}

export default Mode;