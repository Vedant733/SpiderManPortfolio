import React from 'react'
import './Works.css'
import { useSpring, animated } from 'react-spring'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Slider } from './Slider';
function Works() {
    return (
        <div className='works' id='works'>
            {/* <div className='left'></div> */}
            <div className='mid'>
                <Slider/>
            </div>
            <div className='right'></div>
        </div>
    )
}


export default Works
