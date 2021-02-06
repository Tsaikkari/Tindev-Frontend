import React /*, { useState }*/ from 'react'
import { useSelector } from 'react-redux'

import Incoming from './Incoming'
import Outgoing from './Outgoing'
import UsersListJobseeker from './UsersListJobseeker'
import UsersListCompany from './UsersListCompany'
import { AppState } from '../../redux/types'
import './ChatBox.scss'

const ChatBox = () => {
  //const [newMessage, setNewMessage] = useState('')

  const user = useSelector((state: AppState) => state.user)

  const sendersMessage = {
    sender: 'Kirsi',
    receiver: 'Dilippo',
    message: 'Hi Dilippo. We may have a job for you.',
    time: '08:55',
  }
  const receiversMessage = {
    sender: 'Dilippo',
    reveicer: 'Kirsi',
    message: "Hi Kirsi. I'm interested.",
    time: '08:56',
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
                To: <span className="chat-name">{sendersMessage.receiver}</span>
              </span>
            </div>
            <div className="chat-container chat-messages">
              <ul className="chat-box">
                <Outgoing sendersMessage={sendersMessage} />
                <Incoming receiversMessage={receiversMessage} />
              </ul>
            </div>
            <div className="flex-grow-0 py-3 px-4 border-top">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  // value={newMessage}
                  // onChange={e => handleNewMessageChange(e)}
                  placeholder="Write message..."
                />
                <button
                  // onClick={handleSendMessage}
                  className="btn btn-primary"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ChatBox
