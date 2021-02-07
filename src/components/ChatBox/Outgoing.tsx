import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const Outgoing = () => {
  return (
    <>
      <ListGroup className="chat-left">
        <div className="chat-avatar">
          <Image
            src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
            alt="avatar"
          />
          <ListGroup.Item className="chat-name"></ListGroup.Item>
        </div>
        <ListGroup.Item className="chat-text"></ListGroup.Item>
        <ListGroup.Item className="chat-hour">
          <span className="fa fa-check-circle"></span>
        </ListGroup.Item>
      </ListGroup>
    </>
  )
}
export default Outgoing
