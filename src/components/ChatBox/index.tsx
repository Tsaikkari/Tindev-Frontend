import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  ListGroup,
  Button,
} from 'react-bootstrap'

import Incoming from './Incoming'
import Outgoing from './Outgoing'
import UsersListJobseeker from './UsersListJobseeker'
import UsersListCompany from './UsersListCompany'
import { AppState } from '../../redux/types'
import './ChatBox.scss'

const ChatBox = () => {
  // const role = useSelector((state: AppState) => state.user.userInfo.role)
  // const companyName = useSelector((state: AppState) => state.employer.companyName)
  // const jobseeker = useSelector((state: AppState) => state.jobseeker)
  const user = useSelector((state: AppState) => state.user)

  const [newMessage, setNewMessage] = useState('')
  // const [sender, setSender] = useState('')
  // const [receiver, setReceiver] = useState('')
  const time = new Date().toLocaleTimeString()

  // if (role === 'employer') {
  //   setSender(companyName)
  //   setReceiver(jobseeker.firstName + ' ' + jobseeker.lastName)
  // } else {
  //   setSender(jobseeker.firstName + ' ' + jobseeker.lastName)
  //   setReceiver(companyName)
  // }

  const [message, setMessage] = useState({
    // sender: sender,
    // receiver: receiver,
    message: newMessage,
    time: time,
  })

  const handleNewMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let message = e.target.value
    setNewMessage(message)
    console.log('message', message)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log('etargetvalue', e.target.value)
    console.log('time', time)
    setMessage({
      // sender: message.sender,
      // receiver: message.receiver,
      message: newMessage,
      time: time,
    })
  }

  return (
    <>
      <Container fluid="md">
        <Row className="no-gutters">
          <Col sm="3" xl="4" className="col-3">
            <Card className="users-container">
              <div className="chat-search-box">
                <Form.Group className="input-group">
                  <Form.Control className="form-control" placeholder="Search" />
                </Form.Group>
              </div>
              {user.userInfo.role === 'job seeker' ? (
                <UsersListJobseeker />
              ) : (
                <UsersListCompany />
              )}
            </Card>
          </Col>
          <Col xl="8" sm="9" className="col-9">
            <Card>
              <Card.Header className="selected-user">
                <span>
                  {/* To: <span className="chat-name">{receiver}</span> */}
                </span>
              </Card.Header>
              <Card.Body className="chat-container chat-messages">
                <ListGroup className="chat-box">
                  <Outgoing sendersMessage={message} />
                  <Incoming receiversMessage={message} />
                </ListGroup>
              </Card.Body>
              <div className="flex-grow-0 py-3 px-4 border-top">
                <Form onSubmit={(e: any) => handleSubmit(e)}>
                  <Form.Group className="input-group">
                    <Form.Control
                      type="text"
                      className="form-control"
                      name="message"
                      value={newMessage}
                      onChange={handleNewMessageChange}
                      placeholder="Write message..."
                    />
                  </Form.Group>
                </Form>
                <Button className="btn btn-primary">Send</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ChatBox
