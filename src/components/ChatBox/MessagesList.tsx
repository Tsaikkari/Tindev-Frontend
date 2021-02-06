import React from 'react'
import { Container, ListGroupItem } from 'react-bootstrap'
import moment from 'moment'

const MessagesList = ({ messages }: any) => {
  return (
    <>
      <Container>
        {messages.map((m: any) => {
          return (
            <ListGroupItem key={m.id}>
              <div>{m.content}</div>
              <div>{moment(m.createdAt).format('HH:mm')}</div>
            </ListGroupItem>
          )
        })}
      </Container>
    </>
  )
}

export default MessagesList
