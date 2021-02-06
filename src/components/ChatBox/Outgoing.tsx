import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const Outgoing = ({ sendersMessage }: any) => {
  return (
    <>
      <ListGroup.Item className="chat-left">
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
      </ListGroup.Item>
    </>
  )
}
export default Outgoing
