import React from 'react'
import './experience.css'
import {FiDatabase} from 'react-icons/fi'
import {AiFillCloud} from 'react-icons/ai'
import {RiToolsFill} from 'react-icons/ri'
import {MdLanguage,MdOutlineComputer,MdManageAccounts} from 'react-icons/md'

const Experience = () => {
  return (

    <div>
      <section id='experience'>
        <h5> Skills I have </h5>
        <h2> My Experience</h2>
        <div className='container container__experience'>

          <div className='outerBox'>
            <AiFillCloud className='icons'/>
            Cloud Platforms
            <article className='values'>
              AWS, Azure, OCI, GCP
            </article>
          </div>

          <div className='outerBox'>
            <MdLanguage className='icons'/>
            LANGUAGES
            <article className='values'>
              Java, Python, C, C++, React
            </article>
          </div>

          <div className='outerBox'>
            Project Managers
            <MdManageAccounts className='icons icons__manager'/>
            <article className='values'>
              Maven, Gradle
            </article>
          </div>
        </div>
        <div className='container container__experience'>
          <div className='outerBox'>
            <FiDatabase className='icons'/>
            DATABASES
            <article className='values'>
              MySQL, PostgreSQL, MongoDB
            </article>
          </div>

          <div className='outerBox'>
            TOOLS
            <RiToolsFill className='icons icons__tool'/>
            <article className='values'>
              Docker, Postman, Git, Jenkins
            </article>
          </div>

          <div className='outerBox'>
            <MdOutlineComputer className='icons'/>
            Systems
            <article className='values'>
              Mac, Linux, Windows
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience



