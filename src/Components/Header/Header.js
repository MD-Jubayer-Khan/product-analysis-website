import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
             <nav className='header'>
                   <Link to="home">HOME</Link>
                   <Link to="reviews">REVIEWS</Link>
                   <Link to="dashboard">DASHBOARD</Link>
                   <Link to="blogs">BLOGS</Link>
                   <Link to="about">ABOUT</Link>
           </nav>
        </div>
    );
};

export default Header;