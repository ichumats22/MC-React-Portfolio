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
                title='Revit' 
                text='Intermediate knowledge of Revit software.' 
              />
            </Col>
            <Col md={3}>
              <SkillBlock 
                aos='fade-up'
                title='AutoCad' 
                text='Highly proficient in AutoDesk AutoCad with 4 years of experience.' 
              />
            </Col>
            <Col md={3}>
              <SkillBlock 
                aos='fade-right' 
                title='Rendering' 
                text='Highly proficient at hand rendering, Sketch Up, and Chief Architect' 
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

