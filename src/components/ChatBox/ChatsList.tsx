import React, { useState, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import moment from 'moment'
import { useHistory } from 'react-router-dom'

import UserImage from '../UserImage'

// TODO: Maybe use Incoming & Outgoing here
const ChatsList = () => {
  const [chats, setChats] = useState<any[]>([])

  const history = useHistory()

  useEffect(() => {
    setChats(chats)
  }, [chats])

  const navigateToChat = (chatId: string) => {
    history.push(`chats/${chatId}`)
  }

  return (
    <>
      {chats.map(chat => (
        <ListGroup.Item key={chat.id} className="chat-left">
          <UserImage image={chat.image} />
          {/* @ts-ignore */}
          <ListGroup.Item
            className="chat-name"
            onClick={navigateToChat(chat.id)}
          >
            {chat.name}
          </ListGroup.Item>
          {chat.lastMessage && (
            <>
              <ListGroup.Item className="chat-text">
                {chat.lastMessage.content}
              </ListGroup.Item>
              <ListGroup.Item className="chat-hour">
                {moment(chat.lastMessage.createdAt).format('HH:mm')}
              </ListGroup.Item>
            </>
          )}
        </ListGroup.Item>
      ))}
    </>
  )
}

export default ChatsList
