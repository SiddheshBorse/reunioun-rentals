import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <h1>Re-Union Rentals</h1>
                <h2>Providing you with your dream home [at a percentage of the cost]</h2>
            </div>
            <div className="buttons">
                <button>login</button>
                <button>signup</button> 
            </div>
            

        </div>
    )
}

export default Navbar