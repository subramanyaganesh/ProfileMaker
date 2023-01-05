import React from 'react'
import './nav.css'
import {AiFillHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
import {RiServiceLine} from 'react-icons/ri'


const Navigation = () => {
    const[activeNav,setActiveNav]=useState('#home')
  return (
    <nav>
      <a href='#home' onClick={()=>{setActiveNav('#home')}} className={activeNav==='#home'?'active':''}><AiFillHome/></a>
      <a href='#about' className={activeNav==='#about'?'active':''} onClick={()=>{setActiveNav('#about')}}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>{setActiveNav('#experience')}} className={activeNav==='#experience'?'active':''}><BiBook/></a>
      <a href='#portfolio' onClick={()=>{setActiveNav('#portfolio')}} className={activeNav==='#portfolio'?'active':''}><RiServiceLine/></a>
      <a href='#contact' onClick={()=>{setActiveNav('#contact')}} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navigation
