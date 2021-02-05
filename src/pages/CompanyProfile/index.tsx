import React /*, { useState } */ from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Tabs from '../../components/Tabs'
import MatchCardCompany from '../../components/MatchCardCompany'
import CompanyProfileForm from '../../components/CompanyProfileForm'
import JobPostList from '../JobPostList'
import './CompanyProfile.scss'
import { AppState } from '../../redux/types'
import ChatBox from '../../components/ChatBox'

const CompanyProfile = () => {
  const match = {
    firstName: 'Dilip',
    lastName: 'Poudel',
    skills: ['javascript', 'react'],
  }
  const { isLoggedIn } = useSelector((state: AppState) => state.user)
  if (!isLoggedIn) <Redirect to="/login" />
  return (
    <>
      <div className="company-profile">
        <h2 className="company-header purple-text">Company Profile</h2>
        <Tabs
          formComponent={<CompanyProfileForm />}
          matchComponent={<MatchCardCompany match={match} />}
          jobPostListPage={<JobPostList />}
          chatBoxPage={<ChatBox />}
        />
      </div>
    </>
  )
}
export default CompanyProfile
