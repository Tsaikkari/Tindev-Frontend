import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

import Candidate from '../Candidate'

const MatchCardCompany = () => {
  const match = {
    firstName: 'Dilip',
    lastName: 'Poudel',
    skills: ['javascript', 'react'],
  }
  return (
    <div className="Container">
      <div className="d-flex flex-row-reverse"></div>
      <div className="Row mb-2">
        <div className="Col-md-12">
          {/* <a href="#" className="text-dark"> */}
          <div className="card border border-dark mt-2">
            <div className="card-body">
              <div className="row align-items-center">
                {/* <div className="col-xs-1 col-sm-2 col-md-1 mr-3">
                    <Image src={male} />
                    <br></br>
                  </div> */}
                <div className="col-xs-8 col-sm-7 col-md-8">
                  <Candidate
                    key={match.lastName}
                    firstName={match.firstName}
                    lastName={match.lastName}
                    skills={match.skills}
                  />

                  {/* <Button  className="float-right" variant="primary" >Primary</Button>
                    <Button variant="primary">Primary</Button> */}
                </div>
                <Col>
                  {/*TODO: path needs to be dynamic */}
                  <Link className="float-right" to="/match/view/applicant/:id">
                    View
                  </Link>
                </Col>
                <Col>
                  <Link to="/chat">Chat</Link>
                </Col>

                {/* <Button className="card-button">View Profile</Button>
                <Button className="card-button">Chat</Button> */}
              </div>
            </div>
          </div>
          {/* </a> */}
        </div>
      </div>
    </div>
  )
}
export default MatchCardCompany
