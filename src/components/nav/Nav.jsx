import React from 'react'
import './nav.css';
import {AiTwotoneHome,AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {useState} from 'react';
const Nav = () => {

  const [activeNav, setActiveNav] = useState('');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#'? 'active' :''}><AiTwotoneHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about'? 'active' :''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience'? 'active' :''}><BiBook/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services'? 'active' :''}><AiTwotoneHome/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact'? 'active' :''}><AiTwotoneHome/></a>
    </nav>
  )
}

export default Nav