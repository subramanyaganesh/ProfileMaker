import React from 'react'
import './portfolio.css'
import Lib from '../../Assets/test.jpeg'
import Mid from '../../Assets/midserver.jpeg'
import MidCreate from '../../Assets/portfolio.jpeg'

const Portfolio = () => {
  return (
    <div>
      <section id='portfolio'>
        <h5>My Work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio__container'>
          <article className='portfolio__article'>
            <div className='portfolio__article-image'>
              <img src={Lib} alt="" />
            </div>
            <h3>Library Management System</h3>
            <div className='portfolio__article-cta'>
              <a href='https://github.com/subramanyaganesh/LibraryManagementSystem' className='btn' target='_blank' rel="noreferrer" >Github</a>
              </div>
          </article>

          <article className='portfolio__article'>
            <div className='portfolio__article-image'>
              <img src={Mid} alt="" />
            </div>
            <h3>MidServer Creator</h3>
            <div className='portfolio__article-cta'>
              <a href='https://github.com/subramanyaganesh/MidServerCreator' className='btn' target='_blank' rel="noreferrer">Github</a>
            </div>
          </article>

          <article className='portfolio__article'>
            <div className='portfolio__article-image'>
              <img src={MidCreate} alt="" />
            </div>
            <h3>My Portfolio</h3>
            <div className='portfolio__article-cta'>
              <a href='https://github.com/subramanyaganesh/ProfileMaker' className='btn' target='_blank' rel="noreferrer">Github</a>
              </div>
          </article>

        </div>
      </section>
    </div>
  )
}

export default Portfolio
