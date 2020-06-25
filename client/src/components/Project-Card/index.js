import React from 'react'
import { Image } from 'cloudinary-react'
import Card from 'react-bootstrap/Card'
import './style.css'

require('dotenv').config()
let cloudName = process.env.REACT_APP_CLOUD_NAME


export default function ProjectCard(props) {
  return(
    <Card className={'text-white project-card'} id={props.id} onClick={props.onClick}>
      <Image cloudName={cloudName} publicId={props.src} secure={true} responsive={true} />
    </Card>
  )
} 