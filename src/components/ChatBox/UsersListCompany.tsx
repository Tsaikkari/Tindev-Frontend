import React from 'react'
import { useSelector } from 'react-redux'
import { ListGroup } from 'react-bootstrap'

import UserImage from '../UserImage'
import { AppState } from '../../redux/types'

// possible status: className="status busy" className="status online" className="status offline" className="status away"
// possible person classes: className="person" className="person active-user"

const UsersListCompany = () => {
  const company = useSelector((state: AppState) => state.employer)
  //const jobseekers = useSelector((state: AppState) => state.employer)
  const user = useSelector((state: AppState) => state.user)

  return (
    <ListGroup className="users">
      <ListGroup.Item className="person" data-chat={user}>
        <div className="user">
          {user.userInfo.role === 'job seeker' && (
            <>
              <UserImage image={company.image} />
              <span className="status online"></span>
            </>
          )}
          {/* {jobseekers.map((js: any) => {
            <>
            <UserImage image={js.image} />
            <span className="status online"></span>
            </>
          })} */}
        </div>
        <p className="name-time">
          {user.userInfo.role === 'job seeker' && (
            <span className="chat-name">{company.companyName}</span>
          )}
          {/* {jobseekers.map((js: any) => {
            <span className="chat-name">{js.firstName}</span>
          })} */}
        </p>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default UsersListCompany
