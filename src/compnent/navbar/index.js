import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll/modules";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrol] = useState(false);
  const background = () => {
    if (window.scrollY >= 80) {
      setScrol(true);
    } else {
      setScrol(false);
    }
  };
  const up = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", background);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={up}>
            Horse.Culture
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                to="link1"
              >
                Riders
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                to="link2"
              >
                Trainers
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                to="link3"
              >
                Owners
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                to="link4"
              >
                Kids
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/anotherPage">Looking for a Horse</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
