import React from 'react'
import { GithubIcon, LinkedinIcon} from '../images/icons/icons';

const Footer = () => (
  <div id='footer'>
    <div style={{float: 'right', marginRight: '30px', top: '50%', marginTop: '10px'}}>
        <a href="https://github.com/HumbleNarcissus" target="blank"><GithubIcon /></a>
        <a href="https://linkedin.com/in/maciej-tarach-387056128" target="blank"><LinkedinIcon /></a>
    </div>
  </div>
)

export default Footer