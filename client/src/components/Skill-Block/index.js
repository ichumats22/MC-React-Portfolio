import React from 'react'
import './style.css'


export default function SkillBlock({title, text}) {
  return(
    <div className='card skills-block'>
      <h3 className='card-title'>{title}</h3>
      <p className='card-text'>{text}</p>
    </div>
  )
}