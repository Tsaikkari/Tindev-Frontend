import React from 'react'
import { Image } from 'react-bootstrap'

const Incoming = ({ receiversMessage }: any) => {
  return (
    <>
      <li className="chat-right">
        <div className="chat-hour">
          {receiversMessage.time} <span className="fa fa-check-circle"></span>
        </div>
        <div className="chat-text">{receiversMessage.message}</div>
        <div className="chat-avatar">
          <Image
            src="https://www.bootdey.com/img/Content/avatar/avatar1.png"
            alt="avatar"
          />
          <div className="chat-name">{receiversMessage.sender}</div>
        </div>
      </li>
    </>
  )
}
export default Incoming
