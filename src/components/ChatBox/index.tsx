import React from 'react'
import Incoming from './Incoming'
import Outgoing from './Outgoing'
import UsersList from './UsersList'
import './ChatBox.scss'
const ChatBox = () => {
  return (
    <>
      <div className="container">
        {/* <div className="content-wrapper">
          <div className="row gutters"> */}
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card m-0">
            <div className="row no-gutters">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                <div className="users-container">
                  <div className="chat-search-box">
                    <div className="input-group">
                      <input className="form-control" placeholder="Search" />
                      <div className="input-group-btn">
                        {/* <button type="button" className="btn btn-info">
                              <MdSearch />
                            </button> */}
                      </div>
                    </div>
                  </div>
                  <UsersList />
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
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
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  )
}
export default ChatBox
