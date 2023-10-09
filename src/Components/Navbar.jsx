import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav>
            <ul className='navbar-links'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/findgym">Find a Gym</Link>
                </li>
                <li>
                    <Link to="/training">Training</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/whyjoin">Why Join?</Link>
                </li>
                <li>
                    <Link to="/signin">Sign In</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;