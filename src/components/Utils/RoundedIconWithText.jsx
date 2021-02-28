import React from 'react'
import './RoundedIconWithText.scss'


const RoundedIconWithText = (props) => {


    return (
        <div className="rounded-icon-text-container">
            <div className="rounded-icon-container" style={{color: props.color}}>
                < props.icon />
            </div>
            <div className="rounded-icon-texts">
                <h4 className="icon-title">{props.iconTitle}</h4>
                <p className="icon-desc"> {props.iconDesc}</p>
            </div>

        </div>
    )
}

export default RoundedIconWithText;