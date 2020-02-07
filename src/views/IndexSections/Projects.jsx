import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const carouselItem1 = [
  {
    src: require("assets/img/events.png"),
    altText: "Slide 1",
    caption: ""
  }
];
const carouselItem2 = [
  {
    src: require("assets/img/wger.png"),
    altText: "Slide 2",
    caption: ""
  }
];
const carouselItem3 = [
  {
    src: require("assets/img/converge.png"),
    altText: "Slide 2",
    caption: ""
  }
];
const carouselItem4 = [
  {
    src: require("assets/img/smartgyms.png"),
    altText: "Slide 2",
    caption: ""
  }
];

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoModal: false,
      miniModal: false,
      formModal: false
    };
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
  render() {
    return (
      <div className="section section-javascript" id="javascriptComponents">
        <img alt="..." className="path" src={require("assets/img/path5.png")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/path5.png")}
        />
        <div className="section">
          <Container>
            <div className="title">
              <h2>Sample Works</h2>
            </div>
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">Bright Events</h1>
                <p className="text-white mt-4">
                  A platform that allows Event organizers the freedom to
                  organize and manage events. This is built with Python
                  (backend) and ReactJS (frontend).
                </p>
                <Button
                  className="mt-4"
                  color="warning"
                  href="https://www.github.com/mutoromike"
                >
                  See all my projects
                </Button>
              </Col>
              <Col lg="6">
                <UncontrolledCarousel
                  items={carouselItem1}
                  indicators={false}
                  autoPlay={false}
                />
              </Col>
            </Row>
            <br />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">Wger</h1>
                <p className="text-white mt-4">
                  An application that manages your woorkouts, nutrition and diary. This
                  manages flexible workout routines for any goals anyone has, personal 
                  diet planning by creating as many meals with as many different ingredients 
                  as one wishes and a diary. These come as WEIGHT TRACKER, GYM MANAGEMENT, CALENDAR 
                  with an Excercise Database!
                </p>
                <Button
                  className="mt-4"
                  color="warning"
                  href="https://wg-bigas-opus.herokuapp.com/en/software/features"
                >
                  Checkout Application
                </Button>
              </Col>
              <Col lg="6">
                <UncontrolledCarousel
                  items={carouselItem2}
                  indicators={false}
                  autoPlay={false}
                />
              </Col>
            </Row>
            <br />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">Converge</h1>
                <p className="text-white mt-4">
                  Collaboratively built an API (Python-Flask & GraphQL) that powers 
                  a web and android version. Converge is a meeting rooms management application 
                  that facilitates meeting room management across Andela.
                </p>
                <Button
                  className="mt-4"
                  color="warning"
                  href="https://github.com/andela/mrm_api"
                >
                  View Project on Github
                </Button>
              </Col>
              <Col lg="6">
                <UncontrolledCarousel
                  items={carouselItem3}
                  indicators={false}
                  autoPlay={false}
                />
              </Col>
            </Row>
            <br />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">Smart Gyms</h1>
                <p className="text-white mt-4">
                  Automated a Gyms Power usage and traffic. This is an IoT project that is built 
                  with Python-Flask backend and a ReactJS frontend. With the data, the owner can track 
                  energy usage daily, weekly and monthly, resulting to efficient planning, management and 
                  implementation of cost cutting measures. 
                </p>
                <Button
                  className="mt-4"
                  color="warning"
                  href="#"
                >
                  This is a Private Project
                </Button>
              </Col>
              <Col lg="6">
                <UncontrolledCarousel
                  items={carouselItem4}
                  indicators={false}
                  autoPlay={false}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Projects;
