import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const Outgoing = () => {
  return (
    <>
      <ListGroup.Item className="chat-left">
        <div className="chat-avatar">
          <Image
            src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
            alt="avatar"
          />
          <div className="chat-name"></div>
        </div>
        <div className="chat-text"></div>
        <div className="chat-hour">
          <span className="fa fa-check-circle"></span>
        </div>
      </ListGroup.Item>
    </>
  )
}
export default Outgoing
