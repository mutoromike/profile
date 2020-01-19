import React from "react";

// reactstrap components
import { Container, Col, Row } from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <Row>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow img-center"
                  src={require("assets/img/mike.jpeg")}
                  style={{ width: "150px", location: "center" }}
                />
            </Row>
            <h2 className="h1-seo">Michael Mukalo</h2>
            <h3 className="d-none d-sm-block">
              A BackEnd Engineer with a touch of DevOps and FrontEnd
            </h3>




          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
