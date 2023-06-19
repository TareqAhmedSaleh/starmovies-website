import React, { useEffect, useState } from 'react'
import './LoadingPage.css'
import { Link } from 'react-router-dom'
import BeatLoader from 'react-spinners/BeatLoader'
import LandingPage from '../LandingPage/LandingPage'

function LoadingPage() {

  let [loading,setloading] = useState(false);

  useEffect(()=> {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  },[])


  return (
    <>
    {loading?
    <div className='back-ground'>
    <div className='loading-circles'>
        <BeatLoader color={'#293B6A'} loading={loading} size={20} margin={10}/>
    </div>
    </div>
    :<LandingPage/>
    }
    </>
  )
}
export default LoadingPage
