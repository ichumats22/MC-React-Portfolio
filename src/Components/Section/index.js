import React from 'react'
import './style.css'

export default function Section({id, children})  {
  return (
    <section id={id}>
      <div className='row align-items-center content-row'>
        {children}
      </div>
    </section>
  )
}
