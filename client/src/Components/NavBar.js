import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <div>NavBar</div>
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/AboutUs" exact activeClassName="active">
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Services" exact activeClassName="active">
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/OurWork" exact activeClassName="active">
                        Our Work
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/ContactUs" exact activeClassName="active">
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default NavBar