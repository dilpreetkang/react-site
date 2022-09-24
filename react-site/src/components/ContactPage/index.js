import './index.scss'
import { useEffect, useState } from "react";
import AnimateLetters from "../AnimateLetters";
import Loader from 'react-loaders'

const ContactPage = () => {

    const  [letterClass , letterClass2] = useState('text-animate')
    const nameArray = ['C' , 'o', 'n' , 't' ,'a' ,'c' ,'t' ,' ', 'M', 'e', '.', '.', '.']

    useEffect(() => {
        setTimeout(() => {
            letterClass2('text-animate-hover')
        }, 5000)
    },[])

    return (
        <>
            <div className="container contact-page">
                <div className="contact">
                    <h1>
                    <AnimateLetters letterClass={letterClass} charArray={nameArray} startPoint={1} />
                    </h1>
                </div>
                
                <div className='contact-text'>
                    <p>
                        dkkang2000@hotmail.com
                    </p>
                </div>
            </div>

            <Loader type="ball-scale-multiple" />
        </>
    );
}

export default ContactPage