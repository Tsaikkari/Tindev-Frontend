import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  let date = new Date()
  let year = date.getFullYear()

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Copyright &copy; TinDev {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer