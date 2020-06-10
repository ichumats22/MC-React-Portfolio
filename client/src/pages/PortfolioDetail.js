import React, { Component } from 'react'

import { Row, Col, Modal } from 'react-bootstrap'

import Section from '../components/Section'
import SectionHeader from '../components/Section-Header'
import ProjectCard from '../components/Project-Card'
import Button from '../components/Button'


import './PortfolioDetail.css'

const adot = [

  {
    id: 1,
    title: 'Project Board',
    link: '../assets/content/adot/project-board.png'
  },
  {
    id: 2,
    title: 'Program - Facility Relocation Study',
    link: '../assets/content/adot/program-facility-relocation-study.png'
  },
  {
    id: 3,
    title: 'Program - Problem/Concept', 
    link: '../assets/content/adot/program-problem-concept.png'
  },
  {
    id: 4,
    title: 'Program - Requirements',
    link:  '../assets/content/adot/program-requirements.png'
  },
  {
    id: 5,
    title: 'Criteria Matrix',
    link: '../assets/content/adot/criteria-matrix.png'
  }, 
  {
    id: 6,
    title: 'Adjacency Matrix',
    link: '../assets/content/adot/adjacency-matrix.png'
  },
  {
    id: 7,
    title: 'Moodboard',
    link: '../assets/content/adot/moodboard.png'
  },
  {
    id: 8,
    title: 'Cover Page',
    link: '../assets/content/adot/cover-page.png'
  },
  {
    id: 9,
    title: 'Site & Base Plan',
    link:  '../assets/content/adot/site-base.png'
  },
  {
    id: 10,
    title: 'Dimension & Furniture/ Finish Plan',
    link: '../assets/content/adot/dimension-furniture-finish.png'
  },
  {
    id: 11,
    title: 'Power/ Lighting & Reflected Cealing Plan',
    link: '../assets/content/adot/power-lighting-reflected-cealing.png'
  },
  {
    id: 12,
    title: 'Perspective - ADOT Entry',
    link: '../assets/content/adot/perspective-adot-entry.png'
  },
  {
    id: 13,
    title: 'Perspective - MVD Entry',
    link: '../assets/content/adot/perspective-mvd-entry.png'
  },
  {
    id: 14,
    title: 'Perspective - Reception',
    link: '../assets/content/adot/perspective-reception.png',

  },
  {
    id: 15,
    title: 'Perspective - Waiting Area',
    link: '../assets/content/adot/perspective-waiting.png'
  },
  {
    id: 16,
    title: 'Perspective - Waiting Area from Reception',
    link: '../assets/content/adot/perspective-waiting-reception.png'
  },
  {
    id: 17,
    title: 'Perspective - Service Counter',
    link: '../assets/content/adot/perspective-serivce-counters.png'
  },
  {
    id: 18,
    title: 'Materials/ Finish Board',
    link: '../assets/content/adot/materials-finish.png'
  }
]

const ofs = [ 
  { 
    id: 1,
    title: 'Project Board', 
    link: '../assets/content/ofs/project-board.png' 
  },
  { 
    id: 2,
    title: 'Dimension Plan', 
    link: '../assets/content/ofs/dimension-plan.png'  
  },
  { 
    id: 3,
    title: 'RCP', 
    link: '../assets/content/ofs/rcp.png'
  },
  { 
    id: 4,
    title: 'Finish Plan', 
    link: '../assets/content/ofs/finish-plan.png'
  }
]

