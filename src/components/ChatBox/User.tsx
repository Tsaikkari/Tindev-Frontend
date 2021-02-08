import React from 'react'
import { ListGroup, Image } from 'react-bootstrap'

const User = ({ name, createdAt }: any) => {
  return (
    <ListGroup.Item className="person" data-chat="person1">
      <div className="user">
        <Image
          src="https://www.bootdey.com/img/Content/avatar/avatar1.png"
          alt="avatar"
        />
        <span className="status busy"></span>
        <p className="name-time">
          <span className="chat-name">Dilip Poudel{name}</span>
          <span className="time">8/2/21{createdAt}</span>
        </p>
      </div>
    </ListGroup.Item>
  )
}

export default User
