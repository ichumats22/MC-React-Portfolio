import React from 'react'
import './style.css'

export function SectionHeader({children}) {
  return (
    <h2 className='section-header'>
      {children}
    </h2>
  )
}

