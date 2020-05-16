import React, { Component } from 'react';
import {Row, Col} from '../Components/Grid'
import * as Typography from '../Components/Typography'
import * as Res from '../Components/Resume'
 
class Resume extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col size='12'>
            <Typography.SectionHeader>RESUME</Typography.SectionHeader>
          </Col>
        </Row>
      
        <Res.Row> 
          <Col size='12'>
            <Row>
              <Typography.ResSectionHeader>My Skills</Typography.ResSectionHeader>
            </Row>

            <Row>
              <Res.SubCol size='md-6'>
                <Res.Block>
                  <li>
                    Autodesk AutoCAD
                  </li>
                  <li>
                    Chief Architect
                  </li>
                  <li>
                    SketchUp (Intermediate)
                  </li>
                  <li>
                    Adobe InDesign (Beginner)
                  </li>
                </Res.Block>
              </Res.SubCol>

              <Res.RightSubCol size='md-6'>
                <Res.Block>
                  <li>
                    Creative problem-solving
                  </li>
                  <li>
                    Effective communication and collaboration
                  </li>
                  <li>
                    Time management
                  </li>
                  <li>
                    Microsoft Office (Word, Excel, Powerpoint)
                  </li>
                </Res.Block>
              </Res.RightSubCol>
            </Row>
          </Col>
        </Res.Row>

        <Res.Row>
          <Col size='12'>
            <Row>
              <Typography.ResSectionHeader>My Education</Typography.ResSectionHeader>
            </Row>
            <Row>
              <Res.SubCol size='12'>
                <Res.Block id='resume-education-block'>
                  <Row>
                    <Res.SubCol size='md-9'> 
                      <Row>
                        <h4>
                          Northern Arizona University | Flagstaff, AZ 
                        </h4>
                      </Row>
                      <Row>
                        <h5>
                          Bachelor of Science in Interior Design, CIDA
                        </h5>
                      </Row>
                    </Res.SubCol>
                    <Res.SubCol size='md-3'>
                      <h6>
                        Aug 2014 – May 2018
                      </h6>
                    </Res.SubCol>
                  </Row>

                  <Row>
                    <p>
                      <strong>GPA:</strong> 3.6 (cumulative)
                    </p>
                  </Row>

                  <Row>
                    <Res.SubCol size='md-6'>
                      <p>
                        <strong>Honors:</strong>
                      </p>
                      <li>
                        Dean's List
                      </li>
                      <li>
                        NAU Merit Tuition Scholarship
                      </li>
                    </Res.SubCol>
                    <Res.SubCol size='md-6'>
                      <p>
                        <strong>Activities:</strong> 
                      </p>
                      <li>
                        Participated in fundraising activities to benefit Girls on the Run charity. 
                      </li>
                      <li>
                        Team Member on NAU funded sustainability project, “Project Shelter”
                      </li>
                    </Res.SubCol>
                  </Row>
                </Res.Block>
              </Res.SubCol>
            </Row>
          </Col>  
        </Res.Row>

        <Res.Row>
          <Col size='12'>
            <Row>
              <Typography.ResSectionHeader>My Experience</Typography.ResSectionHeader>
            </Row>

            <Res.SubRow>
              <Res.SubCol size='md-6'>
                <Res.Block id='ashley-p-block'>
                  <Row>
                    <h4>
                      Ashley P. Design | Scottsdale, AZ
                    </h4>
                  </Row>
                  <Row>
                    <Res.SubCol size='md-7'>
                      <h5>
                        Interior Designer
                      </h5>
                    </Res.SubCol>
                    <Res.SubCol size='md-5'>
                      <h6>
                        Aug 2018 - Mar 2020
                      </h6>
                    </Res.SubCol>
                  </Row>
                  <Row>
                    <li>
                      Responsible for designing detailed client tile elevations, floor plans, and furniture plans
                    </li>
                    <li>
                      Project management, running client meetings, and assisting on site visits/installations
                    </li>
                    <li>
                      Maintaining vendor relationships, assisting with fabric/furniture selections, and social
                      media management
                    </li>
                  </Row>
                  <Row>
                    <Res.SubCol size='md-7'>
                      <h5>
                        Design Assistant
                      </h5>
                    </Res.SubCol>

                    <Res.SubCol size='md-5'>
                      <h6>
                        Jun 2018 - Aug 2020
                      </h6>
                    </Res.SubCol>
                  </Row>
                  <Row>
                    <li>
                      Organize client books and material boards
                    </li>
                    <li>
                      Assist designers with AutoCAD drawings and material selections
                    </li>
                    <li>
                      Assist designers with client meetings and site visits
                    </li>
                  </Row>
                  <Row>
                    <Res.SubCol size='md-7'>
                      <h5>
                        Design Intern
                      </h5>
                    </Res.SubCol>
                    <Res.SubCol size='md-5'>
                      <h6>
                        Feb 2018 - Jun 2018
                      </h6>
                    </Res.SubCol>
                  </Row>
                  <Row>
                    <li>
                      Assist designers with AutoCAD drawings
                    </li>
                    <li>
                      Interface with designers at Scottsdale Design Center
                    </li>
                    <li>
                      Support design team on large install project in Flagstaff
                    </li>
                  </Row>
                </Res.Block>
              </Res.SubCol>

              <Res.RightSubCol size='md-6'>
                <Res.Block id='flooring-specialist-block'>
                  <Row>
                    <h4>
                      The Home Depot | Flagstaff, AZ
                    </h4>
                  </Row>
                  <Row>
                    <Res.SubCol size='md-7'>
                      <h5>
                        Flooring Specialist
                      </h5>
                    </Res.SubCol>
                    <Res.SubCol size='md-5'>
                      <h6>
                        Feb 2018 – Jun 2018
                      </h6>
                    </Res.SubCol>
                  </Row>
                  <Row>
                    <li>
                      Drive sales by meeting weekly sales goals in a fast pace environment
                    </li>
                    <li>
                      Extensive product knowledge to assist c ustomers with selections
                    </li>
                    <li>
                      Process customer orders including credit card transactions and set up appointments
                    </li>
                  </Row>
                </Res.Block>

                <Res.Block id='file-admin-block'>
                  <Row>
                    <h4>
                      Aiken Schenk Hawkins & Ricciardi P.C. | Phoenix, AZ
                    </h4>
                  </Row>
                  <Row>
                    <Res.SubCol size='md-7'>
                      <h5>
                        File Administrator
                      </h5>
                    </Res.SubCol>
                    <Res.SubCol size='md-5'>
                      <h6>
                        Dec 2014 – Jan 2015
                      </h6>
                    </Res.SubCol>
                  </Row>
                  <Row>
                    <li>
                      Assisted on project at law firm to identify and reconcile variances between physical
                      and electronic files per assigned time deadlines
                    </li>
                  </Row>
                </Res.Block>
              </Res.RightSubCol>
            </Res.SubRow>
          </Col>
        </Res.Row>

        <Res.Row>
          <Col size='12' id='right-align-btn-col'>
            <a href='../Assets/documents/McKenna Craig 2020 Resume.pdf' download='McKenna Craign Resume' target='_blank' className='btn button transition'>DOWNLOAD</a>
          </Col>
        </Res.Row>
      </div>
    )
  }
}
 
export default Resume;