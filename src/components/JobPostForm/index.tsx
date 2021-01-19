import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Col, Row, Container, Button } from 'react-bootstrap'
import DatePicker, { DayValue } from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'

import Message from '../Message'
import Loader from '../Loader'
import DropDown from '../DropDown'
import { creatingJobPostRequest } from '../../redux/actions/resources'
import { AppState } from '../../redux/types'

type JobPostFormProps = {
  header: string
}
const JobPostForm = ({ header }: JobPostFormProps) => {
  const [startingAt, setStartingAt] = useState<DayValue>(null)
  const [formData, setFormData] = useState({
    title: '',
    jobDescription: '',
    requiredSkills: [],
    seniority: '',
    startingDate: '',
  })

  // TODO: date format
  const year = new Date().getFullYear.toString().substr(-2)
  const range = parseInt(year)

  const maximumDate = {
    year: range + 1,
    month: 12,
    day: 31,
  }

  const user = useSelector((state: AppState) => state.user)
  const { loading, error } = user

  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setFormData((prevValue: any) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
    setStartingAt(startingAt)
  }

  // TODO: Add condition for edit job post
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(
      creatingJobPostRequest({
        title: formData.title,
        jobDescription: formData.jobDescription,
        skills: formData.requiredSkills,
        seniority: formData.seniority,
        startingDate: startingAt,
      })
    )
  }

  return (
    <Container fluid="md">
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <h2>{header}</h2>
      <Row>
        <Col xs>
          <Form onSubmit={submitHandler}>
            <Form.Group
              className="form-group-set"
              as={Row}
              controlId="formElement"
            >
              <Form.Label column sm="4">
                Job Title
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  type="text"
                  name="title"
                  placeholder="Job Title"
                  value={formData.title}
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
                Job Description
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  as="textarea"
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  rows={4}
                />
              </Col>
            </Form.Group>
            <Form.Group
              className="form-group-set"
              as={Row}
              controlId="formElement"
            >
              <Form.Label column sm="4">
                Required Skills
              </Form.Label>
              <Col sm="8">
                <DropDown />
                {/* <Form.Control
                  className="text-field"
                  type="text"
                  name="requiredSkills"
                  placeholder="Typescript"
                  value={formData.requiredSkills}
                  onChange={handleChange}
                /> */}
              </Col>
            </Form.Group>
            <Form.Group
              className="form-group-set"
              as={Row}
              controlId="formElement"
            >
              <Form.Label column sm="4">
                Seniority
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  type="text"
                  name="seniority"
                  placeholder="Seniority"
                  value={formData.seniority}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="form-group-set"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="4">
                Starting At
              </Form.Label>
              <Col sm="8">
                <DatePicker
                  value={startingAt}
                  onChange={setStartingAt}
                  inputPlaceholder="Select starting day"
                  maximumDate={maximumDate}
                  colorPrimary="#000"
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
export default JobPostForm
