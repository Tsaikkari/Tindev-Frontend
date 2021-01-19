import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Col, Row, Container, Button } from 'react-bootstrap'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'

import Message from '../Message'
import Loader from '../Loader'
import { updateEmployerRequest } from '../../redux/actions/employer'
import { getSkillsRequest } from '../../redux/actions/resources'
import { AppState } from '../../redux/types'

const CompanyProfileForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyInfo: '',
    address: '',
  })

  const dispatch = useDispatch()

  const user = useSelector((state: AppState) => state.user)
  const { loading, error } = user

  const handleClick = () => {
    dispatch(getSkillsRequest())
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setFormData((prevValue: any) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(
      updateEmployerRequest({
        companyName: formData.companyName,
        companyInfo: formData.companyInfo,
        address: formData.address,
      })
    )
  }

  return (
    <Container fluid="md">
      <Link onClick={handleClick} to="/company/jobpost/">
        + Job Post
      </Link>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Row>
        <Col xs>
          <Form onSubmit={submitHandler}>
            <Form.Group
              className="form-group-set"
              as={Row}
              controlId="formElement"
            >
              <Form.Label column sm="4">
                Company Name
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  type="text"
                  name="companyName"
                  placeholder="Company name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              className="form-group-set"
              as={Row}
              controlId="formElement"
            >
              <Form.Label column sm="4">
                Address
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              className="form-group-set"
              as={Row}
              controlId="formElement"
            >
              <Form.Label column sm="4">
                Company Info
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  as="textarea"
                  name="companyInfo"
                  value={formData.companyInfo}
                  onChange={handleChange}
                  rows={4}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="form-group-set" controlId="button">
              <Form.Label column sm="4"></Form.Label>
              <Col sm="8">
                <Button
                  type="submit"
                  className="purple-btn w-50 mt-5"
                  size="lg"
                >
                  Save
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default CompanyProfileForm
