import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const CreateMessage = ({
  handleSubmit,
  content,
  setContent
  // newMessage, 
  // setNewMessage,
}: any) => {
  const handleNewMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // setNewMessage(value)
    setContent(value)
  }

  return (
    <Container>
      <div className="flex-grow-0 py-3 px-4">
        <Form onSubmit={e => handleSubmit(e)}>
          <Form.Group className="input-group">
            <Form.Control
              as="textarea"
              name="content"
              value={content}
              className="form-control"
              placeholder="Write message..."
              onChange={handleNewMessageChange}
              rows={3}
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

export default CreateMessage
