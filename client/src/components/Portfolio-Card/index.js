import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Image, Transformation } from 'cloudinary-react'
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
      title: this.props.title
    })
  }

  render() {
    return(
      <NavLink to={`/portfolio/${this.state.id}`}>
        <Card className='text-white'>
          <Image cloudName='dbwppel0z' publicId={`mc-portfolio/covers/${this.state.id}.png`} secure={true} responsive={true}>
            <Transformation width='775' height='466' crop='mfit' />  
          </Image>
          <Card.ImgOverlay>  
            <Card.Title className='portfolio-card-title'>{this.state.title}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </NavLink> 
    )
  }
} 