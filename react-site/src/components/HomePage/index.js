import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './index.scss'
import AnimateLetters from "../AnimateLetters";
import introImg from '../../assets/images/bulb.png'


const HomePage = () => {

    const  [letterClass , letterClass2] = useState('text-animate')
    const nameArray = ['D' , 'i', 'l' , 'p' ,'r' ,'e' ,'e' ,'t', '.', '.', '.']

    useEffect(() => {
        setTimeout(() => {
            letterClass2('text-animate-hover')
        }, 5000)
    },[])

    return (
        <div className="container home-page">
            <div className="introduction">
                <h1> Hello! <br /> I'm <br />
                <AnimateLetters letterClass={letterClass} charArray={nameArray} startPoint={1} />
                </h1>
                <h2>A COMPUTER SCIENCE STUDENT </h2>
                <Link to="/about" className="button"> ABOUT ME </Link>
            </div>

            <div className="intro-image">
                <img src={introImg} alt="logo" />
            </div>
        </div>
    );
}

export default HomePage