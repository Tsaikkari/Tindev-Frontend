import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Row, Col } from 'react-bootstrap'
import { WithContext as ReactTags } from 'react-tag-input'
import DatePicker, { DayValue } from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

import { updateJobseekerRequest } from '../../redux/actions/jobseeker'
import HalfCircle from '../../components/HalfCircle'
import CustomButton from '../../components/CustomButton'
import { AppState } from '../../redux/types'
import UploadImage from '../../components/UploadImage'
import './JobseekerProfileForm.scss'

const KeyCodes = {
  comma: 188,
  enter: 13,
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

const styles = {
  degree: {
    paddingRight: '1rem',
  },
  university: {
    paddingLeft: '1rem',
  },
}

const JobseekerProfileForm = () => {
  const user = useSelector((state: AppState) => state.user.userInfo)
  const [tags, setTags] = useState<any[]>([])
  const [startingAt, setStartingAt] = useState<DayValue>()
  const [isOpenRelocate, setOpenRelocate] = useState(user.relocate)
  const [workingExperience, setWorkingExperience] = useState(0)
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    contact: undefined,
    seniority: '',
    degree: '',
    institute: '',
    skills: [],
    workExperience: workingExperience,
    relocate: isOpenRelocate,
    startingDate: startingAt,
  })

  // Date picker
  const formatInputValue = () => {
    if (!startingAt) return ''
    return `${startingAt.day}.${startingAt.month}.${startingAt.year}`
  }

  // Skill tags
  const skills = useSelector((state: AppState) => state.resources.skills)
  const suggestions = skills.map(skill => {
    return {
      id: String(skill.id),
      text: skill.name,
    }
  })

  const handleInputChange = () => {
    return setTags(tags)
  }

  // TODO: workExperience, relocate, contact
  // Handler for form inputs.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setState({
      ...state,
      [name]: value,
    })
  }

  // Work experience
  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setWorkingExperience(Number(value))
  }

  const dispatch = useDispatch()

  // Handler for form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const skills = tags.map(tag => {
      return {
        id: parseInt(tag.id),
      }
    })
    dispatch(
      updateJobseekerRequest({
        //@ts-ignore
        firstName: state.firstName,
        lastName: state.lastName,
        contact: state.contact,
        seniority: state.seniority,
        degree: state.degree,
        institute: state.institute,
        skills: skills,
        workExperience: state.workExperience,
        startingDate: formatInputValue(),
        relocate: isOpenRelocate,
      })
    )
    console.log('workingExperience', workingExperience)
    console.log('isOpenRelocate', isOpenRelocate)
  }

  // Tag functions
  const handleDelete = (i: any) => {
    const filteredTags = tags.filter((tag, index) => index !== i)
    setTags(filteredTags)
  }

  const handleAddition = (tag: any) => {
    setTags([...tags, tag])
  }

  return (
    <div className="position-relative">
      <div>
        <HalfCircle inputText="Education & Experiences" />
      </div>
      <UploadImage />
      <Form onSubmit={e => handleSubmit(e)} className="container my-5">
        <Form.Group as={Row} controlId="formHorizontalName">
          <Col sm={6}>
            <Form.Control
              //required
              type="text"
              name="firstName"
              placeholder="First name"
              value={state.firstName}
              onChange={handleChange}
            />
          </Col>

          <Col sm={6}>
            <Form.Control
              //required
              type="text"
              name="lastName"
              placeholder="Last name"
              value={state.lastName}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        {/* TODO */}
        <Form.Group as={Row} controlId="formHorizontalInfo">
          <Col sm={6}>
            <Form.Control
              //required
              type="number"
              name="contact"
              placeholder="Phone Nr."
              value={state.contact}
              onChange={handleChange}
            />
          </Col>

          <Col sm={6}>
            <Form.Control
              //required
              type="text"
              name="seniority"
              placeholder="Seniority"
              value={state.seniority}
              onChange={handleChange}
            />
            <small>Junior/Middle/Senior</small>
          </Col>
        </Form.Group>

        <Form.Label as="legend" column sm={2} className="ml-n3">
          Education
        </Form.Label>
        <Form.Row>
          <Col sm={6} style={styles.degree} className="degree">
            <Form.Control
              //required
              type="text"
              placeholder="Degree"
              name="degree"
              value={state.degree}
              onChange={handleChange}
            />
            <small>Name of Degree</small>
          </Col>
          <Col sm={6} style={styles.university} className="university">
            <Form.Control
              //required
              type="text"
              placeholder="Institute"
              name="institute"
              value={state.institute}
              onChange={handleChange}
            />
            <small>University / School</small>
          </Col>
        </Form.Row>

        <Form.Row>
          <Form.Label as="legend" column sm="3" className="my-3">
            Skills
          </Form.Label>
          <Col sm="9" className="my-3">
            {skills && (
              <ReactTags
                tags={tags}
                suggestions={suggestions}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                delimiters={delimiters}
                handleInputChange={handleInputChange}
              />
            )}
          </Col>
        </Form.Row>

        {/* TODO */}
        <Form.Row>
          <Form.Label as="legend" column className="my-1">
            Work Experience in Years
          </Form.Label>
          <Col className="my-1 pl-2" lg={9}>
            <Form.Control
              //required
              type="range"
              min="0"
              max="30"
              className="slider"
              id="range"
              name="workingExperience"
              value={workingExperience}
              onChange={handleRange}
            />
            <p>{workingExperience}</p>
          </Col>
        </Form.Row>

        {/* TODO */}
        <Form.Row>
          <Form.Label as="legend" column sm="3" className="mt-3 mb-1">
            Open to Relocate?
          </Form.Label>
          <Col sm={7} className="pl-2 mt-3 mb-1">
            <BootstrapSwitchButton
              checked={isOpenRelocate}
              onlabel="Yes"
              offlabel="No"
              onChange={(checked: boolean) => {
                setOpenRelocate(checked)
              }}
            />
          </Col>
        </Form.Row>
        <Form.Group
          as={Row}
          className="form-group-set"
          controlId="formElementStartingAt"
        >
          <Form.Label column sm="3">
            Starting At
          </Form.Label>
          <Col sm="9" className="date-picker">
            <DatePicker
              value={startingAt}
              onChange={setStartingAt}
              inputPlaceholder="Select earliest starting day"
              colorPrimary="#000"
              inputClassName="my-custom-input"
              formatInputText={formatInputValue}
            />
          </Col>
        </Form.Group>
        <CustomButton text="Update" className="w-25 my-3 py-2 purple-bg" />
      </Form>
    </div>
  )
}

export default JobseekerProfileForm
