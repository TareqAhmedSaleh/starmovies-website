import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import starmoviesLogo from '../starmoviesLogo.svg'
import {AiOutlineMenu} from 'react-icons/ai'

function NavBar(props) {

  const checkNavBarColor = () => {
    return props.backColor === true ? "navBarScroll" : "navBarTop"
  }


  return (
    <nav className={`${checkNavBarColor()}`}>
    <i className='logoIcon'><img src={starmoviesLogo}/></i>
      <ul className='leftList'>
      <li><button onClick={props.refs.scrollToFirst}>Home</button></li>
      <li><button onClick={props.refs.scrollToSecond}>About Us</button></li>
      <li><button onClick={props.refs.scrollToThird}>Contact</button></li>
      </ul>
      <div className='getStartedBox'>
        <ul className='rightList'>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        </ul>
        <i><AiOutlineMenu/></i>
      </div>
    </nav>
  )
}

export default NavBar
