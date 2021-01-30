import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, Col } from 'react-bootstrap'

import HalfCircle from '../../components/HalfCircle'
import CustomSvgIcon from '../../components/CustomSvgIcon'
import starsLady from '../../media/star-lady.svg'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { registerEmployerRequest } from '../../redux/actions/employer'
import { registerJobseekerRequest } from '../../redux/actions/jobseeker'
import { AppState } from '../../redux/types'
import FormContainer from '../../components/FormContainer'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [role, setRole] = useState({})
  const history = useHistory()
  const employer = useSelector((state: AppState) => state.employer)
  const jobseeker = useSelector((state: AppState) => state.jobseeker)
  const user = useSelector((state: AppState) => state.user)
  const { error, loading } = user

  const dispatch = useDispatch()
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    }

    if (password === confirmPassword) {
      if (role === jobseeker) {
        dispatch(registerJobseekerRequest(email, password, history))
      }
      if (role === employer) {
        dispatch(registerEmployerRequest(email, password, history))
      }
    }
  }

  const employerSelect = () => {
    setRole(employer)
  }
  const jobseekerSelect = () => {
    setRole(jobseeker)
  }
  const variant = message === 'Registered successfully' ? 'success' : 'danger'
  return (
    <div className="page">
      <FormContainer>
        <HalfCircle inputText="Welcome" />
        <h3 className="text-center my-5 purple-text">Sign up</h3>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        {!error && message && <Message variant={variant}>{message}</Message>}
        <Form onSubmit={handleSubmit} className="container">
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustomEmail">
              <Form.Control
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Email is required
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="validationCustomPassword">
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Password is required
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="validationCustomConfirmPassword">
              <Form.Control
                required
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <br />
          <div className="d-flex justify-content-around  mb-5">
            <button
              className="employerBtn btn btn-outline-success mr-5 w-50"
              onClick={employerSelect}
            >
              I am an Employer
            </button>
            <button
              className="employerBtn btn btn-outline-success w-50"
              onClick={jobseekerSelect}
            >
              I am a Jobseeker
            </button>
          </div>
          <p className="text-center">
            Already a member?
            <Link to="/login" className="purple-text pl-2">
              Sign In
            </Link>
          </p>
        </Form>
      </FormContainer>

      <CustomSvgIcon img={starsLady} />
    </div>
  )
}

export default Register
