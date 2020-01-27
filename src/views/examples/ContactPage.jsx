import React from "react";
import classnames from "classnames";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";

class ContactPage extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: "",
    form: {
      name: "",
      phone: "",
      email: "",
      message: ""
    }
  };
  componentDidMount() {
    document.body.classList.toggle("contact-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
    // this.initialState = this.state
  }
  componentWillUnmount() {
    document.body.classList.toggle("contact-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }
  followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    });
  };
  onChange = event => {
    const myState = this.state;
    myState.form[event.target.name] = event.target.value;
    this.setState(myState);
  };

  formIsValid = () => {
    let isFormValid = true;
    Object.entries(this.state.form).map(([key, value]) => {
      if (!value) {
        toast.error(`${key} cannot be empty`);
        isFormValid = false;
      }

      if(key === "email") {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.form.email)) {
          toast.error("please use a valid email");
          isFormValid = false;
        }
      }
    });

    return isFormValid;
  };

  handleSubmit = event => {
    event.preventDefault();
    const templateId = process.env.REACT_APP_YOUR_TEMPLATE;
    const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
    const message =
      this.state.form.message +
      " from " +
      this.state.form.phone +
      " with email " +
      this.state.form.email;
    if (!this.formIsValid()) return;
    console.log("we are sending the message");
    this.sendFeedback(templateId, serviceId, {
      message_html: message,
      from_name: this.state.form.name,
      reply_to: this.state.form.email
    });
  };

  sendFeedback(templateId, serviceId, variables) {
    window.emailjs
      .send(serviceId, templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
        toast.success("Email successfully sent!");
      })
      .catch(err => console.error("An error occured. Email not sent!!", err));
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <Container>
                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                    <div
                      className="square square-7"
                      id="square7"
                      style={{ transform: this.state.squares7and8 }}
                    />
                    <div
                      className="square square-8"
                      id="square8"
                      style={{ transform: this.state.squares7and8 }}
                    />
                    <Card className="card-register">
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={require("assets/img/square-purple-1.png")}
                        />
                        <CardTitle tag="h4">mail me</CardTitle>
                        <ToastContainer
                          hideProgressBar={true}
                          newestOnTop={true}
                          autoClose={3000}
                        />
                      </CardHeader>
                      <CardBody>
                        <Form className="form">
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.fullNameFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Name"
                              type="text"
                              name="name"
                              onChange={this.onChange}
                              required
                              onFocus={e =>
                                this.setState({ fullNameFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ fullNameFocus: false })
                              }
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.phone
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-mobile" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Phone"
                              type="text"
                              name="phone"
                              onChange={this.onChange}
                              required
                              onFocus={e => this.setState({ phone: true })}
                              onBlur={e => this.setState({ phone: false })}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.emailFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="text"
                              name="email"
                              onChange={this.onChange}
                              required
                              onFocus={e => this.setState({ emailFocus: true })}
                              onBlur={e => this.setState({ emailFocus: false })}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.passwordFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-notes" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Message"
                              type="textarea"
                              name="message"
                              onChange={this.onChange}
                              onFocus={e =>
                                this.setState({ passwordFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ passwordFocus: false })
                              }
                              required={true}
                            />
                          </InputGroup>
                        </Form>
                      </CardBody>
                      <CardFooter>
                        <Button
                          className="btn-round"
                          onClick={this.handleSubmit}
                          color="primary"
                          size="lg"
                          type="submit"
                        >
                          Send Message
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
                <div className="register-bg" />
                <div
                  className="square square-1"
                  id="square1"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-2"
                  id="square2"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-3"
                  id="square3"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-4"
                  id="square4"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-5"
                  id="square5"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-6"
                  id="square6"
                  style={{ transform: this.state.squares1to6 }}
                />
              </Container>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default ContactPage;
