import React, { Component } from 'react'

import { Row, Col, Card, Button, Modal } from 'react-bootstrap'

import Section from '../components/Section'
import SectionHeader from '../components/Section-Header'
import ProjectCard from '../components/Project-Card'


import './PortfolioDetail.css'

export default class PortfolioDetail extends Component {
  state = {
    id: '',
    title: '',
    showModal: false
  }

  componentDidMount() {
    this.setState({ id: this.props.match.params.id })
    switch(this.state.id) {
      case 'adot':
        this.setState({ 
          title: 'ADOT Headquarters'
        })
        break;
      case 'ofs':
        this.setState({ 
          title: 'OFS Brands'
        })
        break;
      case 'modern':
        this.setState({ 
          title: 'Modern Loft'
        })
        break;
      case 'tech':
        this.setState ({ 
          title: 'Technical Tile Drawings'
        })
        break;
      case 'rest':
        this.setState({ 
          title: 'Restaurant Concepts'
        })
        break;
      case 'helf':
        this.setState({ 
          title: 'Helf Spa'
        })
        break;
      case 'conceptuals':
        this.setState({ 
          title: 'Conceptuals/Renderings'
        })
        break;
      case 'sunburst':
        this.setState({ 
          title: 'Sunburst Condominiums' 
        })
        break;
      case 'moodboards':
        this.setState({ 
          title: 'Moodboards'
        })
        break;
      default:  
        this.setState({ 
          title: ''
        })
      }
  }

  zoom = (event) => {
    event.preventDefault()
    this.setState({showModal: true})
  }




  render() {
    return(
      <React.Fragment>
          <Row>
            <Col>
              <SectionHeader>
                {this.state.title}
              </SectionHeader>
            </Col>
          </Row>

          <Row>
            <Col>
              	
              <iframe onClick={this.zoom} src="https://drive.google.com/embeddedfolderview?id=15kS6AucPhuullenht2boqzOzEdXbHBSc#grid" frameborder="0"></iframe>

            </Col>
          </Row>
      </React.Fragment>
      
    
    )
  }
}