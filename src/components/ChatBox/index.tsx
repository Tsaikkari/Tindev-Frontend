import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Incoming from './Incoming'
import Outgoing from './Outgoing'
import UsersListJobseeker from './UsersListJobseeker'
import UsersListCompany from './UsersListCompany'
import { AppState } from '../../redux/types'
import './ChatBox.scss'

const ChatBox = () => {
  // const role = useSelector((state: AppState) => state.user.userInfo.role)
  // const companyName = useSelector((state: AppState) => state.employer.companyName)
  // const jobseeker = useSelector((state: AppState) => state.jobseeker)
  const user = useSelector((state: AppState) => state.user)

  const [newMessage, setNewMessage] = useState('')
  // const [sender, setSender] = useState('')
  // const [receiver, setReceiver] = useState('')
  const time = new Date().toLocaleTimeString()

  // if (role === 'employer') {
  //   setSender(companyName)
  //   setReceiver(jobseeker.firstName + ' ' + jobseeker.lastName)
  // } else {
  //   setSender(jobseeker.firstName + ' ' + jobseeker.lastName)
  //   setReceiver(companyName)
  // }

  const [message, setMessage] = useState({
    // sender: sender,
    // receiver: receiver,
    message: newMessage,
    time: time,
  })

  const handleNewMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let message = e.target.value
    setNewMessage(message)
    console.log('message', message)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log('etargetvalue', e.target.value)
    console.log('time', time)
    setMessage({
      // sender: message.sender,
      // receiver: message.receiver,
      message: newMessage,
      time: time,
    })
  }

  return (
    <>
      <div className="container">
        <div className="row no-gutters">
          <div className="col-xl-4 col-sm-3 col-3">
            <div className="users-container">
              <div className="chat-search-box">
                <div className="input-group">
                  <input className="form-control" placeholder="Search" />
                  <div className="input-group-btn"></div>
                </div>
              </div>
              {user.userInfo.role === 'job seeker' ? (
                <UsersListJobseeker />
              ) : (
                <UsersListCompany />
              )}
            </div>
          </div>
          <div className="col-xl-8 col-sm-9 col-9">
            <div className="selected-user">
              <span>
                {/* To: <span className="chat-name">{receiver}</span> */}
              </span>
            </div>
            <div className="chat-container chat-messages">
              <ul className="chat-box">
                <Outgoing sendersMessage={message} />
                <Incoming receiversMessage={message} />
              </ul>
            </div>
            <div className="flex-grow-0 py-3 px-4 border-top">
              <form onSubmit={(e: any) => handleSubmit(e)}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="message"
                    value={newMessage}
                    onChange={handleNewMessageChange}
                    placeholder="Write message..."
                  />
                </div>
              </form>
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatBox
