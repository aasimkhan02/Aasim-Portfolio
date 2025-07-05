import React, { useState } from 'react'
import './ProjectsPage.css'
import HealthWave1 from './../../assets/healthwave1.jpg'

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
              <p>2022</p>
              <p className='Project-name'><span>HealthWave</span> / Healthcare Website</p>
              <h1>01</h1>
            </div>
          </div>
          <div className="Modelhq project">
            <img src={HealthWave1} alt="" />
            <div className="project-content">
              <p>2022</p>
              <p className='Project-name'><span>HealthWave</span> / Healthcare Website</p>
              <h1>01</h1>
            </div>
          </div>
          <div className="AXWeater project">
            <img src={HealthWave1} alt="" />
            <div className="project-content">
              <p>2022</p>
              <p className='Project-name'><span>HealthWave</span> / Healthcare Website</p>
              <h1>01</h1>
            </div>
          </div>
          <div className="QuizElite project">
            <img src={HealthWave1} alt="" />
            <div className="project-content">
              <p>2022</p>
              <p className='Project-name'><span>HealthWave</span> / Healthcare Website</p>
              <h1>01</h1>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProjectsPage
