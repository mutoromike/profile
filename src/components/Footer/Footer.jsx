import React from "react";
// import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavLink,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
            </Col>
            <Col md="3">
                  <NavLink href="https://creative-tim.com/contact-us?ref=blkdsr-footer">
                    Contact Me
                  </NavLink>
            </Col>
            <Col md="3">
            <p>   </p>
            <p></p>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.linkedin.com/in/michael-mukalo-90417894"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                  find me on linkedin
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.github.com/mutoromike/"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  find me on github
                </UncontrolledTooltip>
              </div>
            </Col>
            <Col md="3">
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
