import React from 'react'
import { Redirect } from 'react-router-dom'

import Tabs from '../../components/Tabs'
import JobseekerProfileForm from '../../components/JobseekerProfileForm'
import MatchListJobseeker from '../../components/MatchListJobseeker'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/types'
import ChatBox from '../../components/ChatBox'

const JobseekerProfile = () => {
  const { isLoggedIn } = useSelector((state: AppState) => state.user)
  if (!isLoggedIn) <Redirect to="/login" />
  return (
    <>
      <div className="page">
        <Tabs
          formComponent={<JobseekerProfileForm />}
          chatBoxPage={<ChatBox />}
          matchComponent={<MatchListJobseeker />}
        />
      </div>
    </>
  )
}

export default JobseekerProfile
