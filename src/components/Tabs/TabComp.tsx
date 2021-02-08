import { useParams } from 'react-router-dom'
import MatchListJobseeker from '../MatchListJobseeker'
import MatchCardCompany from '../MatchCardCompany'
import JobPostList from '../../pages/JobPostList'
import ChatBox from '../ChatBox'

const TabComp = () => {
  let { tabId }: any = useParams()
  return (
    <>
      {tabId === 'jobseeker/match' && <MatchListJobseeker />}
      {tabId === 'company/match' && <MatchCardCompany />}
      {tabId === 'chats' && <ChatBox />}
      {tabId === 'jobposts' && <JobPostList />}
    </>
  )
}

export default TabComp
