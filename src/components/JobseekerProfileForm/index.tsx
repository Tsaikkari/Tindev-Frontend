import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import HalfCircle from '../HalfCircle'
import CustomButton from '../CustomButton'
import { updateJobseekerRequest } from '../../redux/actions/jobseeker'

const JobseekerProfileForm = () => {
  const [state, setState] = React.useState({
    id: '',
    firstName: '',
    lastName: '',
    phone: '',
    seniority: '',
    degreeName: '',
    institutionName: '',
    skills: [],
    skillLevel: '',
    duration: '',
  })

  // Handler for form inputs
  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target
    const value = (target as HTMLInputElement).value
    const name = (target as HTMLInputElement).name

    setState({
      ...state,
      [name]: value,
    })
  }

  // Destructuring from state
  const {
    firstName,
    lastName,
    phone,
    seniority,
    degreeName,
    institutionName,
    skills,
    skillLevel,
    duration,
  } = state

  const dispatch = useDispatch()

  // Handler for form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userData = {
      firstName,
      lastName,
      phone,
      seniority,
      degreeName,
      institutionName,
      skills,
      skillLevel,
      duration,
    }
    dispatch(updateJobseekerRequest(userData))
  }

  return (
    <div className="position-relative">
      <HalfCircle inputText="Education & Experiences" />
      {/* <div className="position-absolute user-img hide-sm">
        <img src={userImg} alt="userImg-svg" />
        <br />
        <CustomButton text="Upload" className="my-2 py-2" />
      </div> */}

      <Form
        onSubmit={e => handleSubmit(e)}
        onChange={e => handleChange(e)}
        className="container my-5"
      >
        <Form.Group as={Row} controlId="formHorizontalFName">
          <Col sm={6}>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First name"
            />
          </Col>

          <Col sm={6}>
            <Form.Control type="text" name="lastName" placeholder="Last name" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalphone">
          <Col sm={6}>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="Phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
            <small>Format: 123-456-7890</small>
          </Col>

          <Col sm={6}>
            <Form.Control
              type="text"
              name="seniority"
              placeholder="Seniority"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col as={Row} sm={8} className="mt-2">
            <Form.Label as="legend" column className="pl-4">
              Open to Relocate?
            </Form.Label>
            <Form.Check
              type="radio"
              label="Yes"
              name="formRadios"
              id="formRadios1"
              value="relocatable"
              className="pr-4 pt-2"
            />
            <Form.Check
              type="radio"
              label="No"
              value="notRelocatable"
              name="formRadios"
              id="formRadios2"
              className="pt-2"
            />
          </Col>
        </Form.Group>

        <Form.Label as="legend" column sm={2} className="ml-n3">
          Education
        </Form.Label>
        <Form.Row>
          <Col sm={6} className="p-2">
            <Form.Control
              type="text"
              placeholder="Name of Degree"
              name="degreeName"
            />
          </Col>
          <Col sm={6} className="p-2">
            <Form.Control
              type="text"
              placeholder="University / School"
              name="institutionName"
            />
          </Col>
        </Form.Row>

        <Form.Label as="legend" column sm={2} className="ml-n3">
          Skills
        </Form.Label>
        <Form.Row>
          <Col className="p-2">
            <Form.Control name="skills" placeholder="skills comes in here" />
          </Col>
        </Form.Row>
        <br />
        <Form.Label as="legend" column className="ml-n3">
          Work Experience
        </Form.Label>
        <br />

        <Form.Label as="legend" column>
          Level
        </Form.Label>
        <Form.Row>
          <Col className="px-2" lg={6}>
            <Form.Control name="skillLevel" placeholder="Skill level" />
          </Col>
        </Form.Row>
        <Form.Label as="legend" column>
          Experience
        </Form.Label>
        <Form.Row>
          <Col className="px-2" lg={6}>
            <Form.Control name="duration" placeholder="Duration" />
          </Col>
        </Form.Row>
        <br />
        <CustomButton text="Update" className="my-3 py-2" />
      </Form>
    </div>
  )
}

export default JobseekerProfileForm