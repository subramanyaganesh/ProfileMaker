import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../Assets/mypicture.jpg'
//import ME2 from '/Users/subramanyaganesh/Desktop/my_portfolio/src/Assets/mypicture2.jpeg'
import HeaderSocials from './HeaderSocials'




const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Subramanya Ganesh </h1>
        <h5 className='text-light'>
          Software Engineer</h5>
        <CTA />
        <HeaderSocials/>
        
        <div className='me'>
          {/* <img src={ME}  style={{width:400,height:400,borderRadius:400,padding:20,marginLeft:243}} alt=''/> */}
          <img src={ME} alt='' style={{padding:20,borderRadius:900/2}}/>
        </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
      
      </div>

    </header>
  )
}

export default Header
