import React from 'react'
import './Footer.css'
import { MdCopyright } from "react-icons/md";
import { FaFacebookF,FaTwitter,FaInstagram,FaYoutube,FaVimeoV } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LuFacebook,LuTwitter,LuInstagram,LuYoutube } from "react-icons/lu";
import { RiInstagramFill } from "@react-icons/all-files/ri/RiInstagramFill";
import {HiOutlineSpeakerphone} from "@react-icons/all-files/hi/HiOutlineSpeakerphone"



function Footer() {
  return (
    <>
    <footer>
    <div className='upSide'>
    <section className='leftSide1'>
        <h1 className='title1'>Subscribe to our newsletters</h1>
        <p>Send us your e-mail address to subscribe and receive the news and our updates everyday.</p>
        <div className='subscribeBox'>
        <input type='text' placeholder='Enter your e-mail address'/>
        <Link to="/login">Subscribe</Link></div>
      </section>

    <section className='allLinks'>
    <div className='explore'>
        <h1>Explore</h1>
        <div className='links'>
        <Link href='' target='_blank'>Movies</Link>
        <Link href='' target='_blank'>Tv Shows</Link>
        <Link href='' target='_blank'>News</Link>
        <Link href='' target='_blank'>Watchlist</Link>
        <Link href='' target='_blank'>Actors</Link>
        <Link href='' target='_blank'>History</Link>
        <Link href='' target='_blank'>Downloads</Link>
        </div>
    </div>

    <div className='platfoms'>
        <h1>Platfoms</h1>
        <div className='links'>
        <Link href='' target='_blank'>Netflix</Link>
        <Link href='' target='_blank'>Hulu</Link>
        <Link href='' target='_blank'>Disney</Link>
        <Link href='' target='_blank'>HBO Max</Link>
        <Link href='' target='_blank'>Apple Tv</Link>
        <Link href='' target='_blank'>Amazon Prime</Link>
        <Link href='' target='_blank'>Others</Link>
        </div>
    </div>

    <div className='about'>
        <h1>About</h1>
        <div className='links'>
        <Link href='' target='_blank'>Account</Link>
        <Link href='' target='_blank'>Pricing</Link>
        <Link href='' target='_blank'>About us</Link>
        <Link href='' target='_blank'>Privacy Policy</Link>
        <Link href='' target='_blank'>Terms of Use</Link>
        </div>
    </div>

    <div className='help'>
        <h1>Help</h1>
        <div className='links'>
        <Link href='' target='_blank'>FAQs</Link>
        <Link href='' target='_blank'>Contact</Link>
        <Link href='' target='_blank'>Help Centre</Link>
        <Link href='' target='_blank'>Ways To Watch</Link>
        <Link href='' target='_blank'>Guidelines</Link>
        </div>
    </div>

        
    </section>
    </div>

    <div className='seperator'></div>

    <div className='downSide'>
    <section className='copyRights'>
    <MdCopyright style={{width:"1rem",height:"1rem",color:"white"}}/>
    <p>2023 Starmovies All Right Reserved, Inc.</p>
    </section>

    <section className='followUs'>
        <h3>Follow Us On</h3>
        <div className='webLinks'>
        <a href='' target='_blank'><FaFacebookF/></a>
        <a href='' target='_blank'><FaTwitter/></a>
        <a href='' target='_blank'><RiInstagramFill/></a>
        <a href='' target='_blank'><FaYoutube/></a>
        <a href='' target='_blank'><FaVimeoV/></a>
        </div>
    </section>


    </div>
    </footer>
    </>
  )
}

export default Footer
