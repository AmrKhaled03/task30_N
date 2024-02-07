import React from 'react'
import "../App.css"
import Landing from '../components/Landing'
import Services from '../components/Services'
import Swiper from '../components/Swipe'
const Home = () => {
  return (
    <div className='home'>
        
       <Landing />
       <Services />
       <Swiper />
        </div>
  )
}

export default Home