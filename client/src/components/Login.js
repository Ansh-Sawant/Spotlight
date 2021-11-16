// import loginPic from "./lampLogin.png";
import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col>
            <div className="loginPage">
              <div className="loginDiv">
                <p className="loginHeading">Login</p>
                <form className="loginDetails">
                  
                  <label for="Email" className="formDetailHeading">
                    Email
                  </label>
                  <br />
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    placeholder="&#xF0E0;   Type Your Email"
                    className="formInputFields"
                  />
                  <br />
                  <label for="Password" className="formDetailHeading">
                    Password
                  </label>
                  <br />
                  <input
                    type="password"
                    name="Password"
                    id="password"
                    placeholder="&#xF023;   Type Your Password"
                    className="formInputFields"
                  />

                  <p className="loginButton">LOGIN</p>

                  <div className="signupDiv">
                    <p
                      className="signupContent"
                      style={{ color: "grey", fontSize: "13px" }}
                    >
                      Or Sign Up using
                    </p>
                    <a
                      href="./signup"
                      className="signupContent"
                      style={{ textDecoration: "none", color: "darkslategray" }}
                    >
                      SIGN UP
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;