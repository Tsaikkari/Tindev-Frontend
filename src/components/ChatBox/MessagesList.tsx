import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import moment from 'moment'

const MessagesList = ({ messages }: any) => {
  return (
    <>
      <Container>
        {messages.map((m: any) => {
          return (
            <ListGroup key={m.id}>
              <ListGroup.Item>{m.content}</ListGroup.Item>
              <ListGroup.Item>
                {moment(m.createdAt).format('HH:mm')}
              </ListGroup.Item>
            </ListGroup>
          )
        })}
      </Container>
    </>
  )
}

export default MessagesList
