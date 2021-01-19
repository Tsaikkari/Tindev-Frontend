import React from 'react'
import { useSelector } from 'react-redux'
import { Dropdown } from 'react-bootstrap'

import CustomMenu from '../CustomMenu'
import CustomToggle from '../CustomToggle'
import { AppState } from '../../redux/types'

//const skills = [{id: '1', name: 'JavaScript'}, {id: '2', name: 'TypeScript'}, {id: '3', name: 'Nodejs'}, {id: '4', name: 'C++'}, {id: '5', name: 'Reactjs'}]

const DropDown = () => {
  const skills = useSelector((state: AppState) => state.resources.skills)

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        Skills
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        {skills &&
          skills.map(skill => {
            return (
              <Dropdown.Item eventKey={skill.id}>{skill.name}</Dropdown.Item>
            )
          })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDown
