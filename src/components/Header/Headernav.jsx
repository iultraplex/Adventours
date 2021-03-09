import React from 'react'
import { Button, Icon, Navbar, NavItem } from 'react-materialize'
import { FcSearch } from 'react-icons/fc';
import { CgMenuMotion } from 'react-icons/cg';
import ParallelogramButton from '../Utils/ParallelogramButton'
import './Headernav.css'
import Navlinks from '../../utils/Navlinks';


const Headernav = () => {
    return (
        <nav className="top-header-nav">
            <div className="nav-wrapper">
                <div className="top-nav-left">
                    <a className="brand-logo brand-logo" href="#">Logo</a>
                    <div className="header-searchbox hide-on-small-only" >
                        <FcSearch />
                        <span>Search it up ......</span>
                    </div>
                </div>
                <div className="mobile-screen-nav">

                    <a href="" className="mobile-navbar-search hide-on-med-and-up">
                        <FcSearch size={35} m />
                    </a>

                    <a href="" className="hide-on-large-only">
                        <CgMenuMotion color="#1A0A40" size={35} />
                    </a>
                </div>

                <div className="hide-on-med-and-down right top-nav">
                    <ul>
                        {Navlinks.map(link =>
                            <li>
                                <a href={link.linkTo} className="links">
                                    {link.name}

                                </a>
                            </li>
                        )}
                    </ul>
                    <ParallelogramButton text="sign up" />
                </div>

            </div>
        </nav>
    )
}

export default Headernav;