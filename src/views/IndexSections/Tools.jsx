import React from "react";
// reactstrap components
import {
  Button,
  Progress,
  Container,
  Row,
  Col
} from "reactstrap";

class PaginationSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pills: 1
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <div className="section section-pagination">
        <img alt="..." className="path" src={require("assets/img/path4.png")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/path5.png")}
        />
        <Container>
          <Row>
            <Col md="6">
              <h3 className="mb-4">Personal Ratings</h3>
              <div className="progress-container progress-primary">
                <span className="progress-badge">BackEnd</span>
                <Progress max="100" value="97">
                  <span className="progress-value">97%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">FrontEnd</span>
                <Progress max="100" value="88">
                  <span className="progress-value">88%</span>
                </Progress>
              </div>
              <div className="progress-container progress-success">
                <span className="progress-badge">DevOps</span>
                <Progress max="100" value="95">
                  <span className="progress-value">95%</span>
                </Progress>
              </div>
              <br />
            </Col>
            <Col md="6">
              <h3 className="mb-5">Tools</h3>
              <Button className="btn-round" color="info" type="button">
                Kubernetes
              </Button>
              <Button className="btn-round" color="info" type="button">
                Pivotal Tracker
              </Button>
              <Button className="btn-round" color="info" type="button">
                CircleCI
              </Button>
              <Button className="btn-round" color="info" type="button">
                Docker
              </Button>
              <Button className="btn-round" color="info" type="button">
                MongoDB
              </Button>
              <Button className="btn-round" color="info" type="button">
                PostgreSQL
              </Button>
              <Button className="btn-round" color="info" type="button">
                Heroku
              </Button>
              <Button className="btn-round" color="info" type="button">
                Celery
              </Button>
              <Button className="btn-round" color="info" type="button">
                GoogleCloudPlatform
              </Button>
              <Button className="btn-round" color="info" type="button">
                Postman
              </Button>
              <Button className="btn-round" color="info" type="button">
                Redis
              </Button>
              <Button className="btn-round" color="info" type="button">
                Git
              </Button>
              <Button className="btn-round" color="info" type="button">
                Trello
              </Button>
              <Button className="btn-round" color="info" type="button">
                Travis
              </Button>
              <Button className="btn-round" color="info" type="button">
                Slack
              </Button>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    );
  }
}

export default PaginationSection;
