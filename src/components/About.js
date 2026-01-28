import React, { useState } from 'react';
import '../styles/About.css';

import DiorLogo from '../assets/logo/Dior_logo.png';
import EmeriaLogo from '../assets/logo/logoEmeria.jpeg';
import ValeoLogo from '../assets/logo/logoValeo.png';
import UTTLogo from '../assets/logo/logoUTT.png';
import NTULogo from '../assets/logo/ntuLogo.png';
import IUTLogo from '../assets/logo/IUTLogo.png';


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
                                    >
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
                                        <p style={{ textAlign: 'justify', color: isDarkMode ? '#ffffff' : '#000000' }}> 
                                                Hello 👋, my name is <strong>Matthieu Tran</strong> and I am a student majoring in <strong>computer science and information systems</strong> at the <strong>Technological University of Troyes</strong> 🎓
                                                </p>
                                                <p style={{ textAlign: 'justify', color: isDarkMode ? '#ffffff' : '#000000' }}> 
                                                I am excited to share my portfolio with you 💼, showcasing my skills and experiences in the field. I have had the opportunity to work on various projects 🚀, both individually and as part of a team, and I am eager to continue growing and learning in this dynamic field 💻. Thank you for taking the time to view my portfolio ✨.
                                                </p>
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
                                                        <img src= {DiorLogo} alt="dior_logo" className="Dior_logo" width="10%" height="10%"/>
                                                        <h3> EMEA IS Project Manager Assistant</h3>
                                                        <span> January 2025 - July 2025 </span>
                                                        <ul style={{ textAlign: 'justify', marginTop: '10px', marginBottom: '10px', lineHeight: '1.8' }}>
                                                                <li style={{ marginBottom: '8px' }}>🔗 Technical Liaison: Bridged the gap between business teams (Finance/HR) and developers by translating operational needs into robust technical specifications</li>
                                                                <li style={{ marginBottom: '8px' }}>🐛 Incident Management: Diagnosed Level 2/3 production incidents by analyzing logs and payloads; validated API endpoints and integration flows using Postman</li>
                                                                <li style={{ marginBottom: '8px' }}>✅ Quality Assurance: Led technical testing phases (UAT) in Jira and coordinated data flow integrity between cloud solutions (SaaS) and on-premise core models</li>
                                                                <li style={{ marginBottom: '8px' }}>🛠️ Automation: Designed and developed a VBA tool to automate file comparison and generate discrepancy reports, reducing support ticket volume</li>
                                                        </ul>
                                                </div>
                                                
                                                <div className='exp-column'>
                                                        <img src= {EmeriaLogo} alt="logo-emeria" className="logo-emeria" width="10%" height="10%"/>
                                                        <h3> Fullstack Engineer</h3>
                                                        <span> July 2023 - January 2024 </span>
                                                        <ul style={{ textAlign: 'justify', marginTop: '10px', marginBottom: '10px', lineHeight: '1.8' }}>
                                                                <li style={{ marginBottom: '8px' }}>🚀 SaaS Development: Built business features for the "Millenium" platform using TypeScript (NestJS/React) and resolved complex full-stack bugs</li>
                                                                <li style={{ marginBottom: '8px' }}>🗄️ Data Architecture: Interfaced the central MySQL database with PostgreSQL microservices. Implemented Prisma ORM and GraphQL API to optimize access and fluidity of real-estate data</li>
                                                                <li style={{ marginBottom: '8px' }}>🏗️ Quality & Architecture: Actively involved in application architecture (Hexagonal principles) and implementing TDD for targeted developments. Conducted regular code reviews and shared best practices</li>
                                                                <li style={{ marginBottom: '8px' }}>🧪 Automated Testing: Designed unit tests with Jest and end-to-end (E2E) tests with Cypress to secure critical user journeys</li>
                                                        </ul>
                                                </div>
                                                
                                                <div className='exp-column'>
                                                        <img src= {ValeoLogo} alt="logo-valeo" className="logo-valeo" width="10%" height="10%"/>
                                                        <h3> Project Manager Assistant Intern at Valeo</h3>
                                                        <span> April 2022 - July 2022 </span>
                                                        <ul style={{ textAlign: 'justify', marginTop: '10px', marginBottom: '10px', lineHeight: '1.8' }}>
                                                                <li style={{ marginBottom: '8px' }}>💡 Technical Development: Developed custom features using Google Apps Script (JavaScript) and AppSheet to automate complex data workflows and generate audit reports</li>
                                                                <li style={{ marginBottom: '8px' }}>📋 Requirement Analysis: Translated business needs into technical specifications and managed the software backlog to ensure alignment between Product Owners and developers</li>
                                                                <li style={{ marginBottom: '8px' }}>✨ Software Quality: Defined and executed test cases during UAT phases, resolving technical roadblocks and ensuring compliance of new tools with internal security standards</li>
                                                                <li style={{ marginBottom: '8px' }}>🌏 Cross-team Collaboration: Assisted teams in India with Office solution administration and oversaw application development and migration</li>
                                                        </ul>
                                                </div>
                                        </div>
                                                                                {/* Formation Content*/ }
                                        <div className={toggleTab === 4 ?'content active-content' : 'content'}>
                                                <div className='exp-column'>
                                                        <img src= {UTTLogo} alt="logo-utt" className="logo-utt" width="20%" height="20%"/>
                                                        <h3>🎓 Computer Science & Information Systems Engineer</h3>
                                                        <span>2022 - 2025 | University of Technology of Troyes</span>
                                                        <ul style={{ textAlign: 'justify', marginTop: '10px', marginBottom: '10px', lineHeight: '1.8' }}>
                                                                <li style={{ marginBottom: '8px' }}>💻 Technical & Strategic Core: Expertise in software design, IT infrastructure, and cybersecurity, complemented by a strategic background in Business Law and Knowledge Engineering</li>
                                                                <li style={{ marginBottom: '8px' }}>🏗️ Software Engineering: Mastered Software Engineering Fundamentals and Object-Oriented System Analysis and Design for development and system structuring</li>
                                                                <li style={{ marginBottom: '8px' }}>🔒 Security & Infrastructure: Deepened knowledge in Information System Security and gained solid understanding of IT infrastructure fundamentals</li>
                                                                <li style={{ marginBottom: '8px' }}>📊 Data & Innovation: Explored Data Project Design for Innovation, Modeling for IS Design, and Knowledge Engineering for knowledge management</li>
                                                                <li style={{ marginBottom: '8px' }}>⚖️ Business & Law: Studied Commercial and Business Law for a comprehensive legal perspective on IT systems</li>
                                                        </ul>
                                                </div>
                                                
                                                <div className='exp-column'>
                                                        <img src= {NTULogo} alt="logo-ntu" className="logo-ntu" width="20%" height="20%"/>
                                                        <h3>🌏 Academic Exchange - National Taiwan University</h3>
                                                        <span>2024 | Taipei, Taiwan</span>
                                                        <ul style={{ textAlign: 'justify', marginTop: '10px', marginBottom: '10px', lineHeight: '1.8' }}>
                                                                <li style={{ marginBottom: '8px' }}>🌐 Network Protocols: Developed low-level network protocols (TCP/UDP) using Go and conducted Wireshark packet analysis</li>
                                                                <li style={{ marginBottom: '8px' }}>🤖 AI Programming: Explored Artificial Intelligence concepts and programming with Python</li>
                                                                <li style={{ marginBottom: '8px' }}>🗣️ Language & Culture: Improved language skills through General and Enhancing Mandarin Course</li>
                                                                <li style={{ marginBottom: '8px' }}>🌍 International Experience: Participated in International Companions for Learning to engage with diverse student community</li>
                                                                <li style={{ marginBottom: '8px' }}>🪨 Field Studies: Gained insights into geological studies through Introduction to Field Geology</li>
                                                        </ul>
                                                </div>
                                                
                                                <div className='exp-column'>
                                                        <img src= {IUTLogo} alt="logo-iut" className="logo-iut" width="30%" height="30%"/>
                                                        <h3>💼 Associate Degree in Computer Science</h3>
                                                        <span>2020 - 2022 | Technical Institute of Orsay</span>
                                                        <ul style={{ textAlign: 'justify', marginTop: '10px', marginBottom: '10px', lineHeight: '1.8' }}>
                                                                <li style={{ marginBottom: '8px' }}>☕ Object-Oriented Programming: Solid foundation in OOP principles and Java programming</li>
                                                                <li style={{ marginBottom: '8px' }}>🗄️ Database Management: Skills in Database Programming and Administration</li>
                                                                <li style={{ marginBottom: '8px' }}>🌐 Networking & Security: Understanding of Network Services, TCP/UDP protocols, and cryptography</li>
                                                                <li style={{ marginBottom: '8px' }}>⚙️ Embedded Systems & Algorithms: Knowledge in embedded systems and advanced algorithmic principles</li>
                                                                <li style={{ marginBottom: '8px' }}>🌍 Web Development: Practical skills in Web Programming (HTML/CSS/PHP)</li>
                                                                <li style={{ marginBottom: '8px' }}>📐 Mathematics: Strong background in graphs, analysis, probability, statistics, and algebra</li>
                                                                <li style={{ marginBottom: '8px' }}>⚖️ IT Law: Understanding of Information and Communication Technology Law</li>
                                                        </ul>
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