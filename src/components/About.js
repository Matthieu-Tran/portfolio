import React, {Fragment, useState} from 'react';
import {motion} from 'framer-motion';
import '../styles/About.css';

const About = () => {

    const[toggleTab, setToggleTab] = useState(1) 
    const toggleState = (index) => {
        setToggleTab(index)
    }
  return (
    <>
        <motion.div
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth, transition: {duration:0.5}}}>

            <section className='about'>
                <div className='row'>
                    <div className='column'>
                        <div className='about-img'>

                        </div>
                    </div>
                    <div className='column'>
                        <div className='tabs'>
                            <div className={toggleTab === 1 ? 'single-tab active-tab': 'single-tab'} onClick= {() => toggleState(1)}>
                            
                                <h2> About </h2>
                            </div>
                            <div className={toggleTab === 2 ? 'single-tab active-tab': 'single-tab'} onClick= {() => toggleState(2)}>
                                <h2> Skills </h2>
                            </div>
                            <div className={toggleTab === 3 ? 'single-tab active-tab': 'single-tab'} onClick= {() => toggleState(3)}>
                                <h2> Experiences </h2>
                            </div>
                        </div>
                        <div className='tab-content'>
                            {/* About content */ }
                            <div className={toggleTab === 1 ?'content active-content' : 'content'}>
                                <h2> 
                                    Background 
                                </h2>
                                <p> Hello, my name is Matthieu Tran and I am a student majoring in computer science and informations systems </p>
                                <h3> Yes this is text</h3>
                                <p> Yes this is a paragraph</p>
                            </div>
                            {/* Skills content */ }
                            <div className={toggleTab === 2 ?'content active-content' : 'content'}>
                                <h2> 
                                    My skills
                                </h2>
                                <p> lorem </p>
                                <div className='skills-row'>

                                    <div className='skills-column'>
                                        <div className='progress-wrap'>
                                            <h3> Developper</h3>
                                            <div className='progess'>
                                                <div className='progress-bar'>
                                                    <div className='progress-bar-percent'>90%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='skills-column'>
                                        <div className='progress-wrap'>
                                            <h3> Designer </h3>
                                            <div className='progess'>
                                                <div className='progress-bar'>
                                                    <div className='progress-bar-percent'>90%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='skills-column'>
                                        <div className='progress-wrap'>
                                            <h3> Javascript</h3>
                                            <div className='progess'>
                                                <div className='progress-bar'>
                                                    <div className='progress-bar-percent'>90%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Projects content */ }
                            <div className={toggleTab === 3 ?'content active-content' : 'content'}>
                                <div className='exp-column'>
                                    <img src= "https://upload.wikimedia.org/wikipedia/commons/2/2b/Valeo_Logo.svg" alt="logo-valeo" classname="logo-valeo" width="15%" height="15%"/>
                                    <h3> Project Manager Assistant Intern at Valeo</h3>
                                    <span> April 2022 - July 2022 </span>
                                <p> Collect and evaluate business requirements as part of the Information Systems team, and collaborate with external technical providers to propose the best solutions. <br/>
Determine business requirements and provide appropriate technical assistance. <br/>
Use the Google Cloud platform, specifically AppSheet, to implement and deploy solutions. <br/>
Manage and administer the Google AppSheet platform at a high level.<br/>
Assist teams in India with Office solution administration. <br/>
Oversee application development and migration. </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    </>
  )
}

export default About