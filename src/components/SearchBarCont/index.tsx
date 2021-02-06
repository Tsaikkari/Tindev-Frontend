import React from 'react'
import { Form } from 'react-bootstrap'

const SearchBarCont = () => {
  return (
    <div className="chat-search-box">
      <Form className="input-group">
        <Form.Control
          type="text"
          placeholder="Search"
          className="form-control"
        />
      </Form>
    </div>
  )
}
export default SearchBarCont
