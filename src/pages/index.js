import React, {useState} from 'react'
import HeroSection from '../compnent/hero';
import Info from '../compnent/info';
import Services from '../compnent/services';

import Navbar from '../compnent/navbar';
import Sidebar from '../compnent/navbar/sidebar/index'
import { HomeObjfour, HomeObjOne, HomeObjthree, HomeObjtwo } from '../compnent/info/data';
import Footer from '../compnent/footer';
const Home= () =>{
    const [isOpen,setIsOpen]= useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection toggle={toggle}/>
    <Info {...HomeObjOne} />
    <Info {...HomeObjtwo} />
    <Info {...HomeObjthree} />
    <Info {...HomeObjfour} />
    <Services/>
    <Footer/>
    
    </>
  )
}

export default Home;