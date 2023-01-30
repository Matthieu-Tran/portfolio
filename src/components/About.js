import React, {Fragment, useState} from 'react';
import '../styles/About.css';

const About = ({isDarkMode}) => {

    const[toggleTab, setToggleTab] = useState(1) 
    const toggleState = (index) => {
        setToggleTab(index)
    }
  return (
    <>
        <section className={`about ${isDarkMode ? 'about--dark' : ''}`}>
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
                            <p> Hello, my name is Matthieu Tran and I am a student majoring in computer science and informations systems at the Technological University of Troyes </p>
                            <p> I am excited to share my portfolio with you, showcasing my skills and experiences in the field. I have had the opportunity to work on various projects, both individually and as part of a team, and I am eager to continue growing and learning in this dynamic field. Thank you for taking the time to view my portfolio.</p>
                        </div>
                        {/* Skills content */ }
                        <div className={toggleTab === 2 ?'content active-content' : 'content'}>
                            <h2> 
                                My skills
                            </h2>
                            <div className='skills-row'>

                                <div className='skills-column'>
                                    <div className='progress-wrap'>
                                        <h3> Java</h3>
                                        <div className='progress'>
                                            <div className='progress-bar Java'>
                                                <span> 80 % </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='skills-column'>
                                    <div className='progress-wrap'>
                                        <h3> Javascript </h3>
                                        <div className='progress'>
                                            <div className='progress-bar Javascript'>
                                                <span> 80 % </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='skills-column'>
                                    <div className='progress-wrap'>
                                        <h3> HTML</h3>
                                        <div className='progress'>
                                            <div className='progress-bar HTML'>
                                                <span> 60 % </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='skills-column'>
                                    <div className='progress-wrap'>
                                        <h3> CSS</h3>
                                        <div className='progress'>
                                            <div className='progress-bar CSS'>
                                                <span> 60 % </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='skills-column'>
                                    <div className='progress-wrap'>
                                        <h3> Python</h3>
                                        <div className='progress'>
                                            <div className='progress-bar Python'>
                                                <span> 60 % </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='skills-column'>
                                    <div className='progress-wrap'>
                                        <h3> C</h3>
                                        <div className='progress'>
                                            <div className='progress-bar C'>
                                                <span> 50 % </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='skills-column'>
                                    <div className='progress-wrap'>
                                        <h3> React</h3>
                                        <div className='progress'>
                                            <div className='progress-bar React'>
                                                <span> 40 % </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                

                            </div>
                        </div>

                        {/* Projects content */ }
                        <div className={toggleTab === 3 ?'content active-content' : 'content'}>
                            <div className='exp-column'>
                                <img src= "https://upload.wikimedia.org/wikipedia/commons/2/2b/Valeo_Logo.svg" alt="logo-valeo" className="logo-valeo" width="10%" height="10%"/>
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
    </>
  )
}

export default About