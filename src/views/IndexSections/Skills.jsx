import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Button,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4
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
      <div className="section section-tabs">
        <Container>
          <div className="title">
            <h2 className="title">SKILLS</h2>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  BackEnd
                </small>
              </div>
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-primary" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.iconTabs === 1
                        })}
                        onClick={e => this.toggleTabs(e, "iconTabs", 1)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-coins" />
                        Python
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.iconTabs === 2
                        })}
                        onClick={e => this.toggleTabs(e, "iconTabs", 2)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-coins" />
                        Node-Express
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.iconTabs === 3
                        })}
                        onClick={e => this.toggleTabs(e, "iconTabs", 3)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-coins" />
                        GraphQL
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.iconTabs}
                  >
                    <TabPane tabId="link1">
                      <p>
                        A very efficient Python Engineer, with deep understanding in
                        core elements and two frameworks (Django and Flask) <br />
                        <br />
                        I'm also well equipped with knowledge in Machine Learning and 
                        Data Science
                      </p>
                      <Button
                        className="btn-round"
                        color="primary"
                        type="button"
                      >
                        Django
                      </Button>
                      <Button
                        className="btn-round"
                        color="primary"
                        type="button"
                      >
                        Flask
                      </Button>
                      <Button
                        className="btn-round"
                        color="primary"
                        type="button"
                      >
                        Pandas
                      </Button>
                      <Button
                        className="btn-round"
                        color="primary"
                        type="button"
                      >
                        Numpy
                      </Button>
                    </TabPane>
                    <TabPane tabId="link2">
                      <p>
                        I have expertise in creating Node-Express APIs. I
                        will rate this 70% since Python is my preferred BackEnd
                        Language <br />
                        <br />
                        I don't mind working with a JavaScript API. Please reach out!
                      </p>
                      <Button
                        className="btn-round"
                        color="primary"
                        type="button"
                      >
                        NodeJS
                      </Button>
                      <Button
                        className="btn-round"
                        color="primary"
                        type="button"
                      >
                        Express
                      </Button>
                    </TabPane>
                    <TabPane tabId="link3">
                      <p>
                        I have experience with GraphQL. Majorly with Python.<br />
                        <br />
                        Reach out for an awesome, One Endpoint API
                      </p>
                      <Button
                        className="btn-round"
                        color="primary"
                        type="button"
                      >
                        Python-GraphQL
                      </Button>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  FrontEnd & DevOps
                </small>
              </div>
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-success" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 4
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 4)}
                        href="#pablo"
                      >
                        FrontEnd
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 5
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 5)}
                        href="#pablo"
                      >
                        DevOps
                      </NavLink>
                    </NavItem>
                    {/* <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 6
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 6)}
                        href="#pablo"
                      >
                        Options
                      </NavLink>
                    </NavItem> */}
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.textTabs}
                  >
                    <TabPane tabId="link4">
                      <p>
                        JavaScript has alays been fun to write. I have experience, having
                        worked with ReactJS on a number of projects. <br />
                        Combining this with other components such as testing tools, 
                        I believe I have what it takes!
                      </p>
                      <Button
                        className="btn-round"
                        color="success"
                        type="button"
                      >
                        ReactJS
                      </Button>
                      <Button
                        className="btn-round"
                        color="success"
                        type="button"
                      >
                        Mocha
                      </Button>
                      <Button
                        className="btn-round"
                        color="success"
                        type="button"
                      >
                        HTML/CSS/SCSS
                      </Button>
                      <Button
                        className="btn-round"
                        color="success"
                        type="button"
                      >
                        Jest
                      </Button>
                    </TabPane>
                    <TabPane tabId="link5">
                      <p>
                        An Engineer with DevOps under his sleeves. I've worked with Kubernetes, 
                        Heroku, Docker and many others. I believe in CI/CD efficiency, and 
                        that seamless work should be given first priority. Always
                      </p>
                      <Button
                        className="btn-round"
                        color="success"
                        type="button"
                      >
                        Kubernetes
                      </Button>
                      <Button
                        className="btn-round"
                        color="success"
                        type="button"
                      >
                        CI/CD
                      </Button>
                      <Button
                        className="btn-round"
                        color="success"
                        type="button"
                      >
                        Heroku
                      </Button>
                      <Button
                        className="btn-round"
                        color="success"
                        type="button"
                      >
                        Docker
                      </Button>
                    </TabPane>
                    <TabPane tabId="link5">
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Skills;
