import React from 'react'
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Tab, Row, Col, Nav } from 'react-bootstrap'

import Navbar from '../Navbar-logout'
import JobseekerProfileForm from '../JobseekerProfileForm'
import CompanyProfileForm from '../CompanyProfileForm'
//import TabComp from './TabComp'
import { getUserRequest } from '../../redux/actions/user'
import { getSkillsRequest } from '../../redux/actions/resources'
import { AppState } from '../../redux/types'
import './Tabs.scss'
import { matchJobseekerRequest } from '../../redux/actions/jobseeker'

import { useParams } from 'react-router-dom'
import MatchListJobseeker from '../MatchListJobseeker'
import MatchCardCompany from '../MatchCardCompany'
import JobPostList from '../../pages/JobPostList'
import ChatBox from '../ChatBox'

const Tabs = () => {
  let { topicId }: any = useParams()
  let { path, url } = useRouteMatch()
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
                <Link to={`${url}/`} onClick={handleSkills}>
                  Profile
                </Link>
              </Nav.Item>
              {role === 'job seeker' ? (
                <Nav.Item onClick={handleJobseekerMatch}>
                  <Link to={`${url}/jobseeker/match`}>Match</Link>
                </Nav.Item>
              ) : (
                <Nav.Item>
                  <Link to={`${url}/company/match`}>Match</Link>
                </Nav.Item>
              )}
              <Nav.Item>
                <Link to={`${url}/chats`}>Chat</Link>
              </Nav.Item>
              {role === 'employer' && (
                <Nav.Item onClick={handleClick}>
                  <Link to={`${url}/jobposts`}>Job Posts</Link>
                </Nav.Item>
              )}
            </Nav>
          </Col>
          <Switch>
            <Route exact path={path}>
              <Col sm={7} className="tab-content">
                {role === 'job seeker' ? (
                  <JobseekerProfileForm />
                ) : (
                  <CompanyProfileForm />
                )}
                {topicId === 'jobseeker/match' && <MatchListJobseeker />}
              </Col>
            </Route>
            <Route path={`${path}/:topicId`}>
              <>
                {topicId === 'jobseeker/match' && <MatchListJobseeker />}
                {topicId === 'company/match' && <MatchCardCompany />}
                {topicId === 'chats' && <ChatBox />}
                {topicId === 'jobposts' && <JobPostList />}
              </>
            </Route>
          </Switch>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default Tabs
