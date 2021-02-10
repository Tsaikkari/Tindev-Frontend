import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tab, Row, Col, Nav } from 'react-bootstrap'

import Navbar from '../Navbar-logout'
import { getUserRequest } from '../../redux/actions/user'
import { getSkillsRequest } from '../../redux/actions/resources'
import { AppState } from '../../redux/types'
import './Tabs.scss'
import { matchJobseekerRequest } from '../../redux/actions/jobseeker'

const Tabs = ({
  formComponent,
  matchComponent,
  jobPostListPage,
  chatBoxPage,
}: any) => {
  const role = useSelector((state: AppState) => state.user.userInfo.role)
  
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(getUserRequest())
  }

  const handleSkills = () => {
    dispatch(getSkillsRequest())
  }

  const handleJobseekerMatch = () => {
    dispatch(matchJobseekerRequest())
  }

  const handleChat = () => {
    dispatch(matchJobseekerRequest())
    
  }

  return (
    <div>
      <Navbar />
      <Tab.Container defaultActiveKey="first">
        <Row>
          <Col className="tabs" sm={3}>
            <Nav
              className="flex-column nav-bar"
              variant="pills"
              defaultActiveKey="first"
              justify={true}
            >
              <Nav.Item>
                <Nav.Link onClick={handleSkills} eventKey="first">
                  Profile
                </Nav.Link>
              </Nav.Item>
              {role === 'job seeker' ? (
                <Nav.Item onClick={handleJobseekerMatch}>
                  <Nav.Link eventKey="second">Match</Nav.Link>
                </Nav.Item>
              ) : (
                <Nav.Item>
                  <Nav.Link eventKey="second">Match</Nav.Link>
                </Nav.Item>
              )}
              <Nav.Item onClick={handleChat}>
                <Nav.Link eventKey="third">Chat</Nav.Link>
              </Nav.Item>
              {role === 'employer' && (
                <Nav.Item onClick={handleClick}>
                  <Nav.Link eventKey="fourth">Job Posts</Nav.Link>
                </Nav.Item>
              )}
            </Nav>
          </Col>
          <Col sm={7} className="tab-content">
            <Tab.Content>
              <Tab.Pane eventKey="first">{formComponent}</Tab.Pane>
              <Tab.Pane eventKey="second">{matchComponent}</Tab.Pane>
              <Tab.Pane eventKey="third">{chatBoxPage}</Tab.Pane>
              <Tab.Pane eventKey="fourth">{jobPostListPage}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default Tabs
