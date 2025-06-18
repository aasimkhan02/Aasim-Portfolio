import React from 'react'
import './AboutPage.css'

const About = () => {
    return (
        <div className='AboutPage'>
            <div className="About-hero">
                <h1>I'm the developer who makes ideas work.</h1>
                <h4>I'm a CS undergrad and open-source contributor focused on building 
                    clean, reliable software. I combine curiosity with real-world problem 
                    solving to create tools that are both useful and thoughtful. <br />
                    <div className="about-links">
                        <button>My Journey</button> 
                        <button>My Projects</button>
                    </div>
                </h4>
            </div>
            <div className="Can-help-with">
                <h1>What I can do for you....</h1>
                <div className="My-domains">
                    <div className="Software-development">
                        <p>01</p>
                        <hr />
                        <h1 className='domain-heading'>Software Development</h1>
                        <h2>From full-stack development to backend automation, I write clean, scalable code that turns ideas into reliable digital tools.</h2>
                    </div>
                    <div className="Machine-learning">
                        <p>02</p>
                        <hr />
                        <h1 className='domain-heading'>AI & Machine Learning</h1>
                        <h2>I apply ML fundamentals to real-world problems, working with data to build smart, practical systems that actually make sense.</h2>
                    </div>
                    <div className="Open-source-collaboration">
                        <p>03</p>
                        <hr />
                        <h1 className='domain-heading'>Open Source & Collaboration</h1>
                        <h2>As a contributor to real-world projects, I collaborate in public, write maintainable code, and believe in building for the community.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