const modern = [
  { 
    id: 1,
    title: 'Concept Statement & Moodboard',
    link: '../assets/content/modern-loft/concept-statement-moodboard.png' 
  },
  { 
    id: 2,
    title: 'Adjacency Matrix',
    link: '../assets/content/modern-loft/adjacency-matrix.png' 
  },
  { 
    id: 3,
    title: 'Bubble Diagrams',
    link: '../assets/content/modern-loft/bubble-diagrams.png' 
  },
  { 
    id: 4,
    title: 'Blocking Diagrams',
    link: '../assets/content/modern-loft/blocking-diagram.png' 
  },
  { 
    id: 5,
    title: 'Conceptual Sketches',
    link: '../assets/content/modern-loft/ceonceptual-sketches.png' 
  },  
  { 
    id: 6,
    title: 'Floorplan',
    link: '../assets/content/modern-loft/loft floorplan.png' 
  },
  { 
    id: 7,
    title: 'Dining Room',
    link: '../assets/content/modern-loft/dining-room-elevation.png' 
  },
  { 
    id: 8,
    title: 'Master Bedroom',
    link: '../assets/content/modern-loft/master-bedroom-elevation.png' 
  },
  { 
    id: 9,
    title: 'Kitchen (1/2)',
    link: '../assets/content/modern-loft/kitchen-elevation-1.png' 
  },
  { 
    id: 10,
    title: 'Kitchen (2/2)',
    link: '../assets/content/modern-loft/kitchen-elevation-2.png' 
  },
  { 
    id: 11,
    title: 'Finish Board',
    link: '../assets/content/modern-loft/finish-sample-board.png' 
  },
  { 
    id: 12,
    title: 'Budget',
    link: '../assets/content/modern-loft/budget.png' 
  }
]

const tech = [

]

const rest = [
  { 
    id: 1,
    title: 'Project Board',
    link: '../assets/content/rest-concepts/project-board.png' 
  },
  { 
    id: 2,
    title: 'Criteria Matrix',
    link: '../assets/content/rest-concepts/criteria-matrix.png' 
  },
  { 
    id: 3,
    title: 'Adjacency Diagram',
    link: '../assets/content/rest-concepts/adjancency-diagram.png' 
  },
  {
    id: 4,
    title: 'Bubble Diagrams',
    link: '../assets/content/rest-concepts/bubble-diagrams.png' 
  },
  { 
    id: 5,
    title: 'Amsterdam Moodboard',
    link: '../assets/content/rest-concepts/Amsterdam Moodboard.png' 
  },
  { 
    id: 6,
    title: 'Amsterdam Reception',
    link: '../assets/content/rest-concepts/amsterdam-reception.png'
  },
  { 
    id: 7,
    title: 'Amsterdam Bar',
    link: '../assets/content/rest-concepts/amsterdam-bar.png' 
  },
  { 
    id: 8,
    title: 'Amsterdam Dining Area',
    link: '../assets/content/rest-concepts/amsterdam-dining.png' 
  },
  { 
    id: 9,
    title: 'Stockholm Moodboard',
    link: '../assets/content/rest-concepts/stockholm-moodboard.png' 
  }, 
  { 
    id: 10,
    title: 'Stockholm Bar',
    link: '../assets/content/rest-concepts/stockholm-bar.png' 
  },
  {
    id: 11,
    title: 'Stockholm Dining Area',
    link: '../assets/content/rest-concepts/stockholm-dining.png' 
  },
  { 
    id: 12,
    title: 'Japan Moodboard',
    link: '../assets/content/rest-concepts/japan moodboard.png' 
  },
  { 
    id: 13,
    title: 'Japan Bar',
    link: '../assets/content/rest-concepts/japan-bar.png' 
  },
  { 
    id: 14,
    title: 'Japan Dining Area',
    link: '../assets/content/rest-concepts/japan-dining.png' 
  }
]

