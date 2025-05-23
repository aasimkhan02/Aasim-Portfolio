import React, { useState, useEffect } from 'react';
import './Home.css';
import '@lottiefiles/lottie-player';
import HealthWave from './../../assets/Doctor.jpg'
import AXWeather from './../../assets/Weather.jpg'
import QuizElite from './../../assets/Quiz.jpg'
import Marquee from "react-fast-marquee";
import person from './../../assets/Person1.jpg'
import Model from './../../assets/Machine learning model.jpg'
import { Link } from 'react-scroll';


const Home = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [clickedIndex, setClickedIndex] = useState(null);
    const [transform, setTransform] = useState({});
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    

    const handleMouseMove = (e, index) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setTransform(prevState => ({
            ...prevState,
            [index]: `translate(${x * 0.3}px, ${y * 0.3}px)`
        }));
    };

    const handleMouseRemove = (index) => {
        setTransform(prevState => ({
            ...prevState,
            [index]: 'translate(0, 0)'
        }));
    };

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setClickedIndex(null);
    };

    const handleClick = (index) => {
        if (clickedIndex === index) {
            setClickedIndex(null);
        } else {
            setClickedIndex(index);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="Home">
            <div className="Notice">
                <h3>Notice - This portfolio is currently static as it's still under development.</h3>
            </div>
            <div className="Hero">
                <div className="Other-parts">
                    <h2
                        className='contact-link'
                        style={{ transform: transform['contact-link'] }}
                        onMouseMove={(e) => handleMouseMove(e, 'contact-link')}
                        onMouseLeave={() => handleMouseRemove('contact-link')}
                    >
                        Contact me
                    </h2>
                    <h1>Developer,<br /> Designer & Engineer</h1>
                </div>
                <Marquee className='hero-marquee' speed={130}>
                    <h1>Khan Mohd Aasim - </h1>
                </Marquee>
            </div>
            <div className="About Frame">
                <div className="Heading">
                    <h1>About me</h1>
                </div>
                <div className="Main-content">
                    <h2>
                        I'm a developer based in Mumbai, India, passionate about {' '}
                        <span style={{ color: '#FF3F00' }}>Web development and AI/ML</span>.I create 
                        innovative solutions that enhance user experiences and set new digital 
                        benchmarks by blending technology and design for seamless results.
                    </h2>
                    <div className="Other-parts">
                        <h4>I am committed to pushing the limits of innovation, 
                            ensuring that every solution exceeds expectations 
                            and shapes the future of digital experiences.
                        </h4>
                        <img src={person} alt="" className='Person-image'/>
                    </div>
                </div>
            </div>
            <div className="Skill Frame">
                <div className="Heading">
                    <h1>What I Do</h1>
                </div>
                <div className="Main-content">
                    {isSmallScreen && (
                        <li className="tapme">
                            <h1>Tap to Interact</h1>
                        </li>
                    )}
                    {[
                        { skill: 'Frontend Development', techStack: ['React', 'Javascript', 'RShiny', 'CSS', 'HTML', 'Bootstrap'] },
                        { skill: 'Backend Development', techStack: ['Javascript', 'Django', 'MySQL', 'FastAPI', 'SQlite'] },
                        { skill: 'Machine Learning', techStack: ['TensorFlow','Pandas', 'Numpy', 'Scikit-learn', 'Keras', 'OpenCV', 'Matplotlib'] },
                        { skill: 'Programming', techStack: ['Python', 'JavaScript','R' , 'CP', 'Java'] },
                        { skill: 'Tools', techStack: ['Git', 'Figma', 'Streamlit', 'Postman', 'RStudio', 'VSCode', 'Trello', 'Canva'] },
                    ].map((item, index) => (
                        <li
                            key={index}
                            className={item.skill === 'Tools' ? 'tools-section' : ''}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <h1 style={{ display: hoveredIndex === index ? 'none' : 'block' }}>{item.skill}</h1>
                            {hoveredIndex === index && (
                                <div className="marquee-container">
                                    <Marquee
                                        key={hoveredIndex}
                                        className="hero-marquee"
                                        speed={250}
                                    >
                                        <span className="marquee-item">
                                            {`${item.techStack.join(' , ')}\u00A0\u00A0\u00A0\u00A0\u00A0 - \u00A0\u00A0\u00A0\u00A0\u00A0${item.techStack.join(' , ')}\u00A0\u00A0\u00A0\u00A0\u00A0 - \u00A0\u00A0\u00A0\u00A0\u00A0`}
                                        </span>
                                    </Marquee>
                                </div>
                            )}
                        </li>
                    ))}
                </div>
            </div>


            <div className="Projects Frame">
                <div className="Heading">
                    <h1 style={{color: "white"}}>Selected Work</h1>
                </div>
                <div className="Main-content">
                    <div className="Healthwave">
                        <img src={HealthWave} alt="" />
                        <div className="project-details">
                            <div className="project-title">
                                <p><span style={{fontWeight: "bold"}}>HealthWave </span>- A cutting-edge blend of health education,
                                AI predictions, and medication insights, redefining your well-being.</p>
                                <h2 style={{fontWeight: 400, color: '#717171'}}>Personal Project • 2024</h2>
                            </div>
                            <div className="project-description">
                                <p style={{fontSize: 21, color: '#717171'}}>HealthWave is a comprehensive platform designed to help users navigate their health journey 
                                    with ease. It combines detailed medication information, health prediction models, 
                                    and educational videos to offer valuable insights into managing and 
                                    understanding various health conditions. By providing accessible resources 
                                    and tools, HealthWave aims to empower users to make informed decisions and 
                                    take proactive steps in maintaining their well-being.
                                </p>
                                <ul className="project-techstack">
                                    <li>React</li>
                                    <li>Django</li>
                                    <li>SQLite</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ModelHQ">
                        <img src={Model} alt="" />
                        <div className="project-details">
                            <div className="project-title">
                                <p><span style={{fontWeight: "bold"}}>ModelHQ </span>- An interactive platform offering diverse machine 
                                learning models with code walkthroughs and predictive insights to empower data-driven decisions.</p>
                                <h2 style={{fontWeight: 400, color: '#3e3e3e'}}>Personal Project • 2025</h2>
                            </div>
                            <div className="project-description">
                                <p style={{fontSize: 21, color: '#3e3e3e'}}>ModelHQ is a full-stack platform built to make machine learning accessible and educational. It allows users to run predictive models — like breast cancer detection and employee attrition — using their own data, while exploring detailed, line-by-line code walkthroughs. With a clean UI and focus on transparency, ModelHQ helps users understand and apply machine learning with confidence.
Designed for both beginners and enthusiasts, the platform simplifies complex ML workflows into interactive, meaningful experiences.
                                </p>
                                <ul className="project-techstack">
                                    <li>React</li>
                                    <li>FastAPI</li>
                                    <li>TensorFlow</li>
                                    <li>Python</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blank-space"></div>
            </div>
            <div className="Contact-me">
                <h1>Let's Work <br/> Together</h1>
                <div className="contact">
                    <div className="details">
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                    </div>
                    <input type="text" placeholder='Message'/>
                </div>
                <div className="Socials">
                    <h2>Socials</h2>
                    <hr/>
                    <div className="social-links">
                        <div className="social-media">
                            <h3>Github</h3>
                            <h3>Linkedin</h3>
                            <h3>Leetcode</h3>
                            <h3>Instagram</h3>
                        </div>
                        <div className="private-links">
                            <h3>Phone number:<br /><span>+91 9378234570</span></h3>
                            <h3>Email:<br /><span>aasimkroc@gmail.com</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
