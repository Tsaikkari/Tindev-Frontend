import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Col, Row, Container, Button } from 'react-bootstrap'
import { WithContext as ReactTags } from 'react-tag-input'
import DatePicker, { DayValue } from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'

import Message from '../Message'
import Loader from '../Loader'
import {
  creatingJobPostRequest,
  getSkillsRequest,
} from '../../redux/actions/resources'
import { AppState } from '../../redux/types'
import './JobPostForm.scss'

const KeyCodes = {
  comma: 188,
  enter: 13,
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

type JobPostFormProps = {
  header: string
}

const JobPostForm = ({ header }: JobPostFormProps) => {
  const [tags, setTags] = useState<any[]>([])
  const [startingAt, setStartingAt] = useState<DayValue>(null)
  const [formData, setFormData] = useState({
    title: '',
    jobDescription: '',
    requiredSkills: [],
    seniority: '',
    startingDate: startingAt,
  })

  const formatInputValue = () => {
    if (!startingAt) return ''
    return `${startingAt.day}.${startingAt.month}.${startingAt.year}`
  }

  const skills = useSelector((state: AppState) => state.resources.skills)
  const suggestions = skills.map(skill => {
    return {
      id: String(skill.id),
      text: skill.name,
    }
  })

  const user = useSelector((state: AppState) => state.user.userInfo)
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
  }

  // TODO: Add condition for edit job post
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const postSkills = tags.map(tag => {
      return {
        id: parseInt(tag.id),
      }
    })
    dispatch(
      creatingJobPostRequest({
        title: formData.title,
        jobDescription: formData.jobDescription,
        skills: postSkills,
        seniority: formData.seniority,
        startingDate: formatInputValue(),
      })
    )
    setFormData({
      title: '',
      jobDescription: '',
      requiredSkills: [],
      seniority: '',
      startingDate: null,
    })
    // skills ready for next jobpost
    dispatch(getSkillsRequest())
  }

  const handleDelete = (i: any) => {
    const filteredTags = tags.filter((tag, index) => index !== i)
    setTags(filteredTags)
  }

  const handleAddition = (tag: any) => {
    setTags([...tags, tag])
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
              controlId="formElementJobTitle"
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
              controlId="formElementJobDescription"
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
              controlId="formElementRequiredSkills"
            >
              <Form.Label column sm="4">
                Required Skills
              </Form.Label>
              <Col sm="8">
                {skills && (
                  <ReactTags
                    tags={tags}
                    suggestions={suggestions}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    delimiters={delimiters}
                  />
                )}
              </Col>
            </Form.Group>
            <Form.Group
              className="form-group-set"
              as={Row}
              controlId="formElementSeniority"
            >
              <Form.Label column sm="4">
                Seniority
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  type="text"
                  name="seniority"
                  placeholder="Junior/Middle/Senior"
                  value={formData.seniority}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="form-group-set"
              controlId="formElementStartingAt"
            >
              <Form.Label column sm="4">
                Starting At
              </Form.Label>
              <Col sm="8">
                <DatePicker
                  value={startingAt}
                  onChange={setStartingAt}
                  inputPlaceholder="Select starting day"
                  colorPrimary="#000"
                  inputClassName="my-custom-input"
                  formatInputText={formatInputValue}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="form-group-set"
              controlId="savButton"
            >
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
