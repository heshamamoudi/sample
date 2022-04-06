import React,{useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll/modules'
import {Nav, NavbarContainer, NavLogo,MobileIcon,NavItem,NavLinks,NavMenu,NavBtn,NavBtnLink} from './navbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav,setScrol]=useState(false)
    const background = ()=>{
        if(window.scrollY >= 80){
            setScrol(true)
        }else{
            setScrol(false)
        }
    }
    const up = () => {
        scroll.scrollToTop();
    }

useEffect(() => {
  window.addEventListener('scroll',background)
}, [])


  return (
    <>
    <Nav scrollNav={scrollNav}>
<NavbarContainer>
    <NavLogo to='/' onClick={up}>
       Sample
    </NavLogo>
    <MobileIcon onClick={toggle}>
        <FaBars/>
    </MobileIcon>
    <NavMenu>
        <NavItem>
            <NavLinks smooth={true} duration={500}spy={true} exact='true'offset={-80} to='link1'>Link1</NavLinks>
        </NavItem>
        <NavItem>
            <NavLinks smooth={true} duration={500}spy={true} exact='true'offset={-80} to='link2'>Link2</NavLinks>
        </NavItem>
        <NavItem>
            <NavLinks smooth={true} duration={500}spy={true} exact='true'offset={-80} to='link3'>Link3</NavLinks>
        </NavItem>
        <NavItem>
            <NavLinks smooth={true} duration={500}spy={true} exact='true'offset={-80} to='link4'>Link4</NavLinks>
        </NavItem>
    </NavMenu>
    <NavBtn>
        <NavBtnLink to='/anotherPage'>another page</NavBtnLink>
    </NavBtn>
</NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar