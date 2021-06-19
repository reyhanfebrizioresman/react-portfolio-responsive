import React ,{ useEffect,useRef } from 'react'
import "./intro.scss"
import { init } from 'ityped'

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: false,
            backDelay:1500,
            backSpeed:60,
            showCursor: true,
             strings: ['Web Developer', 'Android Developer' ] })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, Im</h2>
                    <h1>Reyhan Febrizio Resman</h1>
                    {/* Menggunakan Library Ityped */}
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
