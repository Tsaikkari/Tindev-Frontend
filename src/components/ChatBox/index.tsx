import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'

import SearchBarCont from './../SearchBarCont'
import UsersList from './UsersList'
import ChatsList from './ChatsList'
import Message from './Message'
import { AppState } from '../../redux/types'
import './ChatBox.scss'

export type ChatUser = {
  id: string
  name: string
  image: string
}

const ChatBox = () => {
  const [newMessage, setNewMessage] = useState('')
  const [currentUser, setCurrentUser] = useState({
    id: '',
    name: '',
    image: '',
  })
  const role = useSelector((state: AppState) => state.user.userInfo.role)
  const jobseekerMatch = useSelector((state: AppState) => state.jobseeker.jobseekerMatch)
  const companyMatch = [{}] // for now
  const jobseekersList = jobseekerMatch.map((jm: any) => ({
    name: jm.employer.companyName,
    image: jm.employer.image,
  }))
  const [users, setUsers] = useState<any[]>(jobseekersList)
  const [messages, setMessages] = useState<any[]>([])
  const [chat, setChat] = useState({
    id: '',
    participants: [],
    lastMessage: messages.find((m: any) => m.index === messages.length - 1),
    messages,
  })

  const chatParticipants = chat.participants
    .map((p: any) => users.find((u: any) => u.id === p))
    .filter(Boolean) as ChatUser[]

  const message: any = {
    id: chat.messages.find((m: any) => m.id === chat.lastMessage),
    content: newMessage,
    createdAt: new Date().toLocaleTimeString,
    sender: chatParticipants.find(
      (cp: any) => cp.id === currentUser.id || null
    ),
    recipient: chatParticipants.find(
      (cp: any) => cp.id !== currentUser.id || null
    ),
  }

  // TODO: add dependencies without browser freeze
  useEffect(() => {
    if (role === 'job seeker') {
      setUsers(jobseekersList)
    }
    if (role === 'employer') { 
      setUsers(companyMatch)
    }

    setCurrentUser({
      id: currentUser.id,
      name: currentUser.name,
      image: currentUser.image,
    })

    setMessages(messages.concat(message))
      
    setChat({
      ...chat,
      messages: chat.messages.concat(message),
      participants: chat.participants.concat(message.sender, message.recipient),
    })
  }, [])
  
  // TODO: add request to socket server
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <Container fluid="md">
      <Row className="no-gutters">
        <Col sm="3" xl="4" className="col-3">
          <Card className="users-container">
            <SearchBarCont />
            <UsersList users={users} />
          </Card>
        </Col>
        <Col xl="8" sm="9" className="col-9">
          <Card>
            <Card.Header className="selected-user">
              <span>
                From: <span className="chat-name">{currentUser.name}</span>
              </span>
            </Card.Header>
            <Card.Body className="chat-container chat-messages">
              <ListGroup className="chat-box border-top">
                <ChatsList />
              </ListGroup>
              <Message
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                handleSubmit={handleSubmit}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ChatBox
