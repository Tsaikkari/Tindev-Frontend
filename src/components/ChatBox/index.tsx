import React /*, { useState }*/ from 'react'
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
  //const [newMessage, setNewMessage] = useState('')

  const user = useSelector((state: AppState) => state.user)

  const sendersMessage = {
    sender: 'Kirsi',
    receiver: 'Dilippo',
    message: 'Hi Dilippo. We may have a job for you.',
    time: '08:55',
  }
  const receiversMessage = {
    sender: 'Dilippo',
    reveicer: 'Kirsi',
    message: "Hi Kirsi. I'm interested.",
    time: '08:56',
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
                  To:{' '}
                  <span className="chat-name">{sendersMessage.receiver}</span>
                </span>
              </Card.Header>
              <Card.Body className="chat-container chat-messages">
                <ListGroup className="chat-box">
                  <Outgoing sendersMessage={sendersMessage} />
                  <Incoming receiversMessage={receiversMessage} />
                </ListGroup>
              </Card.Body>
              <div className="flex-grow-0 py-3 px-4 border-top">
                <Form.Group className="input-group" controlId="message">
                  <Form.Control
                    type="text"
                    className="form-control chat-input"
                    // value={newMessage}
                    // onChange={e => handleNewMessageChange(e)}
                    placeholder="Write message..."
                  />
                  <Button
                    // onClick={handleSendMessage}
                    className="btn btn-primary chat-button"
                  >
                    Send
                  </Button>
                </Form.Group>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default ChatBox
