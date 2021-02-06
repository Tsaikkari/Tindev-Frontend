import React from 'react'
import { Image } from 'react-bootstrap'

const Outgoing = ({ sendersMessage }: any) => {
  return (
    <>
      <li className="chat-left">
        <div className="chat-avatar">
          <Image
            src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
            alt="avatar"
          />
          <div className="chat-name">{sendersMessage.sender}</div>
        </div>
        <div className="chat-text">{sendersMessage.message}</div>
        <div className="chat-hour">
          {sendersMessage.time} <span className="fa fa-check-circle"></span>
        </div>
      </li>
    </>
  )
}
export default Outgoing
