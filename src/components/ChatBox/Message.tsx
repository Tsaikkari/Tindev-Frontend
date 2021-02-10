import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const Message = ({
  handleSubmit,
  newMessage, 
  setNewMessage,
}: any) => {
  const handleNewMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setNewMessage(value)
  }

  return (
    <Container>
      <div className="flex-grow-0 py-3 px-4">
        <Form onSubmit={e => handleSubmit(e)}>
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
          <Button type="submit" variant="contained" className="btn btn-primary">
            Send
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default Message
