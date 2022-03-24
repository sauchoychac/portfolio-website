import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsPersonLinesFill} from 'react-icons/bs'
import {ImBook} from 'react-icons/im'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
            <a href="#" onClick = {() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick = {() => setActiveNav('#about')} className={activeNav === '#' ? 'active' : ''}><BsPersonLinesFill /></a>
            <a href="#"onClick = {() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><ImBook /></a>
            <a href="#"onClick = {() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillGithub /></a>
            <a href="#"onClick = {() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillLinkedin /></a>
    </nav>
  )
}

export default Nav