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

          </div>
          <div className="Modelhq project">

          </div>
          <div className="AXWeater project">

          </div>
          <div className="QuizElite project">
            
          </div>
      </div>
    </div>
  )
}

export default ProjectsPage
