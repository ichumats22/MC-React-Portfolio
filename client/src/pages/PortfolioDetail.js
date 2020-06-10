import React, { Component } from 'react'

import { Row, Col, Modal } from 'react-bootstrap'

import Section from '../components/Section'
import SectionHeader from '../components/Section-Header'
import ProjectCard from '../components/Project-Card'
import Button from '../components/Button'


import './PortfolioDetail.css'

const adot = [

  {
    key: 1,
    title: 'Project Board',
    link: '../assets/content/adot/project-board.png'
  },
  {
    key: 2,
    title: 'Program - Facility Relocation Study',
    link: '../assets/content/adot/program-facility-relocation-study.png'
  },
  {
    key: 3,
    title: 'Program - Problem/Concept', 
    link: '../assets/content/adot/program-problem-concept.png'
  },
  {
    key: 4,
    title: 'Program - Requirements',
    link:  '../assets/content/adot/program-requirements.png'
  },
  {
    key: 5,
    title: 'Criteria Matrix',
    link: '../assets/content/adot/criteria-matrix.png'
  }, 
  {
    key: 6,
    title: 'Adjacency Matrix',
    link: '../assets/content/adot/adjacency-matrix.png'
  },
  {
    key: 7,
    title: 'Moodboard',
    link: '../assets/content/adot/moodboard.png'
  },
  {
    key: 8,
    title: 'Cover Page',
    link: '../assets/content/adot/cover-page.png'
  },
  {
    key: 9,
    title: 'Site & Base Plan',
    link:  '../assets/content/adot/site-base.png'
  },
  {
    key: 10,
    title: 'Dimension & Furniture/ Finish Plan',
    link: '../assets/content/adot/dimension-furniture-finish.png'
  },
  {
    key: 11,
    title: 'Power/ Lighting & Reflected Cealing Plan',
    link: '../assets/content/adot/power-lighting-reflected-cealing.png'
  },
  {
    key: 12,
    title: 'Perspective - ADOT Entry',
    link: '../assets/content/adot/perspective-adot-entry.png'
  },
  {
    key: 13,
    title: 'Perspective - MVD Entry',
    link: '../assets/content/adot/perspective-mvd-entry.png'
  },
  {
    key: 14,
    title: 'Perspective - Reception',
    link: '../assets/content/adot/perspective-reception.png',

  },
  {
    key: 15,
    title: 'Perspective - Waiting Area',
    link: '../assets/content/adot/perspective-waiting.png'
  },
  {
    key: 16,
    title: 'Perspective - Waiting Area from Reception',
    link: '../assets/content/adot/perspective-waiting-reception.png'
  },
  {
    key: 17,
    title: 'Perspective - Service Counter',
    link: '../assets/content/adot/perspective-serivce-counters.png'
  },
  {
    key: 18,
    title: 'Materials/ Finish Board',
    link: '../assets/content/adot/materials-finish.png'
  }
]

const ofs = [ 
  { 
    title: 'Project Board', 
    link: '../assets/content/ofs/project-board.png' 
  },
  { 
    title: 'Dimension Plan', 
    link: '../assets/content/ofs/dimension-plan.png'  
  },
  { 
    title: 'RCP', 
    link: '../assets/content/ofs/rcp.png'
  },
  { 
    title: 'Finish Plan', 
    link: '../assets/content/ofs/finish-plan.png'
  }
]

