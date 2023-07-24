import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom';



const Header = () => {

    const [isOpen, setNavOpen] = useState(false);

    const navOpen = () => {
        setNavOpen(!isOpen);
    }

    return (
        <div>
            <Navbar color="dark" dark expand="sm">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={navOpen} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/home">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/menu">Menu</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/Contact">Contact</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        </div>
    )
}

export default Header
