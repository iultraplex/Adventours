import React from 'react'
import './Squares.css'


const Squares = ({backgroundColor, firstBig, firstSmall, secondBig, secondSmall}) =>{

    return(
        <div className="square-container"
        style={{backgroundColor: backgroundColor}}>
            <div className="rating-container square-content">
                <h4>{firstBig}</h4>
                <p>{firstSmall}</p>
            </div>
            <div className="user-container square-content">
            <h4>{secondBig}</h4>
                <p>{secondSmall}</p>
            </div>
        </div>
    )

}


export default Squares;