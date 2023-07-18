import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const Header = () => {
    return (
        <div>
            <Navbar
                className="my-2"
                color="dark"
                dark
            >
                <NavbarBrand href="/">
                    Reactstrap
                </NavbarBrand>
            </Navbar>

        </div>
    )
}

export default Header