const helf = [
  { 
    id: 1,
    title: 'Cover Page' ,
    link: '../assets/content/helf/cover-page.png' 
  },
  { 
    id: 2,
    title: 'Spa Concept & Moodboard',
    link: '../assets/content/helf/spa-concept-mood-board.png' 
  },
  { 
    id: 3,
    title: 'Residence Concept & Moodboard',
    link: '../assets/content/helf/residence-concept-mood-board.png' 
  },
  { 
    id: 4,
    title: 'Dimension Plan', 
    link: '../assets/content/helf/dimension-plan.png' 
  },
  { 
    id: 5,
    title: 'Life Safety Plan',
    link: '../assets/content/helf/life-safety-plan.png' 
  },
  { 
    id: 6,
    title: 'FF&E Schedule', 
    link: '../assets/content/helf/ffe-schedule.png' 
  },
  { 
    id: 7,
    title: 'Technical Furniture Plan',
    link: '../assets/content/helf/technical-furniture-plan.png' 
  },
  { 
    id: 8,
    title: 'Rendered Furniture Plan',
    link: '../assets/content/helf/rendered-furniture-plan.png' 
  },
  { 
    id: 9,
    title: 'Spa Technical Elevations',
    link: '../assets/content/helf/spa-tech-elevs.png' 
  },
  { 
    id: 10,
    title: 'Spa Rendered Elevations',
    link: '../assets/content/helf/spa-rendered-elevs.png' 
  },
  { 
    id: 11,
    title: 'Residence Technical Elevations',
    link: '../assets/content/helf/res-technical-elevs.png' 
  },
  { 
    id: 12,
    title: 'Residence Rendered Elevations',
    link: '../assets/content/helf/res-rendered-elevs.png' 
  },
  { 
    id: 13,
    title: 'Spa Materials Board', 
    link: '../assets/content/helf/spa-materials.png' 
  },
  { 
    id: 14,
    title: 'Residence Materials Board',
    link: '../assets/content/helf/residence-materials.png' 
  },
  { 
    id: 15,
    title: '', 
    link: '../assets/content/helf/a.png' 
  },
  { 
    id: 16,
    title: '', 
    link: '../assets/content/helf/b.png' 
  },
  { 
    id: 17,
    title: '', 
    link: '../assets/content/helf/c.png' 
  },
  { 
    id: 18,
    title: '', 
    link: '../assets/content/helf/d.png' 
  },
  { 
    id: 19,
    title: '', 
    link: '../assets/content/helf/e.png' 
  },
  { 
    id: 20,
    title: '', 
    link: '../assets/content/helf/f.png' 
  }
]

const conceptuals = [
  { 
    id: 1,
    title: '',
    link: '../assets/content/conceptuals-renderings/gensler.png' 
  },
  { 
    id: 2,
    title: '',
    link: '../assets/content/conceptuals-renderings/photoshop.png' 
  },
  { 
    id: 3,
    title: '',
    link: '../assets/content/conceptuals-renderings/untitled.png' 
  }, 
  { 
    id: 4,
    title: '',
    link: '../assets/content/conceptuals-renderings/a.png' 
  },
  { 
    id: 5,
    title: '',
    link: '../assets/content/conceptuals-renderings/b.png' 
  },
  { 
    id: 6,
    title: '',
    link: '../assets/content/conceptuals-renderings/c.png' 
  },
  { 
    id: 7,
    title: '',
    link: '../assets/content/conceptuals-renderings/d.png' 
  },
  { 
    id: 8,
    title: '',
    link: '../assets/content/conceptuals-renderings/e.png' 
  },
  { 
    id: 9,
    title: '',
    link: '../assets/content/conceptuals-renderings/f.png' 
  },
  { 
    id: 10,
    title: '',
    link: '../assets/content/conceptuals-renderings/g.png'
  }
]

const sunburst = [
  { 
    id: 1,
    title: 'Dimension Plan',
    link: '../assets/content/sunburst-condos/dimension-plan.png' 
  },
  { 
    id: 2,
    title: 'Space Plan',
    link: '../assets/content/sunburst-condos/space-plan.png' 
  },
  { 
    id: 3,
    title: 'Reflected Ceiling Plan',
    link: '../assets/content/sunburst-condos/reflected-cealing-plan.png' 
  },
  { 
    id: 4,
    title: 'Power & Lighting Plan',
    link: '../assets/content/sunburst-condos/power-lighting.png' 
  },
  { 
    id: 5,
    title: 'Vanity Specs',
    link: '../assets/content/sunburst-condos/vanity.png' 
  },
  { 
    id: 6,
    title: 'Lamp Specs',
    link: '../assets/content/sunburst-condos/lamp.png' 
  }
]

const moodboards = [
  { 
    id: 1,
    title: '', 
    link: '../assets/content/moodboards/a.png' 
  },
  { 
    id: 2,
    title: '', 
    link: '../assets/content/moodboards/b.png' 
  },
  { 
    id: 3,
    title: '', 
    link: '../assets/content/moodboards/c.png' 
  }
]

