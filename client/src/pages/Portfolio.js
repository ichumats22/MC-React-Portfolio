import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Section from '../components/Section'
import SectionHeader from '../components/Section-Header'
import PortfolioCard from '../components/Portfolio-Card'

import './Portfolio.css'


class Portfolio extends Component {
  render() {
    return (
        <Section id='portfolio'>
          <Row>
            <Col>
              <SectionHeader>PORTFOLIO</SectionHeader>
            </Col>
          </Row>

          <Row id='portfolio-content-row'>
            <Col>
              <Row noGutters>
                <Col md={4}>
                  <PortfolioCard id='adot' src='adot.png' title='ADOT Headquarters' />
                </Col>
                <Col md={4}>
                  <PortfolioCard id='ofs' src='ofs.png' title='OFS Brands' />
                </Col>
                <Col md={4}>
                  <PortfolioCard id='modern' src='modern-loft.png' title='Modern Loft' />
                </Col>
              </Row>

              <Row noGutters>
                <Col md={4}>
                  <PortfolioCard id='tech' src='technical-tile-drawings.png' title='Technical Tile Drawings' />
                </Col>
                <Col md={4}>
                  <PortfolioCard id='rest' src='rest-concepts.png' title='Restaurant Concepts' />
                </Col>
                <Col md={4}>
                  <PortfolioCard id='helf' src='helf.png' title='Helf Spa' />
                </Col>
              </Row>

              <Row noGutters>
                <Col md={4}>
                  <PortfolioCard id='conceptuals' src='conceptuals-renderings.png' title='Conceptuals/Renderings' />
                </Col>
                <Col md={4}>
                  <PortfolioCard id='sunburst' src='sunburst-condos.png' title='Sunburst Condominiums' />
                </Col>
                <Col md={4}>
                  <PortfolioCard id='moodboards'src='moodboards.png' title='Moodboards' />
                </Col>
              </Row>
            </Col>
          </Row>
        </Section>
    )
  }
}
 
export default Portfolio;