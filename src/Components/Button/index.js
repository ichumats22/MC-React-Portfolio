import React from 'react'
import './style.css'

export default function Button({id, href, children}) {
  return(
    <a className='btn' id={id} href={href}>
      {children}
    </a>
  )
}