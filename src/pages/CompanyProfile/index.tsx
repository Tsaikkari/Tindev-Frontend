import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Tabs from '../../components/Tabs'
import './CompanyProfile.scss'
import { AppState } from '../../redux/types'

const CompanyProfile = () => {
  const { isLoggedIn } = useSelector((state: AppState) => state.user)
  if (!isLoggedIn) <Redirect to="/login" />
  return (
    <>
      <div className="company-profile">
        <h2 className="company-header purple-text">Company Profile</h2>
        <Tabs />
      </div>
    </>
  )
}
export default CompanyProfile