function ModalContent(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Row>
          <Col id='modal-btn-col' xs={1}>
            <Button id='modal-btn' text='<' />
          </Col>
          <Col xs={10}>
          
              <img className='modal-photo' src={props.src.link ? props.src.link : ''} alt={props.src.title ? props.src.title : ''}></img>
            
          </Col>

          <Col id='modal-btn-col' xs={1}>
            <Button id='modal-btn' text='>' />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default class PortfolioDetail extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id, 
      title: '',
      content: [],
      modalShow: false,
      activePhoto: '',
    };

    // This binding is necessary to make `this` work in the callback
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.updateModal = this.updateModal.bind(this)
  }

  componentDidMount() {
    this.loadContent()
  } 

  loadContent = () => {
    switch(this.state.id) {
      case 'adot':
        this.setState({ 
          title: 'ADOT Headquarters',
          content: adot 
        })
        break;
      case 'ofs':
        this.setState({ 
          title: 'OFS Brands',
          content: ofs 
        })
        break;
      case 'modern':
        this.setState({ 
          title: 'Modern Loft',
          content: modern 
        })
        break;
      case 'tech':
        this.setState ({ 
          title: 'Technical Tile Drawings',
          content: tech
        })
        break;
      case 'rest':
        this.setState({ 
          title: 'Restaurant Concepts',
          content: rest 
        })
        break;
      case 'helf':
        this.setState({ 
          title: 'Helf Spa',
          content: helf
        })
        break;
      case 'conceptuals':
        this.setState({ 
          title: 'Conceptuals/Renderings',
          content: conceptuals 
        })
        break;
      case 'sunburst':
        this.setState({ 
          title: 'Sunburst Condominiums',
          content: sunburst 
        })
        break;
      case 'moodboards':
        this.setState({ 
          title: 'Moodboards',
          content: moodboards 
        })
        break;
      default:  
        this.setState({ 
          title: '',
          content: ''
        })
    }
  }

  loadModalContent = () => { 
    return (
      <Modal
        show={this.state.modalShow}
        onHide={(e) => this.closeModal(e)}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Row>
            <Col id='modal-btn-col' xs={1}>
              <Button id='modal-btn' text='<' onClick={(e) => this.updateModal('left', e)} />
            </Col>
            <Col id='modal-img-col' xs={10}>
              <img className='modal-photo' src={this.state.activePhoto.link ? this.state.activePhoto.link : ''} alt={this.state.activePhoto.title ? this.state.activePhoto.title : ''}></img>
            </Col>
            <Col id='modal-btn-col' xs={1}>
              <Button id='modal-btn' text='>' onClick={(e) => this.updateModal('right', e)}/>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    )
  }

  openModal = (e) => {
    this.setState({
      modalShow: true,
      activePhoto: e
    })
  }

  closeModal = (e) => {
    this.setState({
      modalShow: false,
      activePhoto: {}
    })
  }

  updateModal = (e) => {
    let command = e
    let maxIndex = this.state.content.length -1
    let activeIndex = this.state.activePhoto.id - 1
    let newIndex
    if (activeIndex < maxIndex && activeIndex !== 0) {
      command === 'right' ? newIndex = activeIndex + 1 : newIndex = activeIndex - 1
    }  else if (activeIndex === 0) {
      command === 'right' ? newIndex = activeIndex + 1 : newIndex = maxIndex
    } else if (activeIndex === maxIndex) {
      command === 'right' ? newIndex = 0 : newIndex = activeIndex -1
    }
    this.setState({
      activePhoto: this.state.content[newIndex]
    })
  }

  render() {
    return (
      <Section id={this.state.id}>
        <Row>
          <Col>
            <SectionHeader>{this.state.title}</SectionHeader>
          </Col>
        </Row>

        <Row id='project-content-row'>
          {this.state.content.map(src => 
           <ProjectCard 
            id={src.id} key={src.id} src={src.link} title={src.title} onClick={(e) => this.openModal(src, e)} 
            />
          )}
        
          {this.loadModalContent()}
        </Row>
      </Section>
    )
  }
}