const modern = [
  { 
    title: 'Concept Statement & Moodboard',
    link: '../assets/content/modern-loft/concept-statement-moodboard.png' 
  },
  { 
    title: 'Adjacency Matrix',
    link: '../assets/content/modern-loft/adjacency-matrix.png' 
  },
  { 
    title: 'Bubble Diagrams',
    link: '../assets/content/modern-loft/bubble-diagrams.png' 
  },
  { 
    title: 'Blocking Diagrams',
    link: '../assets/content/modern-loft/blocking-diagram.png' 
  },
  { 
    title: 'Conceptual Sketches',
    link: '../assets/content/modern-loft/ceonceptual-sketches.png' 
  },  
  { 
    title: 'Floorplan',
    link: '../assets/content/modern-loft/loft floorplan.png' 
  },
  { 
    title: 'Dining Room',
    link: '../assets/content/modern-loft/dining-room-elevation.png' 
  },
  { 
    title: 'Master Bedroom',
    link: '../assets/content/modern-loft/master-bedroom-elevation.png' 
  },
  { 
    title: 'Kitchen (1/2)',
    link: '../assets/content/modern-loft/kitchen-elevation-1.png' 
  },
  { 
    title: 'Kitchen (2/2)',
    link: '../assets/content/modern-loft/kitchen-elevation-2.png' 
  },
  { 
    title: 'Finish Board',
    link: '../assets/content/modern-loft/finish-sample-board.png' 
  },
  { 
    title: 'Budget',
    link: '../assets/content/modern-loft/budget.png' 
  }
]

const tech = [

]

const rest = [
  { 
    title: 'Project Board',
    link: '../assets/content/rest-concepts/project-board.png' 
  },
  { 
    title: 'Criteria Matrix',
    link: '../assets/content/rest-concepts/criteria-matrix.png' 
  },
  { 
    title: 'Adjacency Diagram',
    link: '../assets/content/rest-concepts/adjancency-diagram.png' 
  },
  {
    title: 'Bubble Diagrams',
    link: '../assets/content/rest-concepts/bubble-diagrams.png' 
  },
  { 
    title: 'Amsterdam Moodboard',
    link: '../assets/content/rest-concepts/Amsterdam Moodboard.png' 
  },
  { 
    title: 'Amsterdam Reception',
    link: '../assets/content/rest-concepts/amsterdam-reception.png'
  },
  { 
    title: 'Amsterdam Bar',
    link: '../assets/content/rest-concepts/amsterdam-bar.png' 
  },
  { title: 'Amsterdam Dining Area',
    link: '../assets/content/rest-concepts/amsterdam-dining.png' 
  },
  { 
    title: 'Stockholm Moodboard',
    link: '../assets/content/rest-concepts/stockholm-moodboard.png' 
  }, 
  { 
    title: 'Stockholm Bar',
    link: '../assets/content/rest-concepts/stockholm-bar.png' 
  },
  {
    title: 'Stockholm Dining Area',
    link: '../assets/content/rest-concepts/stockholm-dining.png' 
  },
  { 
    title: 'Japan Moodboard',
    link: '../assets/content/rest-concepts/japan moodboard.png' 
  },
  { 
    title: 'Japan Bar',
    link: '../assets/content/rest-concepts/japan-bar.png' 
  },
  { 
    title: 'Japan Dining Area',
    link: '../assets/content/rest-concepts/japan-dining.png' 
  }
]

