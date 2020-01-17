import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h2 className="title">
                Do you think we can work together?
              </h2>
              <h4 className="description">
                Drop me an email...
              </h4>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round"
                color="info"
                href="https://www.creative-tim.com/product/blk-design-system-react?ref=blkdsr-index-page-download-section"
                role="button"
                size="lg"
              >
                Contact Me
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Download;
