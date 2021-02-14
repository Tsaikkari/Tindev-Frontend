import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import moment from 'moment'

import UserImage from '../UserImage'

const Outgoing = ({ messages, removeMessage, currentUser, name, image }: any) => {
  const [userName, setName] = useState(name)
  const [userImage, setImage] = useState(image)
  const [createdAt, setCreatedAt] = useState('')
  return (
    <>
      {messages && currentUser && messages.map((m: any) => {
        return (
          <div className="chat-left" key={m.id}>
            <div className="chat-avatar">
              <UserImage image={image} />
              <div className="chat-name">{name}</div>
            </div>
            <div className="chat-text">{m.content}</div>
            <div className="chat-hour">
              <span className="fa fa-check-circle">{moment(m.createdAt).format('HH:mm')}</span>
            </div>
            <Button onClick={() => removeMessage(m.id)}>x</Button>
          </div>
        )
      })}
    </>
  )
}
export default Outgoing
