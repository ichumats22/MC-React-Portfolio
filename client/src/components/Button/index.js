import React from 'react'
import './style.css'

export default function Button({id, href, text}) {
  return(
    <a className='btn' id={id} href={href}>
      {text}
    </a>
  )
}