import React from 'react'
import './style.css'

export function SectionHeader({children}) {
  return (
    <h2 className='section-header'>
      {children}
    </h2>
  )
}

export function ResSectionHeader({children}) {
  return (
    <h3 className='resume-section-header'>
      {children}
    </h3>
  )
}

export function HeaderOne({children}) {
  return (
    <h1>{children}</h1>
  )
}

export function HeaderTwo({children}) {
  return (
    <h2>{children}</h2>
  )
}

export function HeaderThree({children}) {
  return (
    <h3>{children}</h3>
  )
}

export function HeaderFour({children}) {
  return (
    <h4>{children}</h4>
  )
}

export function HeaderFive({children}) {
  return (
    <h6>{children}</h6>
  )
}

export function HeaderSix({children}) {
  return (
    <h6>{children}</h6>
  )
}

export function Paragraph({children}) {
  return (
    <p>{children}</p>
  )
}