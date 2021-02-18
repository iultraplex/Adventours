import React from 'react'
import ParallelogramButton from '../Utils/ParallelogramButton'
import RoundedIconWithText from '../Utils/RoundedIconWithText'
import { MdDirectionsWalk } from 'react-icons/md';
import {BiTrain} from 'react-icons/bi'
import {GiAirplaneDeparture} from 'react-icons/gi'

import './Hero.css'

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-left">
                <div className="hero-left-top">
                    <p className="hero-large-text">Life is either a daring adventure or nothing </p>
                    <p className="hero-small-text">Outdoor is where life happens</p>
                    <div className="hero-links">
                        <ParallelogramButton text="Join" />
                        <a className="link" href="#">{"Learn More >"}</a>
                    </div>
                </div>
                <div className="hero-left-down">
                   <p>What excites you most?</p>
                   <RoundedIconWithText icon = {MdDirectionsWalk} iconTitle="Trekking" iconDesc="Climbing the talest mountain in Yankari !" color="#3f3fa1"/>
                   <RoundedIconWithText icon = {BiTrain} iconTitle="Rafting" iconDesc="Let’s meet the wildest river and raft on them !" color="#E88B0E"/>
                   <RoundedIconWithText icon = {GiAirplaneDeparture} iconTitle="Windsurfing" iconDesc="Didn”t see the tallest wave on a rainy day?" color="#8B101D"/>
                </div>
            </div>
            <div className="hero-right">
                right
            </div>
        </div>
    )
}

export default Hero;