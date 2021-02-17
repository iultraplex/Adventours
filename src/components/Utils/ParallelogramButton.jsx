import React from 'react'
import './ParallelogramButton.css'



const ParallelogramButton = (props) => {

    return (

        <a class="button parallelogram" href="#">
            <span class="skew-fix">{props.text}</span>
        </a>

    )

}

export default ParallelogramButton;