import './Home.css';
import { init } from 'ityped';
import React, { useEffect, useRef } from 'react'

function Home() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backSpeed: 100,
            backDelay: 2000,
        strings: ['hero', 'human']
        });
    },[])
    return (
        <section id='home' className='homePage'>
            <div className='homePage-img'>
                <div className='homePage-img-div'><img src='assets/spider-man.png'/></div>
            </div>
            <div className='homePage-info'>
                <div>
                    <h2>Hi</h2>
                    <h1>I am Spider Man</h1>
                    <h3>Super<span ref={textRef}></span></h3>
                </div>
            </div>
        </section>
    )
}

export default Home;
