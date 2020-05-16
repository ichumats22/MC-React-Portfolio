import React from 'react'
import './style.css'

export function BlockRow({children}) {
  return (
    <div className='row' id='skills-block-row'>
      {children}
    </div>
  )
}

export function Block({title, text}) {
  return(
    <div className='card skills-block'>
      <h3 className='card-title'>{title}</h3>
      <p className='card-text'>{text}</p>
    </div>
  )
}

export function BtnRow() {
  return(
    <div className='row' id='skills-to-resume-btn-row'>
      <div className='col' id='right-align-btn-col'>
        <a className='btn' href='/resume'>SEE MY RESUME</a>

      </div>
    </div>
  )
}