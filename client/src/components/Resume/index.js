import React from 'react'
import './style.css'


export function SectionHeader({children}) {
  return (
    <h3 className='resume-section-header'>
      {children}
    </h3>
  )
}

export function Row({children}) {
  return (
    <div className='row resume-row'>
      {children}
    </div>
  )
}

export function SubRow({children}) {
  return (
    <div className='row resume-subrow'>
      {children}
    </div>
  )
}

export function SubCol({size, children, props}) {
  let colSize = size.split(' ').map(size => 'col-' + size).join(' ')

  return (
    <div className={`${colSize} resume-subcol`} {...props}>
      {children}
    </div>
  )
}

export function RightSubCol({size, children}) {
  let colSize = size.split(' ').map(size => 'col-' + size).join(' ')
  
  return(
    <div className={`${colSize} resume-subcol`} id='resume-right-col'>
      {children}
    </div>
  )
}

export function LeftSubCol({size, children}) {
  let colSize = size.split(' ').map(size => 'col-' + size).join(' ')
  
  return(
    <div className={`${colSize} resume-subcol`} id='resume-left-col'>
      {children}
    </div>
  )
}

export function Block({children, id}) {
  return (
    <div className='resume-block' id={id}>
      {children}
    </div>
  )
}


