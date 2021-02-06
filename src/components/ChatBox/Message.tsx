import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const Message = ({ handleSubmit }: any) => {
  const [newMessage, setNewMessage] = useState('')

  const handleNewMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setNewMessage(value)
  }

  return (
    <>
      <Container>
        <div className="flex-grow-0 py-3 px-4 border-top">
          <Form onSubmit={(e: any) => handleSubmit(e)}>
            <Form.Group className="input-group">
              <Form.Control
                type="text"
                name="newMessage"
                value={newMessage}
                className="form-control"
                placeholder="Write message..."
                onChange={handleNewMessageChange}
              />
            </Form.Group>
          </Form>
        </div>
        <Button variant="contained" className="btn btn-primary">
          Send
        </Button>
      </Container>
    </>
  )
}

export default Message
