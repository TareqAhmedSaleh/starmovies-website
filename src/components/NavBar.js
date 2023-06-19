import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import starmoviesLogo from '../starmoviesLogo.svg'

function NavBar(props) {
  return (
    <nav className='navBar'>
    <img src={starmoviesLogo}/>
      <ul>
      <li><button onClick={props.refs.scrollToFirst}>Home</button></li>
      <li><button onClick={props.refs.scrollToSecond}>About Us</button></li>
      <li><button onClick={props.refs.scrollToThird}>Contact</button></li>
      </ul>
      <div className='getStartedBox'>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Get Started</Link>
      </div>
    
    </nav>
  )
}

export default NavBar
