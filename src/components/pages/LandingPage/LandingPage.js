import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../../NavBar';
import styles from './LandingPage.module.css'

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


  const scrollToFirst = () =>{
    home.current.scrollIntoView({
      behavior:"smooth" , block:"center"
    });
    document.title = "Starmovies - Landing Page";
  }

const scrollToSecond = () =>{
  aboutus.current.scrollIntoView({
    behavior:"smooth" , block:"center"
  });  
  document.title = "Starmovies - About Us";
}

const scrollToThird = () =>{
  contact.current.scrollIntoView({
    behavior:"smooth" , block:"center"
  });  
  document.title = "Starmovies - Contact";

}


  return (
    <>
    <div className={styles.parentContainer}>
    <NavBar refs = {{scrollToFirst,scrollToSecond,scrollToThird}}/>
    <div className={styles.firstPage} ref={home}>
    <div className={styles.content}>
    <section className={styles.heroSection}>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>Be Ready</h1>
        <p>Our website offers a wide selection of movies that you can watch anytime, anywhere. With our easy-to-use interface and high-quality streaming.</p>
        <button>Explore</button>
      </div>
      <div className={styles.rightSide}></div>
    </section>

    </div>
    </div>

    <div className={styles.secondPage} ref={aboutus}>
    </div>

    <div className={styles.thirdPage} ref={contact}>
    </div>


    </div>
    </>
  )
}

export default LandingPage;
