import React, { useState } from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'

import SearchBarCont from './../SearchBarCont'
import MessagesList from './MessagesList'
import ChatsList from './ChatsList'
import Message from './Message'
import './ChatBox.scss'

const ChatBox = () => {
  const [messages, setMessages] = useState<any[]>([])
  const [chat, setChat] = useState({
    id: '',
    name: '',
    image: '',
    lastMessage: messages.find((m: any) => m.index === messages.length - 1),
    messages,
  })

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const message = {
      id: chat.messages.length - 1,
      content: chat.lastMessage.content,
      createdAt: new Date().toLocaleTimeString,
    }

    setChat({
      ...chat,
      messages: chat.messages.concat(message),
    })

    setMessages(chat.messages.concat(message))
  }

  return (
    <Container fluid="md">
      <Row className="no-gutters">
        <Col sm="3" xl="4" className="col-3">
          <Card className="users-container">
            <SearchBarCont />
            {chat.messages && <MessagesList messages={chat.messages} />}
          </Card>
        </Col>
        <Col xl="8" sm="9" className="col-9">
          <Card>
            <Card.Header className="selected-user">
              <span>
                To: <span className="chat-name">{chat.name}</span>
              </span>
            </Card.Header>
            <Card.Body className="chat-container chat-messages">
              <ListGroup className="chat-box">
                <ChatsList />
              </ListGroup>
              <Message handleSubmit={handleSubmit} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ChatBox
