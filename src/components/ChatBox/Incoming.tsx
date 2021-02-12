import React from 'react'
import { Button } from 'react-bootstrap'
import moment from 'moment'

import UserImage from '../UserImage'

const Incoming = ({ messages, removeMessage, image, name, currentUser }: any) => {
  return (
    <>
      {!currentUser && messages && messages.map((m: any) => {
        return (
        <div className="chat-right" key={m.id}>
          <div className="chat-hour">
            <span className="fa fa-check-circle">{moment(m.createdAt).format('HH:mm')}</span>
          </div>
          <div className="chat-text">{m.content}</div>
          <div className="chat-avatar">
            <UserImage image={image} />
            <div className="chat-name">{name}</div>
          </div>
          <Button onClick={() => removeMessage(m.id)}>x</Button>
        </div>
      )
    })}
    </>
  )
}
export default Incoming
