import React, { useState } from 'react'
import './ProjectsPage.css'
import HealthWave1 from './../../assets/healthwave1.jpg'
import ModelHQ1 from './../../assets/Modelhq.jpg'

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'Web', 'Machine Learning']
  return (
    <div className='ProjectPage'>
        <h1 className="ProjectPageHeadline">Projects that speak for my skills</h1>
        <div className="Project-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="All-Projects">
          <div className="Healthwave project">
            <img src={HealthWave1} alt="" />
            <div className="project-content">
              <p>2024</p>
              <p className='Project-name'><span>HealthWave</span> / Healthcare Website <br /><div className="project-type">Full stack project</div></p>
              <h1>01</h1>
            </div>
          </div>
          <div className="Modelhq project">
            <img src={ModelHQ1} alt="" />
            <div className="project-content">
              <p>2025</p>
              <p className='Project-name'><span>ModelHQ</span> / ML Models<br /><div className="project-type">Full stack project/ Machine learning</div></p>
              <h1>02</h1>
            </div>
          </div>
          <div className="AXWeather project">
            <img src={HealthWave1} alt="" />
            <div className="project-content">
              <p>2022</p>
              <p className='Project-name'><span>AXWeather</span> / Weather Forecasting <br /><div className="project-type">Full stack project</div></p>
              <h1>03</h1>
            </div>
          </div>
          <div className="QuizElite project">
            <img src={HealthWave1} alt="" />
            <div className="project-content">
              <p>2022</p>
              <p className='Project-name'><span>QuizElite</span> / Online Quiz Platform</p>
              <h1>04</h1>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProjectsPage
