import React from 'react'
import './../../App.css';


const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className="footer">
            <div className='container'>
                <div className="row justify-content-center ">
                    <h3> App restaurent {date} </h3>
                </div>

            </div>
        </div>

    )
}

export default Footer
