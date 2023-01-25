import React from 'react'
import {Nav,NavLink,Bars,NavMenu} from './NavBarElements'
import '../../assets/navbar.css';

const Navbar = () => {
  return (
    <>
     <Nav>
        <NavLink to="/">
            <h1>Matthieu Tran</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/mainPage" activeStyle>
                Main Page
            </NavLink>
            <NavLink to="/Contact" activeStyle>
                Contact
            </NavLink>
            <div>
            <input type="checkbox" class="checkbox" id="chk" />
            <label class="label" for="chk">
                <i class="fas fa-moon"></i>
                <i class="fas fa-sun"></i>
                <div class="ball"></div>
            </label>
            </div>
        </NavMenu>
     </Nav>
    </>
  )
};

export default Navbar;