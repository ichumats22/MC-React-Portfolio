import React from 'react'
import './style.css'

export function Row({children}) {
  return (
    <div className='row' id='contact-info-row'>
      {children}
    </div>
  )
}

export function SVG() {
  return(
    <svg viewBox='0 0 500 400' className='contact-info-svg' >
      <g>
        <circle cx="70%" cy="60%" r="150" fill="#BF3C1F" />
        <text x="54%" y="62%" fill="black">
          mckennacraig19@gmail.com
        </text>
      </g> 
      <g>
        <circle cx="27%" cy="60%" r="125" fill="white" />
        <text x='17%' y='62%' fill='black' >
          480-721-5390
        </text>
      </g>
      <g>
        <circle cx="45%" cy="25%" r="100" fill="#F9CEC7"/>
        <text x='37%' y='27%' fill='black'>
          Phoenix, AZ
        </text>
      </g>
    </svg>
  )
}