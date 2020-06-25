import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Section from '../components/Section'
import SectionHeader from '../components/Section-Header'
import PortfolioCard from '../components/Portfolio-Card'


class Portfolio extends Component {
  render() {
    return (
        <Section id='portfolio'>
          <Row>
            <Col>
              <SectionHeader>PORTFOLIO</SectionHeader>
            </Col>
          </Row>

          <Row noGutters id='portfolio-content-row'>
            <Col>
              <Row noGutters>
                <Col md={4}>
                  <PortfolioCard id='adot' title='ADOT Headquarters' />
                </Col>
                <Col md={4}>
                  <PortfolioCard id='ofs' title='OFS Brands' />
                </Col>
                <Col md={4}>
                  <PortfolioCard id='modern-loft' title='Modern Loft' />
                </Col>
              </Row>

              <Row noGutters>
                <Col md={4}>
                  <PortfolioCard id='technical-tile-drawings' title='Technical Tile Drawings' />
                </Col>
                <Col md={4}>
                  <PortfolioCard id='rest-concepts' title='Restaurant Concepts' />
                </Col>
                <Col md={4}>
                  <PortfolioCard id='helf' title='Helf Spa' />
                </Col>
              </Row>

              <Row noGutters>
                <Col md={4}>
                  <PortfolioCard id='conceptuals-renderings' title='Conceptuals/Renderings' />
                </Col>
                <Col md={4}>
                  <PortfolioCard id='sunburst-condos' title='Sunburst Condominiums' />
                </Col>
                <Col md={4}>
                  <PortfolioCard id='moodboards' title='Moodboards' />
                </Col>
              </Row>
            </Col>
          </Row>
        </Section>
    )
  }
}
 
export default Portfolio;