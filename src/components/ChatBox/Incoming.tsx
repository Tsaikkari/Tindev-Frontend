import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const Incoming = () => {
  return (
    <>
      <ListGroup className="chat-right">
        <ListGroup.Item className="chat-hour">
          <span className="fa fa-check-circle"></span>
        </ListGroup.Item>
        <ListGroup.Item className="chat-text"></ListGroup.Item>
        <div className="chat-avatar">
          <Image
            src="https://www.bootdey.com/img/Content/avatar/avatar1.png"
            alt="avatar"
          />
          <ListGroup.Item className="chat-name"></ListGroup.Item>
        </div>
      </ListGroup>
    </>
  )
}
export default Incoming
