import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import './header.css'


const Header = () => {

    const [isOpen, setNavOpen] = useState(false);

    const navOpen = () => {
        setNavOpen(!isOpen);
    }

    return (
        <div>
            <Navbar color="dark" dark expand="sm">
                <NavbarBrand href="/">Restaurent</NavbarBrand>
                <NavbarToggler onClick={navOpen} />
                <Collapse isOpen={isOpen} navbar className='y'>
                    <Nav navbar>
                        <NavItem >
                            <Link className='xyz' to="/home">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className='xyz' to="/menu">Menu</Link>
                        </NavItem>
                        <NavItem>
                            <Link className='xyz' to="/Contact">Contact</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        </div>
    )
}

export default Header
