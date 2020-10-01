import React from 'react';
import { Link } from 'gatsby';

const NavMenu = () => {
    return (
        <nav className="navMenu">
            <ul>
                <li>
                    <Link to="#">Home</Link>
                </li>

                <li>
                    <Link to="/blog">Blog</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu;