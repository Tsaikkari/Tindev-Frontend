import React from 'react'
import { ListGroup } from 'react-bootstrap'

import { Image } from 'react-bootstrap'

type UsersListProps = {
  name: string
  createdAt: string
}

const UsersList = ({ name, createdAt }: UsersListProps) => {
  return (
    <ListGroup className="users">
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
    </ListGroup>
  )
}

export default UsersList
