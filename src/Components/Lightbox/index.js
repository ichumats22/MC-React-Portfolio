import React, { Component } from 'react'
import { CardColumns } from 'react-bootstrap'
import ProjectCard from '../Project-Card'
//import './style.css'

export default class Lightbox extends Component {
  state ={
    sources: []
  }
  componentDidMount() {
    this.setState({ sources: this.props.sources})
  }
  render() {
    return(
      <CardColumns>
        {this.state.sources.map(src => (<ProjectCard
          src={src.link} title={src.title}
        > </ProjectCard>))}

      </CardColumns>
    )
  }
}
