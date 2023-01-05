import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = () => {
  return (
    <div>
      <section id='about'>
        <h5>Get To Know </h5>
        <h2> About Me</h2>

        <div className='container about__container'>
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>3 years of Work Experience </small>
              </article>
            </div>

            
              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small>5+ Epics With Several Projects</small>
              </article>

          </div>
          <p className='paragraph'>
              Graduate student of Computer Science from IIT having 3 years of work experience in ServiceNow with experience in designing and developing applications in several programming languages.
              I am a self-motivated and socially interactive professional who wants to explore the opportunities that are in store for me and apply the knowledge and skills attained to make a difference in the world of computing
            </p>
        </div> 
      </section>
    </div>
  )
}

export default about
