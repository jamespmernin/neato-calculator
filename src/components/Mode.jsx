import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

function Mode() {
  const activeStyle = {
    boxShadow: '4px 4px 4px green'
  };
  return (
    <>
      <nav>
        {/* Idea for buttons from https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button */}
        <NavLink activeStyle={activeStyle} to="/standard">
          <Button className="mode" id="standard" >Standard</Button>
        </NavLink>
        <NavLink activeStyle={activeStyle} to="/scientific">
          <Button className="mode" id="scientific">Scientific</Button>
        </NavLink>
      </nav>
    </>
  )
}

export default Mode;