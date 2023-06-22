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
      <li><button className={props.whoChoosen.Home ? 'linkChoosen' : ''} onClick={props.refs.scrollToFirst}>Home</button></li>
      <li><button className={props.whoChoosen.Aboutus ? 'linkChoosen' : ''} onClick={props.refs.scrollToSecond}>About us</button></li>
      <li><button className={props.whoChoosen.Contact ? 'linkChoosen' : ''} onClick={props.refs.scrollToThird}>Pricing</button></li>
      <li><button className={props.whoChoosen.Contact ? 'linkChoosen' : ''} onClick={props.refs.scrollToThird}>FAQs</button></li>
      <li><button className={props.whoChoosen.Contact ? 'linkChoosen' : ''} onClick={props.refs.scrollToThird}>Contact</button></li>
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
