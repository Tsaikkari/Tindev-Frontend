import React from 'react'
import { useSelector } from 'react-redux'

import MatchCardJobseeker from '../../components/MatchCardJobseeker'
import { AppState } from '../../redux/types'

const MatchListJobseeker = () => {
  const match = useSelector((state: AppState) => state.jobseeker.jobseekerMatch)

  return (
    <div>
      {match.length > 0 ? (
        match.map((m: any) => (
          <MatchCardJobseeker
            key={m.id}
            image={m.employer.image}
            companyName={m.employer.companyName}
            companyInfo={m.employer.companyInfo}
            address={m.employer.address}
            title={m.title}
            jobDescription={m.jobDescription}
            seniority={m.seniority}
            startingDate={m.startingDate}
          />
        ))
      ) : (
        <h3>Your Match List is empty</h3>
      )}
    </div>
  )
}

export default MatchListJobseeker
