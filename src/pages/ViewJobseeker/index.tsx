import React from 'react'
import Image from 'react-bootstrap/Image'
import { useHistory } from 'react-router-dom'
import CustomSkill from '../../components/CustomSkill'
import profileImg from '../../media/profile-img.svg'
import './ViewJobseeker.scss'

const ViewJobseeker = () => {
  const history = useHistory()

  return (
    <div className="profile-page page p-5">
      <Image src={profileImg} roundedCircle />

      <p className="pb-3">
        <strong className="lead">Junior developer</strong>
        <br />
        <small>Helsinki, Finland</small>
      </p>

      <span className="h5 pr-2">BSC in Nursing</span>
      <small>
        <em>University of Helsinki</em>
      </small>
      <br />
      <br />

      <span className="lead">Skills</span>
      <div className="d-flex">
        <CustomSkill skills={[]} />
      </div>
      <br />
      <br />

      <span className="lead">Work Experience</span>
      <div>
        <small className="pr-5">Integrify</small>
        <small>2 Years</small>
      </div>
      <br />

      <span className="lead">Level</span>
      <p>Junior Developer</p>
      <br />
      <button className="btn btn-outline-success  mr-4 w-25 py-2 p-0">
        Chat
      </button>
      <button
        className="btn btn-outline-primary  mr-4 w-25 py-2 p-0"
        onClick={() => history.push('/user/profile/')}
      >
        Go Back
      </button>
    </div>
  )
}
export default ViewJobseeker
