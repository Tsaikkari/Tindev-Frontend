import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown } from 'react-bootstrap'

import CustomMenu from '../CustomMenu'
import CustomToggle from '../CustomToggle'
import { getSkillsRequest } from '../../redux/actions/resources'
import { AppState } from '../../redux/types'

//const skills = [{id: '1', name: 'JavaScript'}, {id: '2', name: 'TypeScript'}, {id: '3', name: 'Nodejs'}, {id: '4', name: 'C++'}, {id: '5', name: 'Reactjs'}]

const DropDown = () => {
  const skills = useSelector((state: AppState) => state.resources.skills)

  const dispatch = useDispatch()

  const handleClick = () => {
    console.log('skillslist', skills)
    dispatch(getSkillsRequest())
  }
  return (
    <Dropdown>
      <Dropdown.Toggle
        as={CustomToggle}
        onClick={handleClick}
        id="dropdown-custom-components"
      >
        Skills
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        {skills.map(skill => {
          return <Dropdown.Item eventKey={skill.id}>{skill.name}</Dropdown.Item>
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDown
