import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-1 fixed-bottom">
            <p className="copyright">Copyright &copy; TinDev {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
