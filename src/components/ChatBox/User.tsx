import React, { useReducer, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'

import UserImage from '../UserImage'

const chatsRecuder = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_CHATS':
      return action.chats 
    case 'ADD_CHAT': 
      return [
        ...state,
        {
          id: action.id,
          participants: action.participants, // TODO
          //lastMessage: action.lastMessage,
          messages: action.messages,
        }
      ]
    default:
      return state
  }
}

const User = ({ name, image }: any) => {
  const [chats, chatsDispatch] = useReducer(chatsRecuder, [])

  useEffect(() => {
    const chats = ['from socket server']
    if (chats) {
      chatsDispatch({ type: 'ADD_CHATS', chats })
    }
  }, [chats])

  useEffect(() => {
    // onClick -> messages
  })

  return (
    <>
    <ListGroup.Item className="person" data-chat="person1">
      <div className="user">
        <UserImage image={image} />
        <span className="status busy"></span>
        <>
        {chats.map((chat: any) => (
        <p className="name-time">
          {/* TODO: onClick */}
          <span className="chat-name">{name}</span>
          <span className="time">{chat.createdAt}</span>
        </p>
        ))}
        </>
      </div>
    </ListGroup.Item>
    </>
  )
}

export default User
