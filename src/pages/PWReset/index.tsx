import React from 'react'

import CustomSvgIcon from '../../components/CustomSvgIcon'
import CustomButton from '../../components/CustomButton'
import starsLady from '../../media/star-lady.svg'
import { Form, Col } from 'react-bootstrap'
import FormContainer from '../../components/FormContainer'
import Footer from '../../components/Footer'

const PWReset = () => {
  return (
    <div className="container page">
      <FormContainer>
        <h2 className="text-center my-5 purple-text">Reset Password</h2>
        <Form noValidate>
          <label htmlFor="email" className="form-label">
            Enter Your Email
          </label>
          <Form.Row>
            <Form.Group as={Col} controlId="email">
              <Form.Control required type="email" />
            </Form.Group>
          </Form.Row>
          <label htmlFor="new-pw" className="form-label">
            New Password
          </label>
          <Form.Row>
            <Form.Group as={Col} controlId="newPassword">
              <Form.Control required type="password" />
            </Form.Group>
          </Form.Row>

          <label htmlFor="new-pw" className="form-label">
            Repeat Password
          </label>
          <Form.Row>
            <Form.Group as={Col} controlId="repeatPassword">
              <Form.Control required type="password" />
            </Form.Group>
          </Form.Row>

          <CustomButton text="Submit" className="btn-lg my-3" />
        </Form>
      </FormContainer>
      <CustomSvgIcon img={starsLady} />
      <Footer />
    </div>
  )
}

export default PWReset
