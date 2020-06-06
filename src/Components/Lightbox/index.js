import React, { Component } from 'react'
import { CardColumns } from 'react-bootstrap'
import ProjectCard from '../Project-Card'
//import './style.css'

export default function Lightbox({sources}) {

    return(
      <CardColumns>
        {sources.map(src => (<ProjectCard
          src={src.link} title={src.title}
        > </ProjectCard>))}

      </CardColumns>
    )
  }