const helf = [
  { 
    title: 'Cover Page' ,
    link: '../assets/content/helf/cover-page.png' 
  },
  { 
    title: 'Spa Concept & Moodboard',
    link: '../assets/content/helf/spa-concept-mood-board.png' 
  },
  { 
    title: 'Residence Concept & Moodboard',
    link: '../assets/content/helf/residence-concept-mood-board.png' 
  },
  { 
    title: 'Dimension Plan', 
    link: '../assets/content/helf/dimension-plan.png' 
  },
  { 
    title: 'Life Safety Plan',
    link: '../assets/content/helf/life-safety-plan.png' 
  },
  { 
    title: 'FF&E Schedule', 
    link: '../assets/content/helf/ffe-schedule.png' 
  },
  { 
    title: 'Technical Furniture Plan',
    link: '../assets/content/helf/technical-furniture-plan.png' 
  },
  { 
    title: 'Rendered Furniture Plan',
    link: '../assets/content/helf/rendered-furniture-plan.png' 
  },
  { 
    title: 'Spa Technical Elevations',
    link: '../assets/content/helf/spa-tech-elevs.png' 
  },
  { 
    title: 'Spa Rendered Elevations',
    link: '../assets/content/helf/spa-rendered-elevs.png' 
  },
  { 
    title: 'Residence Technical Elevations',
    link: '../assets/content/helf/res-technical-elevs.png' 
  },
  { 
    title: 'Residence Rendered Elevations',
    link: '../assets/content/helf/res-rendered-elevs.png' 
  },
  { 
    title: 'Spa Materials Board', 
    link: '../assets/content/helf/spa-materials.png' 
  },
  { 
    title: 'Residence Materials Board',
    link: '../assets/content/helf/residence-materials.png' 
  },
  { 
    title: '', 
    link: '../assets/content/helf/a.png' 
  },
  { 
    title: '', 
    link: '../assets/content/helf/b.png' 
  },
  { 
    title: '', 
    link: '../assets/content/helf/c.png' 
  },
  { 
    title: '', 
    link: '../assets/content/helf/d.png' 
  },
  { 
    title: '', 
    link: '../assets/content/helf/e.png' 
  },
  { 
    title: '', 
    link: '../assets/content/helf/f.png' 
  }
]

const conceptuals = [
  { 
    title: '',
    link: '../assets/content/conceptuals-renderings/gensler.png' 
  },
  { 
    title: '',
    link: '../assets/content/conceptuals-renderings/photoshop.png' 
  },
  { 
    title: '',
    link: '../assets/content/conceptuals-renderings/untitled.png' 
  }, 
  { 
    title: '',
    link: '../assets/content/conceptuals-renderings/a.png' 
  },
  { 
    title: '',
    link: '../assets/content/conceptuals-renderings/b.png' 
  },
  { 
    title: '',
    link: '../assets/content/conceptuals-renderings/c.png' 
  },
  { 
    title: '',
    link: '../assets/content/conceptuals-renderings/d.png' 
  },
  { 
    title: '',
    link: '../assets/content/conceptuals-renderings/e.png' 
  },
  { 
    title: '',
    link: '../assets/content/conceptuals-renderings/f.png' 
  },
  { 
    title: '',
    link: '../assets/content/conceptuals-renderings/g.png'
  }
]

const sunburst = [
  { 
    title: 'Dimension Plan',
    link: '../assets/content/sunburst-condos/dimension-plan.png' 
  },
  { 
    title: 'Space Plan',
    link: '../assets/content/sunburst-condos/space-plan.png' 
  },
  { 
    title: 'Reflected Ceiling Plan',
    link: '../assets/content/sunburst-condos/reflected-cealing-plan.png' 
  },
  { 
    title: 'Power & Lighting Plan',
    link: '../assets/content/sunburst-condos/power-lighting.png' 
  },
  { 
    title: 'Vanity Specs',
    link: '../assets/content/sunburst-condos/vanity.png' 
  },
  { 
    title: 'Lamp Specs',
    link: '../assets/content/sunburst-condos/lamp.png' 
  }
]

const moodboards = [
  { 
    title: '', 
    link: '../assets/content/moodboards/a.png' 
  },
  { 
    title: '', 
    link: '../assets/content/moodboards/b.png' 
  },
  { 
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
      activePhoto: ''
    };

    // This binding is necessary to make `this` work in the callback
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  openModal = (e) => {
    console.log(e)
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


  render() {
    return (
      <Section id={this.state.id}>
        <Row>
          <Col>
            <SectionHeader>{this.state.title}</SectionHeader>
          </Col>
        </Row>

        <Row id='project-content-row'>
          {this.state.content.map(src => <ProjectCard id={`${this.state.id}-${src.key}`} key={src.key} src={src.link} title={src.title} onClick={(e) => this.openModal(src, e)} />)}

          <ModalContent src={this.state.activePhoto} show={this.state.modalShow} onHide={() => this.closeModal()} />
        </Row>
      </Section>
    )
  }
}