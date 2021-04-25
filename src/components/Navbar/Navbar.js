import React, { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import DarkModeToggle from "react-dark-mode-toggle";

import { ThemeContext } from "../../contexts/ThemeContext";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

export const Navbar = ({ isDarkTheme, toggleOpen, toggleDarkTheme }) => {
  const { colorCodes } = useContext(ThemeContext);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav bgcolor={colorCodes.bgCode} scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo
            color={colorCodes.navTextCode}
            to="/portfolio"
            onClick={toggleHome}>
            terence.lim
          </NavLogo>
          <MobileIcon color={colorCodes.navTextCode} onClick={toggleOpen}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>
                <DarkModeToggle
                  onChange={toggleDarkTheme}
                  checked={isDarkTheme}
                  size={80}
                />
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                color={colorCodes.navTextCode}
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>
                About
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};
