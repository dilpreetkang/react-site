import './index.scss'
import { useEffect, useState } from "react";
import AnimateLetters from "../AnimateLetters";
import Loader from 'react-loaders'

const AboutPage = () => {

    const  [letterClass , letterClass2] = useState('text-animate')
    const nameArray = ['A' , 'b', 'o' , 'u' ,'t' ,' ','M' ,'e', '.', '.', '.']

    useEffect(() => {
        setTimeout(() => {
            letterClass2('text-animate-hover')
        }, 5000)
    },[])


    return (
        <>
            <div className='container about-page'>
                <div className='about'>
                    <h1>
                        <AnimateLetters letterClass={letterClass} charArray={nameArray} startPoint={1} /> 
                    </h1>
                </div>

                <div className='about-text'>
                    <p>
                        <h2> INTRODUCTION </h2> 
                        Hello! I'm Dilpreet Kang a third year computer science student! I enjoy both front-end and back-end
                        development. 
                    </p>
                    <p>
                        <h2> EDUCATION </h2> 
                        University of Birmingham <br />
                        First Year: 1st class <br />
                        Second Year: 1st class
                    </p>
                    <p>
                        <h2> PLACEMENT YEAR </h2> 
                        From June 2021 - August 2022 I completed a software development placement year with IBM.
                        My role focused mainly on devops, providing me with the opportunity to become familiar with
                        <b> Git, Jenkins, Ansible, Groovy, Openshift </b> and alot more! The role had a lot of flexibily
                        so I also had a chance to do some frontend development using <b>HTML, CSS , JS </b> where I created a dashboard allowing the
                        department to keep track of cluster quotas and resources. This was also my first experience of implementing <b> agile </b> methodologies and
                        participating in a scrum.
                    </p>
                </div>

                <p2>
                    <h3> OTHER </h3> 
                    When I'm not busy with university work I enjoy...... <br /><br />
                    gaming, anime, manga, gym, music and reading!
                </p2>

            </div>
            <Loader type="ball-scale-multiple" />
        </>
    )
}

export default AboutPage