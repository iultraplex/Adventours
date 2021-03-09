import React from 'react'
import ParallelogramButton from '../Utils/ParallelogramButton'
import RoundedIconWithText from '../Utils/RoundedIconWithText'
import { MdDirectionsWalk, MdStar } from 'react-icons/md';
import { BiTrain } from 'react-icons/bi'
import { GiAirplaneDeparture } from 'react-icons/gi'
import airplane from '../../images/airplane.png'

import './Hero.css'
import { Button } from 'react-materialize';
import Squares from './Squares';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="firstpart">
                <div className="mobile-mini-nav">
                    <h5>We have</h5>
                    <a>{"Learn More   >"}</a>
                </div>
                <div className="sqaurescontainer">
                    <Squares
                        backgroundColor="#3F3FA1"
                        firstBig="4.9"
                        firstSmall="Customer Rating"
                        secondBig="50+"
                        secondSmall="Monthly Adventures" />

                    <Squares backgroundColor="#83CD94"
                        firstBig="100+"
                        firstSmall="Trusted Customers"
                        secondBig="95%"
                        secondSmall="Customer Return" />
                </div>
                <h4>What Excites you?</h4>
                <RoundedIconWithText icon={MdDirectionsWalk} iconTitle="Trekking" iconDesc="Climbing the talest mountain in Yankari !" color="#3f3fa1" />
                    <RoundedIconWithText icon={BiTrain} iconTitle="Rafting" iconDesc="Let’s meet the wildest river and raft on them !" color="#E88B0E" />
                    <RoundedIconWithText icon={GiAirplaneDeparture} iconTitle="Windsurfing" iconDesc="Didn”t see the tallest wave on a rainy day?" color="#8B101D" />
            </div>
            <Button className="floating-join-btn">
                Join
            </Button>
            <div className="secondpart hero-right">
                <h4 className="hero-large-text">Life is either a daring adventure or nothing</h4>
                <p className="hero-dec-text"><i>The way  up to the top of the mountain is always
longer than you think, Don’t fool yourself. </i></p>
                {/* <img src={airplane} alt="airplane" /> */}
                <div className="hero-right-down">

                    <div className="big-parallelogram-text">

                    </div>
                    <div className="small-parallelogram-text">

                    </div>
                    <div className="hero-square-image">

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hero;