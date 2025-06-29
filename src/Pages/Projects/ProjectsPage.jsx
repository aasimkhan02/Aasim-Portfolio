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
        <div className="HealthWave">
          <img src={HealthWave1} alt="" />
          <div className="project-details-header">
            <h1 className='Project-year'>2024</h1>
            <h1 className="Project-name">
              <span className='PrjTitle'>HealthWave</span> / Healthcare <br />
              <span className="Project-tags">Web, Machine learning</span>
            </h1>
            <h1 className='Project-number'>01</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
