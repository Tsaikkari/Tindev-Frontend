import React from 'react'
import { useSelector } from 'react-redux'

import UserImage from '../UserImage'
import { AppState } from '../../redux/types'

// possible status: className="status busy" className="status online" className="status offline" className="status away"
// possible person classes: className="person" className="person active-user"

const UsersListJobseeker = () => {
  const jobseeker = useSelector((state: AppState) => state.jobseeker)
  //const companies = useSelector((state: AppState) => state.jobseeker.jobseekerMatch)
  const user = useSelector((state: AppState) => state.user)

  return (
    <ul className="users">
      <li className="person" data-chat={user}>
        <div className="user">
          {user.userInfo.role === 'job seeker' && (
            <>
              <UserImage image={jobseeker.image} />
              <span className="status online"></span>
            </>
          )}
          {/* {companies.map((company: any) => {
            <>
            <UserImage image={company.image} />
            <span className="status online"></span>
            </>
          })} */}
        </div>
        <p className="name-time">
          {user.userInfo.role === 'job seeker' && (
            <span className="chat-name">
              {jobseeker.firstName} {jobseeker.lastName}
            </span>
          )}
          {/* {companies.map((company: any) => {
            <span className="chat-name">{company.companyName}</span>
          })} */}
        </p>
      </li>
    </ul>
  )
}

export default UsersListJobseeker
