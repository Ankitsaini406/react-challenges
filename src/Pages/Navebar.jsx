import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const Navebar = () => {
    return (
        <nav className='nav-flex'>
            <Link to='/'><h3>Home</h3></Link>
            <label className='switch'>
                <input type="checkbox" />
                <span className='slider round'></span>
            </label>
        </nav>
    )
}

export default Navebar