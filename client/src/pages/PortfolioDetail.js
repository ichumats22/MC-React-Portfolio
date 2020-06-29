import React, { Component } from 'react'
import { Row, Col, Modal } from 'react-bootstrap'
import {Image} from 'cloudinary-react'
import Section from '../components/Section'
import SectionHeader from '../components/Section-Header'
import ProjectCard from '../components/Project-Card'
import Button from '../components/Button'
import './PortfolioDetail.css'

require('dotenv').config()
let cloudName = process.env.REACT_APP_CLOUD_NAME

const adot = [
  {
    id: 1,
    title: 'Project Board',
    link: 'project-board'
  },
  {
    id: 2,
    title: 'Program - Facility Relocation Study',
    link: 'program-facility-relocation-study'
  },
  {
    id: 3,
    title: 'Program - Problem/Concept', 
    link: 'program-problem-concept'
  },
  {
    id: 4,
    title: 'Program - Requirements',
    link:  'program-requirements'
  },
  {
    id: 5,
    title: 'Criteria Matrix',
    link: 'criteria-matrix'
  }, 
  {
    id: 6,
    title: 'Adjacency Matrix',
    link: 'adjacency-matrix'
  },
  {
    id: 7,
    title: 'Moodboard',
    link: 'moodboard'
  },
  {
    id: 8,
    title: 'Cover Page',
    link: 'cover-page'
  },
  {
    id: 9,
    title: 'Site & Base Plan',
    link:  'site-base'
  },
  {
    id: 10,
    title: 'Dimension & Furniture/ Finish Plan',
    link: 'dimension-furniture-finish'
  },
  {
    id: 11,
    title: 'Power/ Lighting & Reflected Cealing Plan',
    link: 'power-lighting-reflected-cealing'
  },
  {
    id: 12,
    title: 'Perspective - ADOT Entry',
    link: 'perspective-adot-entry'
  },
  {
    id: 13,
    title: 'Perspective - MVD Entry',
    link: 'perspective-mvd-entry'
  },
  {
    id: 14,
    title: 'Perspective - Reception',
    link: 'perspective-reception',

  },
  {
    id: 15,
    title: 'Perspective - Waiting Area',
    link: 'perspective-waiting'
  },
  {
    id: 16,
    title: 'Perspective - Waiting Area from Reception',
    link: 'perspective-waiting-reception'
  },
  {
    id: 17,
    title: 'Perspective - Service Counter',
    link: 'perspective-serivce-counters'
  },
  {
    id: 18,
    title: 'Materials/ Finish Board',
    link: 'materials-finish'
  }
]

const ofs = [ 
  { 
    id: 1,
    title: 'Project Board', 
    link: 'project-board' 
  },
  { 
    id: 2,
    title: 'Dimension Plan', 
    link: 'dimension-plan'  
  },
  { 
    id: 3,
    title: 'RCP', 
    link: 'rcp'
  },
  { 
    id: 4,
    title: 'Finish Plan', 
    link: 'finish-plan'
  }
]

const modern = [
  { 
    id: 1,
    title: 'Concept Statement & Moodboard',
    link: 'concept-statement-moodboard' 
  },
  { 
    id: 2,
    title: 'Adjacency Matrix',
    link: 'adjacency-matrix' 
  },
  { 
    id: 3,
    title: 'Bubble Diagrams',
    link: 'bubble-diagrams' 
  },
  { 
    id: 4,
    title: 'Blocking Diagrams',
    link: 'blocking-diagram' 
  },
  { 
    id: 5,
    title: 'Conceptual Sketches',
    link: 'ceonceptual-sketches' 
  },  
  { 
    id: 6,
    title: 'Floorplan',
    link: 'loft floorplan' 
  },
  { 
    id: 7,
    title: 'Dining Room',
    link: 'dining-room-elevation' 
  },
  { 
    id: 8,
    title: 'Master Bedroom',
    link: 'master-bedroom-elevation' 
  },
  { 
    id: 9,
    title: 'Kitchen (1/2)',
    link: 'kitchen-elevation-1' 
  },
  { 
    id: 10,
    title: 'Kitchen (2/2)',
    link: 'kitchen-elevation-2' 
  },
  { 
    id: 11,
    title: 'Finish Board',
    link: 'finish-sample-board' 
  },
  { 
    id: 12,
    title: 'Budget',
    link: 'budget' 
  }
]

const tech = [

]

const rest = [
  { 
    id: 1,
    title: 'Project Board',
    link: 'project-board' 
  },
  { 
    id: 2,
    title: 'Criteria Matrix',
    link: 'criteria-matrix' 
  },
  { 
    id: 3,
    title: 'Adjacency Diagram',
    link: 'adjancency-diagram' 
  },
  {
    id: 4,
    title: 'Bubble Diagrams',
    link: 'bubble-diagrams' 
  },
  { 
    id: 5,
    title: 'Amsterdam Moodboard',
    link: 'amsterdam-moodboard' 
  },
  { 
    id: 6,
    title: 'Amsterdam Reception',
    link: 'amsterdam-reception'
  },
  { 
    id: 7,
    title: 'Amsterdam Bar',
    link: 'amsterdam-bar' 
  },
  { 
    id: 8,
    title: 'Amsterdam Dining Area',
    link: 'amsterdam-dining' 
  },
  { 
    id: 9,
    title: 'Stockholm Moodboard',
    link: 'stockholm-moodboard' 
  }, 
  { 
    id: 10,
    title: 'Stockholm Bar',
    link: 'stockholm-bar' 
  },
  {
    id: 11,
    title: 'Stockholm Dining Area',
    link: 'stockholm-dining' 
  },
  { 
    id: 12,
    title: 'Japan Moodboard',
    link: 'japan moodboard' 
  },
  { 
    id: 13,
    title: 'Japan Bar',
    link: 'japan-bar' 
  },
  { 
    id: 14,
    title: 'Japan Dining Area',
    link: 'japan-dining' 
  }
]

