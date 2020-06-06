import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './style.css'

export default class ProjectCard extends Component {
  state = {
    id: '',
    src: '',
    title: ''
  }

  componentDidMount() {
    this.setState({ 
      src: this.props.src,
      title: this.props.title
    })
  }

  render() {
    return(
      <Card className='text-white project-card'>
        <Card.Img src={this.state.src} alt={this.state.title} />
      </Card>
    )
  }
} 