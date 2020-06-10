import React from 'react'
import './style.css'

export default function Button({id, href, onClick, text}) {
  return(
    <a className='btn' id={id} href={href} onClick={onClick}>
      {text}
    </a>
  )
}