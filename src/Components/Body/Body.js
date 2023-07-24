import React from 'react'
import Menu from '../MenuDish/Menu'
import Home from './Home.jsx'
import Contact from './Contact'
import { Routes, Route } from 'react-router-dom'

const Body = () => {

    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />} > Home </Route>
                <Route path='/menu' element={<Menu />} > Menu  </Route>
                <Route path='/Contact' element={<Contact />}  > Contact  </Route>
            </Routes>
        </div>
    )
}

export default Body
