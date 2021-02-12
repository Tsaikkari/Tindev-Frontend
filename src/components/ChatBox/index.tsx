import React, { useState, useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'

import SearchBarCont from './../SearchBarCont'
import UsersList from './UsersList'
import Outgoing from './Outgoing'
import Incoming from './Incoming'
import Message from './Message'
import { AppState } from '../../redux/types'
import './ChatBox.scss'

const usersReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_USERS':
      return action.users
    default:
      return state
  }
}

const messagesReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_MESSAGES':
      return action.messages
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          id: action.id,
          content: action.content,
          createdAt: action.createdAt,
          sender: action.sender, // TODO: currentUser
          recipient: action.recipient,
        },
      ]
    case 'REMOVE_MESSAGE':
      return state.filter((message: any) => message.id !== action.id)
    default:
      return state
  }
}

export type ChatUser = {
  id: string
  name: string
  image: string
}

const ChatBox = () => {
  const role = useSelector((state: AppState) => state.user.userInfo.role)
  const jobseekerMatch = useSelector(
    (state: AppState) => state.jobseeker.jobseekerMatch
  )
  const companyMatch = [{}] // for now
  const jobseekersList = jobseekerMatch.map((jm: any) => ({
    name: jm.employer.companyName,
    image: jm.employer.image,
  }))

  const [users, usersDispatch] = useReducer(usersReducer, [])
  const [currentUser, setCurrentUser] = useState(true)
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [content, setContent] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [sender, setSender] = useState('')
  const [recipient, setRecipient] = useState('')
  const [messages, messagesDispatch] = useReducer(messagesReducer, [])

  // TODO: list should render without having to restart
  useEffect(() => {
    if (users && role === 'job seeker') {
      usersDispatch({ type: 'ADD_USERS', users: jobseekersList })
    }
    if (users && role === 'employer') {
      usersDispatch({ type: 'ADD_USERS', users: companyMatch })
    }
  }, [])

  useEffect(() => {
    const messages = ['from socket server']
    if (messages) {
      messagesDispatch({ type: 'ADD_MESSAGES', messages })
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    messagesDispatch({
      type: 'ADD_MESSAGE',
      name,
      image,
      content,
      createdAt,
      sender,
      recipient,
      currentUser,
    })
    setName('')
    setImage('')
    setContent('')
    setCreatedAt('')
    setSender('')
    setRecipient('')
    setCurrentUser(false)
  }

  const removeMessage = (id: string) => {
    messagesDispatch({
      type: 'REMOVE_MESSAGE',
      id,
    })
  }

  return (
    <Container fluid="md">
      <Row className="no-gutters">
        <Col sm="3" xl="4" className="col-3">
          <Card className="users-container">
            <SearchBarCont />
            <UsersList users={users} messages={messages} />
          </Card>
        </Col>
        <Col xl="8" sm="9" className="col-9">
          <Card>
            <Card.Header className="selected-user">
              <span>
                From: <span className="chat-name"></span>
              </span>
            </Card.Header>
            <Card.Body className="chat-container chat-messages">
              <ListGroup className="chat-box border-top">
                <Outgoing
                  currentUser={currentUser}
                  name={name}
                  image={image}
                  messages={messages}
                  removeMessage={removeMessage}
                />
                <Incoming
                  currentUser={currentUser}
                  name={name}
                  image={image}
                  messages={messages}
                  removeMessage={removeMessage}
                />
              </ListGroup>
              <Message
                image={image}
                content={content}
                setContent={setContent}
                // newMessage={newMessage}
                // setNewMessage={setNewMessage}
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

// const [currentUser, setCurrentUser] = useState({
  //   id: '',
  //   name: '',
  //   image: '',
  // })
  //const [users, setUsers] = useState<any[]>([jobseekersList || companyMatch])

  //const [newMessage, setNewMessage] = useState('')
  // const [chat, setChat] = useState({
  //   id: '',
  //   participants: [],
  //   lastMessage: messages.find((m: any) => m.index === messages.length - 1),
  //   messages,
  // })

  // const chatParticipants = chat.participants
  //   .map((p: any) => users.find((u: any) => u.id === p))
  //   .filter(Boolean) as ChatUser[]
  
  // const chatParticipants = chat.participants
  //   .map((p: any) => users.find((u: any) => u.id === p))
  //   .filter(Boolean) as ChatUser[]

  // const message: any = {
  //   id: chat.messages.find((m: any) => m.id === chat.lastMessage),
  //   content: newMessage,
  //   createdAt: new Date().toLocaleTimeString,
  //   sender: chatParticipants.find(
  //     (cp: any) => cp.id === currentUser.id || null
  //   ),
  //   recipient: chatParticipants.find(
  //     (cp: any) => cp.id !== currentUser.id || null
  //   ),
  // }

  // if (role === 'job seeker') {
    //   setUsers(jobseekersList)
    // }
    // if (role === 'employer') {
    //   setUsers(companyMatch)
    // }

    // setCurrentUser({
    //   id: currentUser.id,
    //   name: currentUser.name,
    //   image: currentUser.image,
    // })

    // setMessages([
    //   ...messages,
    //   { message }
    // ])

    // setChat({
    //   ...chat,
    //   messages: chat.messages.concat(message),
    //   participants: chat.participants.concat(message.sender, message.recipient)
    // })