import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../../NavBar';
import styles from './LandingPage.module.css'
import { Link } from 'react-router-dom'
import { faL, faSlash } from '@fortawesome/free-solid-svg-icons';
import {GoChevronRight} from "react-icons/go";

function LandingPage() {

  const home = useRef();
  const aboutus = useRef();
  const contact = useRef();

  /*const [Actors,setActors] = useState([]);

  const url = 'https://imdb8.p.rapidapi.com/actors/get-all-images?nconst=nm0001667';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fe3c7734d8msha3c84fff96177c5p1a8413jsn75d931f98455',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };
  

  useEffect(() => {
    try {
      const response = fetch(url, options);
      const result = response.then((re)=>re.json());
      console.log(result.then(data => {
        console.log(data) 
        setActors(data)
      }));
    } catch (error) {
      console.error(error);
    }
	},[]);
 






/*  const url = 'https://actor-movie-api1.p.rapidapi.com/getid/Tom%20Holland?apiKey=62ffac58c57333a136053150eaa1b587';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fe3c7734d8msha3c84fff96177c5p1a8413jsn75d931f98455',
      'X-RapidAPI-Host': 'actor-movie-api1.p.rapidapi.com'
    }
  };
  
  
  useEffect(() => {
    try {
      const response = fetch(url, options);
      const result = response.then((re)=>re.json());
      console.log(result.then(data => console.log(data)));
    } catch (error) {
      console.error(error);
    }
	},[]);*/

  document.title = "Starmovies - Landing Page";

  const [NavbarColor , setNavBarColor] = useState(false);
  const [LinkBorderColor , setLinkBorderColor] = useState({Home:true , Aboutus:false , Contact:false})


  const chcekScrollPosition = () => {

    /* Give a border bottom color to the links while scrolling to the page of each one of them */
    if(window.scrollY >=0 && window.scrollY < 680)
      setLinkBorderColor({Home:true , Aboutus:false , Contact:false});
    else if(window.scrollY >= 680 && window.scrollY < 1360)
      setLinkBorderColor({Home:false,Aboutus:true,Contact:false});
    else if(window.scrollY >= 1360)
      setLinkBorderColor({Home:false,Aboutus:false,Contact:true});

    /* Give a background color to the navbar while scrolling */
    setNavBarColor(()=> {
        return  window.scrollY >= 30 ? true : false
        });
  }

  window.addEventListener('scroll',chcekScrollPosition);



  const scrollToFirst = () =>{
    home.current.scrollIntoView({
      behavior:"smooth" , block:"center"
    });
    /*setLinkBorderColor({Home:true, Aboutus:false , Contact:false})*/
  }

const scrollToSecond = () =>{
  aboutus.current.scrollIntoView({
    behavior:"smooth" , block:"center"
  });
 /* setLinkBorderColor({Home:false, Aboutus:true , Contact:false})*/

}

const scrollToThird = () =>{
  contact.current.scrollIntoView({
    behavior:"smooth" , block:"center"
  });  
  /*setLinkBorderColor({Home:false, Aboutus:false , Contact:true})*/
}


  return (
    <>
    <NavBar refs = {{scrollToFirst,scrollToSecond,scrollToThird}} backColor = {NavbarColor} whoChoosen={LinkBorderColor}/>
  
   {/* Home Section */}
    <section className={styles.firstPage} ref={home}>
    <div className={styles.content}></div>
    <section className={styles.heroSection1}>
      <div className={styles.leftSide1}>
        <h1 className={styles.title1}>Be Ready. . .</h1>
        <p>Our website offers a wide selection of movies that you can watch anytime, anywhere. With our easy-to-use interface and high-quality streaming.</p>
        <div className={styles.exploreCTA}><Link to="/login">Explore Now</Link> <GoChevronRight style= {{width:"1.5rem",height:"1.5rem"}}/></div>
      </div>
      <div className={styles.rightSide1}>
      <div className={styles.circle} scroll="no">
        <img src={require('./robert.png')}/>
        {/*<div className={styles.image1}>tareq</div>*/}
      </div>
      </div>
    </section>
    </section>

    {/* Aboutus Section */}
    <section className={styles.secondPage} ref={aboutus}>
    <section className={styles.heroSection2}>
    <div className={styles.leftSide2}>    
    <img src={require('../../../photos/AllSizes.svg')?.default}/>
    </div>

    <div className={styles.rightSide2}>
        <h1 className={styles.title2}>Watch From <span style={{color:"#759AFF"}}>Any Device</span></h1>
        <p>Enjoy watching movies, series and Tv shows from any where and on any device.</p>
    </div>
    </section>    

    </section>

    {/* Contact Section */}
    <section className={styles.thirdPage} ref={contact}>
    </section>

    </>
  )
}

export default LandingPage;
