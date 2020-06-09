import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './style.css'


export default class ProjectCard extends Component {
  state = {
    id: '',
    src: '',
    title: '',
    active: false
  }

  componentDidMount() {
    this.setState({ 
      id: this.props.id,
      src: this.props.src,
      title: this.props.title,
      onClick: this.props.onClick
    })
  }



  render() {
    return(
      <Card className={'text-white project-card'} onClick={this.state.onClick}>
        <Card.Img src={this.state.src} alt={this.state.title} onClick={this.props.openModal} />
      </Card>
    )
  }
} 