import React from 'react'
import { Redirect } from 'react-router-dom'

import Tabs from '../../components/Tabs'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/types'

const JobseekerProfile = () => {
  const { isLoggedIn } = useSelector((state: AppState) => state.user)
  if (!isLoggedIn) <Redirect to="/login" />
  return (
    <>
      <div className="page">
        <Tabs />
      </div>
    </>
  )
}

export default JobseekerProfile
