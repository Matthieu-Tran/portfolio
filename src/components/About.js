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
                                    <div className='about-img'
                                      style={{ backgroundImage: "url('/assets/Photo-Moi.jpg')" }}>
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
                                            <div className={toggleTab === 4 ? 'single-tab active-tab': 'single-tab'} onClick= {() => toggleState(4)}>
                                                    <h2> Education </h2>
                                            </div>
                                    </div>
                                    <div className='tab-content'>
                                            {/* About content */ }
                                            <div className={toggleTab === 1 ?'content active-content' : 'content'}>
                                                    <h2> 
                                                            Background 
                                                    </h2>
                                                    <p style={{ textAlign: 'justify' }}> Hello, my name is Matthieu Tran and I am a student majoring in computer science and informations systems at the Technological University of Troyes </p>
                                                    <p style={{ textAlign: 'justify' }}> I am excited to share my portfolio with you, showcasing my skills and experiences in the field. I have had the opportunity to work on various projects, both individually and as part of a team, and I am eager to continue growing and learning in this dynamic field. Thank you for taking the time to view my portfolio.</p>
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
                                                                            <h3> VBA </h3>
                                                                            <div className='progress'>
                                                                                    <div className='progress-bar VBA'>
                                                                                            <span> 60 % </span>
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
                                                                    <img src= "/assets/Dior_logo.png" alt="dior_logo" className="Dior_logo" width="10%" height="10%"/>
                                                                    <h3> EMEA IS Project Manager Assistant</h3>
                                                                    <span> January 2025 - July 2025 </span>
                                                            <p style={{ textAlign: 'justify' }}> Design and development of a VBA tool to automate file comparison and generate a discrepancy report, thereby reducing the volume of support tickets. <br/>                        
                                                                    Project management in collaboration with teams in Spain as part of a migration, ensuring coordination and alignment of technical requirements. <br/>
                                                                    Contributing to the optimisation of data flows and the improvement of internal tools to facilitate access to information and decision-making.<br/>
                                                                    </p>
                                                    </div>
                                                    <div className='exp-column'>
                                                                    <img src= "/assets/logoEmeria.jpeg" alt="logo-emeria" className="logo-emeria" width="10%" height="10%"/>
                                                                    <h3> Fullstack Engineer</h3>
                                                                    <span> July 2023 - January 2024 </span>
                                                            <p style={{ textAlign: 'justify' }}> Developing APIs and microservices as part of a team in a real estate context, in order to optimise system interoperability and improve the efficiency of business processes. <br/>
                                                                    Participation in the entire development cycle, from needs analysis to production launch, ensuring the quality and performance of the solutions. <br/>
                                                                    Contributing to the optimisation of data flows and the improvement of internal tools to facilitate access to information and decision-making.<br/>
                                                                    </p>
                                                    </div>
                                                    <div className='exp-column'>
                                                            <img src= "/assets/Valeo_Logo.svg" alt="logo-valeo" className="logo-valeo" width="10%" height="10%"/>
                                                            <h3> Project Manager Assistant Intern at Valeo</h3>
                                                            <span> April 2022 - July 2022 </span>
                                                    <p style={{ textAlign: 'justify' }}> Collect and evaluate business requirements as part of the Information Systems team, and collaborate with external technical providers to propose the best solutions. <br/>
                                                            Determine business requirements and provide appropriate technical assistance. <br/>
                                                            Use the Google Cloud platform, specifically AppSheet, to implement and deploy solutions. <br/>
                                                            Manage and administer the Google AppSheet platform at a high level.<br/>
                                                            Assist teams in India with Office solution administration. <br/>
                                                            Oversee application development and migration. </p>
                                                    </div>
                                                
                                            </div>
                                            {/* Formation Content*/ }
                                            <div className={toggleTab === 4 ?'content active-content' : 'content'}>
                                                    <div className='exp-column'>
                                                            <img src= "/assets/logoUTT.png" alt="logo-utt" className="logo-utt" width="20%" height="20%"/>
                                                            <h3> Computer and Information Systems Engineer </h3>
                                                            <span> 2022 - 2025 </span>
                                                    <p style={{ textAlign: 'justify' }}> During my training in Computer Science and Information Systems Engineering, I took several key courses. I studied "Software Engineering Fundamentals" and "Object-Oriented System Analysis and Design" to master development and system structuring. The course "Mastering the Fundamentals of IT Infrastructure" gave me a solid understanding of IT infrastructures. I also explored "Data Project Design for Innovation" and "Web Technologies" for web development. <br/>

I deepened my knowledge in security with "Introduction to Information System Security" and in modeling with "Modeling for IS Design." The course "Knowledge Engineering" introduced me to knowledge management. I also took courses in "Business and Law" and "Commercial and Business Law" for a legal perspective. Finally, I improved my language skills with "Professional English" and began learning Korean. </p>
                                                    </div>
                                                    <div className='exp-column'>
                                                            <img src= "/assets/ntuLogo.png" alt="logo-ntu" className="logo-ntu" width="20%" height="20%"/>
                                                            <h3> Exchange Semester at the National Taiwan University </h3>
                                                            <span> 2024 </span>
                                                    <p style={{ textAlign: 'justify' }}> During my exchange semester in Taiwan as part of my Engineering program, I enrolled in several enriching courses. I took a "Python Class" to enhance my programming skills and "Introduction to Computer Network" to understand network fundamentals. The course "Artificial Intelligence Programming with Python" allowed me to explore AI concepts using Python. I also participated in "International Companions for Learning" to engage with a diverse student community. <br/>

                                                    To improve my language skills, I took the "General and Enhancing Mandarin Course." Additionally, I gained insights into geological studies through "Introduction to Field Geology." These courses provided a well-rounded educational experience, combining technical knowledge with cultural and linguistic learning. </p>
                                                    </div>
                                                    <div className='exp-column'>
                                                            <img src= "/assets/IUTLogo.png" alt="logo-utt" className="logo-utt" width="30%" height="30%"/>
                                                            <h3> Bachelor of Technology in Computer Science </h3>
                                                            <span> 2020 - 2022 </span>
                                                    <p style={{ textAlign: 'justify' }}> During my computer science Bachelor Diploma at the IUT d'Orsay, I completed a variety of courses that provided a strong foundation in computer science. I studied "Object-Oriented Design" and "Object-Oriented Programming (Java)" to develop my programming skills. The course "Database Programming and Administration" equipped me with skills in database management. I also learned about "IT Project Management" and "Network Services" to understand the broader aspects of IT infrastructure.<br/>

                                                    Additionally, I took "Information and Communication Technology Law" to grasp the legal aspects of IT. The course "Advanced Algorithms" deepened my understanding of algorithmic principles. I gained practical web development skills through "Web Programming (HTML/CSS/PHP)" and strengthened my mathematical background with courses in "Mathematics," including graphs, analysis, probability, statistics, and algebra. </p>
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