import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';

import app from '../../../firebase/Firebase';
import {AuthContext} from '../../../firebase/Auth';
import Swal from 'sweetalert';

class Login extends Component {

  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: '',
      password: ''
    }

  }


  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  signIn(e) {
    try {
      app.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          const uid = app.auth().currentUser.uid;
          console.log(uid);
          Swal({
            title: "Success!",
            text: "Login Success",
            icon: "success",
          });
          sessionStorage.setItem('loggedIn', 'true');
          sessionStorage.setItem('user', uid);
          this.props.history.push("/");
        }).catch(error => {
        console.log('myyy:' + error.message);
        Swal({
          title: "Error!",
          text: error.message,
          icon: "error",
        });
      });

    } catch (error) {
      Swal({
        title: "Error!",
        text: error.message,
        icon: "error",
      });
    }
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username"   onChange={this.onChangeEmail}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password"  onChange={this.onChangePassword}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.signIn}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign in</h2>
                      <p>
                        Sign in to Wow Trip Admin Panel
                      </p>
                      <img src = "/images/logo3.png"/>
                      {/*}
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                      {*/}
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
