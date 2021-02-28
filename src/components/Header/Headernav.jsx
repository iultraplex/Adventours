import React from 'react'
import { Button } from 'react-materialize'
import { FcSearch } from 'react-icons/fc';
import ParallelogramButton from '../Utils/ParallelogramButton'
import './Headernav.css'


const Headernav = () => {
    return (
        <div className="headernav-container">
            <div className="header-left">
                <h3 className="header-title">Adventours</h3>
                <div class="header-searchbox">
                    <FcSearch />
                    <span>Search it up ......</span>
                </div>
            </div>

            <div className="header-right">
                <div className="header-quick-links">
                    <a className="links">Vacation</a>
                    <a className="links">Feedbacks</a>
                    <a className="links">Contact Us</a>
                    <ParallelogramButton text="sign up" />
                </div>

            </div>

        </div>
    )
}

export default Headernav;