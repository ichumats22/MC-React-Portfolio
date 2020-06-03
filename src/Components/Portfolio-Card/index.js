import React from 'react'
import Card from 'react-bootstrap/Card'
import './style.css'

export default function PortfolioCard({src, title}){
  return(
    <Card className='text-white'>
      <Card.Img src={`../assets/images/covers/${src}`} alt={title} />
        <Card.ImgOverlay>
          <Card.Title className='portfolio-card-title'>{title}</Card.Title>
        </Card.ImgOverlay>
    </Card>
  )
} 