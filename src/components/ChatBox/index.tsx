import React from 'react'
import Incoming from './Incoming'
import Outgoing from './Outgoing'
import UsersList from './UsersList'
import './ChatBox.scss'

const ChatBox = () => {
  return (
    <div className="container">
      <div className="row no-gutters">
        <div className="col-xl-4 col-sm-3 ">
          <div className="users-container">
            <div className="chat-search-box">
              <div className="input-group">
                <input className="form-control" placeholder="Search" />
              </div>
            </div>
            <UsersList />
          </div>
        </div>
        <div className="col-lg-8 col-sm-9">
          <div className="selected-user">
            <span>
              To: <span className="name">Dlip</span>
            </span>
          </div>
          <div className="chat-container chat-messages">
            <ul className="chat-box chatContainerScroll">
              <Incoming />
              <Outgoing />
            </ul>
          </div>
          <div className="py-3 px-4 border-top">
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
  )
}
export default ChatBox
