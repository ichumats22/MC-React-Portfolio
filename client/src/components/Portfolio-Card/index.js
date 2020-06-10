import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import './style.css'

export default class PortfolioCard extends Component {
  state = {
    id: '',
    src: '',
    title: ''
  }

  componentDidMount() {
    this.setState({ 
      id: this.props.id,
      src: this.props.src,
      title: this.props.title
    })
  }

  render() {
    return(
      <NavLink to={`/portfolio/${this.state.id}`}>
        <Card className='text-white'>
          <Card.Img src={`../assets/images/covers/${this.state.src}`} alt={this.state.title} />
          <Card.ImgOverlay>  
            <Card.Title className='portfolio-card-title'>{this.state.title}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </NavLink>
      
    )
  }
} 