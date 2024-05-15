import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../components/ThemeChange/Theme'
import '../css/navbar.css'

const Navebar = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <nav className='nav-flex'>
            <Link to='/'><h3>Home</h3></Link>
            <label className='switch'>
                <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
                <span className='slider round'></span>
            </label>
        </nav>
    )
}

export default Navebar