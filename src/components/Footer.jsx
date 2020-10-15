import React from 'react';
import LinkedIn from '../linkedin.png';
import Github from '../github.png';

function Footer() {
  return (
    <div id="footer">
      <h4>© 2020</h4>
      <a href="https://www.linkedin.com/in/jamesmernin"><img src={LinkedIn} alt="LinkedIn" /></a>
      <a href="https://www.github.com/jamespmernin"><img src={Github} alt="Github" /></a>
    </div>
  )
}

export default Footer;