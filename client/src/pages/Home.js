import React, { Component } from 'react'
import './Home.css'
import { Row, Col } from 'react-bootstrap'
import { ReactComponent as ContactSVG } from '../assets/images/contact.svg'
import Section from '../components/Section'
import SectionHeader from '../components/Section-Header'
import Button from '../components/Button'
import SkillBlock from '../components/Skill-Block'
 
export default class Home extends Component {
  render() {
    return (
      <div>
        <Section id='home'>
          <Row>
            <Col lg={5} id='home-text-col'>
              <h1>
                Hi, 
                <br />
                I'm McKenna Craig 
              </h1>
              <p> 
                I was born and raised in Phoenix, AZ and graduated from Northern Arizona University in May 2018 with a Bachelor of Science in Interior Design (CIDA).
              </p> 
              <Button id='home-btn' href='/index.html#about' text='LEARN MORE' />
            </Col>
            <Col id='home-svg-col'>
              <svg id= 'home-svg' xmlns="http://www.w3.org/2000/svg" width='600 ' height='750'> 
                <g id="shape">
                  <path class="cls-1" d="M933.16,420.57c40.8,79.86,173,57.58,190.78,130.52,16.47,67.7-84.11,141.54-89.4,145.34C952.42,755.4,856.3,743,829,739c-120.54-17.41-125.47-86.88-219.35-88.86-97.44-2.06-127.49,75.87-219.35,56.46-7.3-1.54-66.57-14.08-101.38-67.57-3.12-4.79-36.78-58.11-22.12-113.87C295.27,417,469.44,437.5,508.29,328c24.54-69.18-31.64-114.94,4.6-178.67,12.07-21.21,36.77-49.26,120.74-74.05C730.25,46.75,964.52,3.1,1013.34,94.72,1061.59,185.26,879.48,315.49,933.16,420.57Z" transform="translate(-223.7 -3.5)"/>
                </g>
                <g id="outline">
                  <path class="cls-2" d="M955.22,454.88c46.23,72,187.26,31.48,210.76,96.63,19.13,53-56.81,128.88-110.35,163.67-72.71,47.24-170,61.57-254.51,34.51-96.25-30.83-93.41-89-168-97.61C534.15,640.69,502,739.91,390.53,731c-52.64-4.23-115.68-32-146.15-86.77-20-35.93-28.38-88.19-9.94-133.11C290,375.81,551.15,398.67,562.52,314.87c7.32-54-97.67-89.51-87.49-157.76,2.62-17.57,14.19-46.48,75.56-80.85,154.84-86.73,447-107.65,502.05,5.92C1106.87,194.1,891.33,355.32,955.22,454.88Z" transform="translate(-223.7 -3.5)"/>
                </g>
              </svg>
            </Col>
          </Row>
        </Section>

        <Section id='about'>
          <Row>
            <Col md={5} id='headshot-col'>
              <img src='../assets/images/headshot.png' id='headshot' alt='McKenna Craig Headshot' />
            </Col>
            <Col md={5} id='about-text-col'>
              <h1>I specialize in Interior Design</h1>
             
              <p id='about-text'>I love mixing unexpected materials and textures, and have a passion for universal and sustainable design. </p>
              <Button id='see-my-work-btn' href='./portfolio.html' text='SEE MY WORK'/>
            </Col>
          </Row>
        </Section>

        <Section id='skills'>
          <Row>
            <Col>
              <SectionHeader>SKILLS</SectionHeader>
            </Col>
          </Row>
          <Row className='skills-block-row'> 
            <Col md={3}>
              <SkillBlock 
                aos='fade-left' 
                title='Project Management' 
                text='Highly proficient at managing resources to ensure project success' 
              />
            </Col>
            <Col md={3}>
              <SkillBlock 
                aos='fade-up'
                title='AutoCad' 
                text='Highly proficient in AutoDesk AutoCad with 4 years of experience' 
              />
            </Col>
            <Col md={3}>
              <SkillBlock 
                aos='fade-right' 
                title='Rendering' 
                text='Highly proficient at hand rendering. Moderately proficient at Sketch Up and Chief Architect' 
              />
            </Col>
          </Row>
          <Row id='skills-to-resume-btn-row'>
            <Col id='right-align-btn-col'>
              <Button id='skills-to-resume-btn' href='/resume' text='SEE MY RESUME' />
            </Col>
          </Row>
          
        </Section>

        <Section id='contact'>
          <Row>
            <Col>
              <SectionHeader>CONTACT</SectionHeader>
            </Col>
          </Row>
          <Row>
            <Col id='contact-info-col'>
              <ContactSVG />
            </Col>
          </Row>
        </Section>
      </div>
    )
  }
}

