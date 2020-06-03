import React from 'react'
import './style.css'

export default function Section({id, children})  {
  return (
    <section id={id}>
      {children}
    </section>
  )
}
