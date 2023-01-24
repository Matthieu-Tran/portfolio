import React from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn, NavBtnLink} from './NavBarElements'

const Navbar = () => {
  return (
    <>
     <Nav>
        <NavLink to="/">
            <h1>Matthieu Tran</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/about" activeStyle>
                About
            </NavLink>
            <NavLink to="/Cursus" activeStyle>
                Cursus
            </NavLink>
            <NavLink to="/Project" activeStyle>
                Project
            </NavLink>
            <NavLink to="/Contact" activeStyle>
                Contact
            </NavLink>
        </NavMenu>
     </Nav>
    </>
  )
};

export default Navbar;