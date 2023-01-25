import React, {Fragment, useState} from 'react';
import '../assets/About.css';

const About = () => {

    const[toggleTab, setToggleTab] = useState(1) 
    const toggleState = (index) => {
        setToggleTab(index)
    }
  return (
    <>
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
                            <h2> Projects </h2>
                        </div>
                    </div>
                    <div className='tab-content'>
                        {/* About content */ }
                        <div className={toggleTab === 1 ?'content active-content' : 'content'}>
                            <h2> 
                                Backgroud 
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
                                                <span> 80 % </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='skills-column'>
                                    <div className='progress-wrap'>
                                        <h3> Designer </h3>
                                        <div className='progess'>
                                            <div className='progress-bar'>
                                                <span> 80 % </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='skills-column'>
                                    <div className='progress-wrap'>
                                        <h3> Javascript</h3>
                                        <div className='progess'>
                                            <div className='progress-bar'>
                                                <span> 80 % </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Projects content */ }
                        <div className={toggleTab === 3 ?'content active-content' : 'content'}>
                            <div className='exp-column'>
                                <h3> Web Developper</h3>
                                <span> 2020 - 2022 </span>
                               <p> Lorem </p>
                            </div>

                            <div className='exp-column'>
                                <h3> Python Developper</h3>
                                <span> 2020 - 2022 </span>
                               <p> Lorem </p>
                            </div>

                            <div className='exp-column'>
                                <h3> Javascript Developper</h3>
                                <span> 2020 - 2022 </span>
                               <p> Lorem </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About