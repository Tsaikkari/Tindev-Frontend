import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'

import CustomSvgIcon from '../../components/CustomSvgIcon'
import starsLady from '../../media/standing-lady.svg'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import FormContainer from '../../components/FormContainer'
import Role from '../../components/Role'
import CustomButton from '../../components/CustomButton'
import Footer from '../../components/Footer'
import { loginEmployerRequest } from '../../redux/actions/employer'
import { loginJobseekerRequest } from '../../redux/actions/jobseeker'
import { AppState } from '../../redux/types'
import LocalStorage from '../../local-storage'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState({})
  //const [isLoggedIn, setLoggedIn] = useState(false)

  const dispatch = useDispatch()
  const history = useHistory()

  const employer = useSelector((state: AppState) => state.employer)
  const jobseeker = useSelector((state: AppState) => state.jobseeker)
  const jobseekerError = useSelector((state: AppState) => state.jobseeker.error)
  const jobseekerLoader = useSelector(
    (state: AppState) => state.jobseeker.loading
  )
  const employerError = useSelector((state: AppState) => state.employer.error)
  const employerLoader = useSelector(
    (state: AppState) => state.employer.loading
  )

  const handleRole = (event: React.FormEvent) => {
    event.preventDefault()
    if (document.getElementById('jobseeker') === event.target) {
      setRole(jobseeker)
    }
    if (document.getElementById('employer') === event.target) {
      setRole(employer)
    }
  }

  //TODO: Fix redirect
  const submitHandler = (e: React.FormEvent) => {
    const token = LocalStorage.getToken()
    e.preventDefault()
    if (role === employer) {
      dispatch(loginEmployerRequest(email, password))
      if (token) {
        //setLoggedIn(true)
        history.push('/company/profile')
      }
    } else if (role === jobseeker) {
      dispatch(loginJobseekerRequest(email, password))
      if (token) {
        // setLoggedIn(true)
        history.push('/jobseeker/profile')
      }
    } else {
      console.log('no')
      //setLoggedIn(false)
    }
  }

  return (
    <>
      <FormContainer>
        <h2 className="signin text-center purple-text">Signin to TinDev</h2>
        {employerError && <Message variant="danger">{employerError}</Message>}
        {employerLoader && <Loader />}
        {jobseekerError && <Message variant="danger">{jobseekerError}</Message>}
        {jobseekerLoader && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label className="label">EMAIL</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label className="label">PASSWORD</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Role handleRole={handleRole} text1="Employer" text2="Jobseeker" />
          <CustomButton text="Login" className="login-button" />
        </Form>
        <Row className="forgot-password py-3">
          <Col>
            <Link className="forgot-password" to="/reset-password">
              Forgot your password?
            </Link>
          </Col>
        </Row>
        <Row className="new-user">
          <Col>
            New User?{' '}
            <Link className="register" to="/register">
              Register
            </Link>
          </Col>
        </Row>
      </FormContainer>
      <CustomSvgIcon img={starsLady} />
      <Footer />
    </>
  )
}

export default Login