const helf = [
  { 
    id: 1,
    title: 'Cover Page' ,
    link: 'cover-page' 
  },
  { 
    id: 2,
    title: 'Spa Concept & Moodboard',
    link: 'spa-concept-mood-board' 
  },
  { 
    id: 3,
    title: 'Residence Concept & Moodboard',
    link: 'residence-concept-mood-board' 
  },
  { 
    id: 4,
    title: 'Dimension Plan', 
    link: 'dimension-plan' 
  },
  { 
    id: 5,
    title: 'Life Safety Plan',
    link: 'life-safety-plan' 
  },
  { 
    id: 6,
    title: 'FF&E Schedule', 
    link: 'ffe-schedule' 
  },
  { 
    id: 7,
    title: 'Technical Furniture Plan',
    link: 'technical-furniture-plan' 
  },
  { 
    id: 8,
    title: 'Rendered Furniture Plan',
    link: 'rendered-furniture-plan' 
  },
  { 
    id: 9,
    title: 'Spa Technical Elevations',
    link: 'spa-tech-elevs' 
  },
  { 
    id: 10,
    title: 'Spa Rendered Elevations',
    link: 'spa-rendered-elevs' 
  },
  { 
    id: 11,
    title: 'Residence Technical Elevations',
    link: 'res-technical-elevs' 
  },
  { 
    id: 12,
    title: 'Residence Rendered Elevations',
    link: 'res-rendered-elevs' 
  },
  { 
    id: 13,
    title: 'Spa Materials Board', 
    link: 'spa-materials' 
  },
  { 
    id: 14,
    title: 'Residence Materials Board',
    link: 'residence-materials' 
  },
  { 
    id: 15,
    title: '', 
    link: 'a' 
  },
  { 
    id: 16,
    title: '', 
    link: 'b' 
  },
  { 
    id: 17,
    title: '', 
    link: 'c' 
  },
  { 
    id: 18,
    title: '', 
    link: 'd' 
  },
  { 
    id: 19,
    title: '', 
    link: 'e' 
  },
  { 
    id: 20,
    title: '', 
    link: 'f' 
  }
]

const conceptuals = [
  { 
    id: 1,
    title: '',
    link: 'gensler' 
  },
  { 
    id: 2,
    title: '',
    link: 'photoshop' 
  },
  { 
    id: 3,
    title: '',
    link: 'untitled' 
  }, 
  { 
    id: 4,
    title: '',
    link: 'a' 
  },
  { 
    id: 5,
    title: '',
    link: 'b' 
  },
  { 
    id: 6,
    title: '',
    link: 'c' 
  },
  { 
    id: 7,
    title: '',
    link: 'd' 
  },
  { 
    id: 8,
    title: '',
    link: 'e' 
  },
  { 
    id: 9,
    title: '',
    link: 'f' 
  },
  { 
    id: 10,
    title: '',
    link: 'g'
  }
]

const sunburst = [
  { 
    id: 1,
    title: 'Dimension Plan',
    link: 'dimension-plan' 
  },
  { 
    id: 2,
    title: 'Space Plan',
    link: 'space-plan' 
  },
  { 
    id: 3,
    title: 'Reflected Ceiling Plan',
    link: 'reflected-cealing-plan' 
  },
  { 
    id: 4,
    title: 'Power & Lighting Plan',
    link: 'power-lighting' 
  },
  { 
    id: 5,
    title: 'Vanity Specs',
    link: 'vanity' 
  },
  { 
    id: 6,
    title: 'Lamp Specs',
    link: 'lamp' 
  }
]

const moodboards = [
  { 
    id: 1,
    title: '', 
    link: 'a' 
  },
  { 
    id: 2,
    title: '', 
    link: 'b' 
  },
  { 
    id: 3,
    title: '', 
    link: 'c' 
  }
]

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
              <Image className='modal-photo' cloudName={cloudName} publicId={`mc-portfolio/${this.state.id}/${this.state.activePhoto.link}`}>
              </Image>
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

        <Row xs={1} s={1} m={2}  id='project-content-row'>
          {this.state.content.map(src => 
            <ProjectCard 
              id={src.id} 
              key={src.id} 
              title={src.title} 
              src={`mc-portfolio/${this.state.id}/${src.link}`} 
              onClick={(e) => this.openModal(src, e)} 
            />
          )}
          {this.loadModalContent()}   
        </Row>
      </Section>
    )
  }
}
