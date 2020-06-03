import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Section from '../components/Section'
import SectionHeader from '../components/Section-Header'
import PortfolioCard from '../components/Portfolio-Card'

import './Portfolio.css'


class Portfolio extends Component {
  render() {
    return (
      <div>
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
                  <PortfolioCard src='adot.png' title='ADOT Headquarters' />
                </Col>
                <Col md={4}>
                  <PortfolioCard src='ofs.png' title='OFS Brands' />
                </Col>
                <Col md={4}>
                  <PortfolioCard src='modern-loft.png' title='Modern Loft' />
                </Col>
              </Row>

              <Row noGutters>
                <Col md={4}>
                  <PortfolioCard src='technical-tile-drawings.png' title='Technical Tile Drawings' />
                </Col>
                <Col md={4}>
                  <PortfolioCard src='rest-concepts.png' title='Restaurant Concepts' />
                </Col>
                <Col md={4}>
                  <PortfolioCard src='helf.png' title='Helf Spa' />
                </Col>
              </Row>

              <Row noGutters>
                <Col md={4}>
                  <PortfolioCard src='conceptuals-renderings.png' title='Conceptuals/ Renderings' />
                </Col>
                <Col md={4}>
                  <PortfolioCard src='sunburst-condos.png' title='Sunburst Condominiums' />
                </Col>
                <Col md={4}>
                  <PortfolioCard src='moodboards.png' title='Moodboards' />
                </Col>
              </Row>
            </Col>
          </Row>
        </Section>
      </div>
    )
  }
}
 
export default Portfolio;