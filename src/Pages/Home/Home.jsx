import React, { useState, useEffect } from 'react';
import './Home.css';
import '@lottiefiles/lottie-player';
import HealthWave from './../../assets/Doctor.jpg'
import Marquee from "react-fast-marquee";
import person from './../../assets/Personal Photo.png'
import Model from './../../assets/Machine learning model.jpg'
import { useNavigate } from 'react-router-dom';
import Profile from './../../assets/Profile.jpg'
import Modelhq from './../../assets/Modelhq.jpg'
import healthwave from './../../assets/healthwave2.jpg'



const Home = () => {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [clickedIndex, setClickedIndex] = useState(null);
    const [transform, setTransform] = useState({});
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    const [openFAQ, setOpenFAQ] = useState(null);
    const [faqHover, setFaqHover] = useState(null);

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

    const faqs = [
        {
            question: "What kind of projects do you work on?",
            answer: "I focus on building practical tools, whether it's a machine learning model, an internal automation system, or a full-stack web application. I like working on things that are useful, clean, and actually get used."
        },
        {
            question: "What tech stack and tools do you use?",
            answer: "I work mainly with Python, React, Django, and FastAPI. I also use R for scientific computing, and rely on Git, Docker, and Linux to keep everything efficient and stable."
        },
        {
            question: "Do you work remotely or onsite?",
            answer: "I currently work remotely and I'm comfortable collaborating across time zones. Most of my experience, including GSoC, has been with fully remote, asynchronous teams."
        },
        {
            question: "Are you open to freelance or collaboration work?",
            answer: "Yes, I’m always open to new opportunities if the project is interesting. I especially enjoy working on developer tools, data platforms, or anything that involves building something useful from scratch."
        },
        {
            question: "How can I start a new project with you?",
            answer: "Feel free to reach out through the contact form or message me on LinkedIn or GitHub. I'm quick to reply if it's a genuine message."
        }
    ];


    const handleFAQClick = (idx) => {
        setOpenFAQ(openFAQ === idx ? null : idx);
    };

    return (
        <div className="Home">
            <div className="Hero">
                <div className="Other-parts">
                    <button
                        className='Journey-link'
                        style={{ transform: transform['Journey-link'] }}
                        onMouseMove={(e) => handleMouseMove(e, 'Journey-link')}
                        onMouseLeave={() => handleMouseRemove('Journey-link')}
                        onClick={() => navigate('/aboutpage')}
                    >
                        <h2>About me</h2>
                    </button>
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
                        <li className="tapme" onClick={() => navigate('/aboutpage')}>
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
                        <img src={healthwave} alt="" className='Project-demo' onClick={() => navigate('/projectpage/healthwave')}/>
                    </div>
                    <div className="ModelHQ">
                        <img src={Model} alt="" />
                        <div className="project-details">
                            <div className="project-title">
                                <p><span style={{fontWeight: "bold"}}>ModelHQ </span>- An interactive platform offering diverse machine 
                                learning models with code walkthroughs and predictive insights to empower data-driven decisions.</p>
                                <h2 style={{fontWeight: 400, color: '#b5b5b5'}}>Personal Project • 2025</h2>
                            </div>
                            <div className="project-description">
                                <p style={{fontSize: 21, color: '#b5b5b5'}}>ModelHQ is a full-stack platform built to make machine learning accessible and educational. It allows users to run predictive models — like breast cancer detection and employee attrition — using their own data, while exploring detailed, line-by-line code walkthroughs. With a clean UI and focus on transparency, ModelHQ helps users understand and apply machine learning with confidence.
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
                        <img src={Modelhq} alt="" className='Project-demo' />
                    </div>
                </div>
                <div className="More-projects">
                    <h1>Checkout More Projects</h1>
                    <button className='Project-link'
                        style={{ transform: transform['Project-link'] }}
                        onMouseMove={(e) => handleMouseMove(e, 'Project-link')}
                        onMouseLeave={() => handleMouseRemove('Project-link')}
                        onClick={() => navigate('/projectpage')}>Projects</button>
                </div>
            </div>
            <div className="FAQS-frame">
                <h2>Frequently asked questions</h2>
                <div className="faqs-list simple-faq">
                    {faqs.map((faq, idx) => (
                        <div key={idx}>
                            <div
                                className="faq-question-simple"
                                onClick={() => handleFAQClick(idx)}
                                onMouseEnter={() => setFaqHover(idx)}
                                onMouseLeave={() => setFaqHover(null)}
                                style={{
                                    cursor: 'pointer',
                                    fontWeight: 300,
                                    fontSize: '1.8rem',
                                    color:
                                        faqHover === null
                                            ? 'white'
                                            : faqHover === idx || openFAQ === idx
                                                ? 'white'
                                                : '#626262',
                                    margin: '1.5rem 0 0.5rem 0',
                                    transition: 'color 0.2s',
                                    paddingBottom: '0.5rem',
                                }}
                            >
                                <span 
                                    onMouseEnter={() => setFaqHover(idx)}
                                    onMouseLeave={() => setFaqHover(null)}
                                    style={{
                                        fontWeight: 400, 
                                        marginRight: 12, fontSize: '1.8rem',
                                        color:
                                                faqHover === null
                                                    ? '#808080'
                                                    : faqHover === idx || openFAQ === idx
                                                        ? '#808080'
                                                        : '#626262',
                                        }}>
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                {faq.question}
                            </div>
                            {openFAQ === idx && (
                                <div
                                    className="faq-answer-simple"
                                    onMouseEnter={() => setFaqHover(idx)}
                                    onMouseLeave={() => setFaqHover(null)}
                                    style={{
                                        margin: '0.5rem 0rem 1.5rem 2.5rem',
                                        color:
                                            faqHover === null
                                                ? '#808080'
                                                : faqHover === idx || openFAQ === idx
                                                    ? '#808080'
                                                    : '#626262',
                                        fontSize: '1.2rem',
                                        fontWeight: 300,
                                        lineHeight: 1.6,
                                        animation: 'fadeIn 0.3s',
                                        transition: 'color 0.2s',
                                    }}
                                >
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
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
