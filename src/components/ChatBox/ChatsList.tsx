import React, { useState, useEffect } from 'react'
import { ListGroup, Image } from 'react-bootstrap'
import moment from 'moment'
import { useHistory } from 'react-router-dom'

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
          <Image src={chat.image} />
          <br></br>
          {/* @ts-ignore */}
          <div className="chat-name" onClick={navigateToChat(chat)}>
            {chat.name}
          </div>
          {chat.lastMessage && (
            <>
              <div className="chat-text">{chat.lastMessage.content}</div>
              <br></br>
              <div className="chat-hour">
                {moment(chat.lastMessage.createdAt).format('HH:mm')}
              </div>
            </>
          )}
        </ListGroup.Item>
      ))}
    </>
  )
}

export default ChatsList
