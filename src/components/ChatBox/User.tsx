import React from 'react'
import { ListGroup } from 'react-bootstrap'

import UserImage from '../UserImage'

const User = ({ name, createdAt, image }: any) => {
  return (
    <ListGroup.Item className="person" data-chat="person1">
      <div className="user">
        <UserImage image={image} />
        <span className="status busy"></span>
        <p className="name-time">
          <span className="chat-name">{name}</span>
          <span className="time">{createdAt}</span>
        </p>
      </div>
    </ListGroup.Item>
  )
}

export default User
