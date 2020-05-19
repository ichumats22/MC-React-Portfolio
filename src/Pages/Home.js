import React, { Component } from 'react'
import { Row, Col } from '../Components/Grid'
import Section from '../Components/Section'
import * as Typography from '../Components/Typography'
import * as Wave from '../Components/Wave'
import Button from '../Components/Button'
import * as Skills from '../Components/Skills'
import * as Contact from '../Components/Contact'
 
export default class Home extends Component {
  render() {
    return (
      <div>
        <Section id='home'>
          <Wave.Home />
          <Col size='8'>
            <h1>
              Hi, 
              <br />
              I'm McKenna Craig 
            </h1>
            <p> 
              Caramels halvah icing tiramisu chocolate cake soufflé cake. Chocolate bar jelly cupcake ice cream macaroon icing. Toffee lollipop powder chocolate cake danish jujubes.
            </p> 
            <Button id='home-btn' href='index.html#about'>LEARN MORE</Button>
          </Col>
        </Section>

        <Section id='about'>
          <Wave.About />

          <Col size='md-5'>
            <img src='../assets/images/headshot.jpg' id='headshot' alt='McKenna Craig Headshot' />
          </Col>
          <Col size='md-7'>
            <h1>I specialize in</h1>
            <h1>Interior Design</h1>
            <p>Caramels halvah icing tiramisu chocolate cake soufflé cake. Chocolate bar jelly cupcake ice cream macaroon icing. Toffee lollipop powder chocolate cake danish jujubes. </p>
            <a className='btn' id='see-my-work-btn' href='./portfolio.html'>SEE MY WORK</a>
          </Col>
        </Section>

        <Section id='skills'>

          <Col size='12'>
            <Row>
              <Typography.SectionHeader>SKILLS</Typography.SectionHeader>
            </Row>

            <Skills.BlockRow>
              <Col size='md-3'>
                <Skills.Block 
                  aos='fade-left' 
                  title='Skill 1' 
                  text='Caramels halvah icing tiramisu chocolate cake soufflé cake. Chocolate bar jelly cupcake ice cream macaroon icing.' 
                />
              </Col>
              <Col size='md-3'>
                <Skills.Block 
                  aos='fade-up' 
                  title='Skill 2' 
                  text='Caramels halvah icing tiramisu chocolate cake soufflé cake. Chocolate bar jelly cupcake ice cream macaroon icing.' 
                />
              </Col>
              <Col size='md-3'>
                <Skills.Block 
                  aos='fade-right' 
                  title='Skill 3' 
                  text='Caramels halvah icing tiramisu chocolate cake soufflé cake. Chocolate bar jelly cupcake ice cream macaroon icing.' 
                />
              </Col>
            </Skills.BlockRow>
            <Skills.BtnRow />
          </Col>
        </Section>

        <Section id='contact'>
          <Col size='12'>
            <Row>
              <Typography.SectionHeader>CONTACT</Typography.SectionHeader>
            </Row>
            <Contact.Row>
              <Contact.SVG />
            </Contact.Row>
          </Col>
        </Section>
      </div>
    )
  }
}

