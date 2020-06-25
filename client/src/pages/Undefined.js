import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Section from '../components/Section'
import './Undefined.css'

export default function NoMatch() {
  return(
    <Section id='no-match'>
      <Row>
        <Col>
          <h1>Coming soon!</h1>
        </Col>
      </Row>
    </Section>
  )
}