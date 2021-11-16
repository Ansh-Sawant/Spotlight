// import loginPic from "./lampLogin.png";
import { Col, Container, Row } from "react-bootstrap";

const Signup = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col>
            <div className="loginPage">
              <div className="loginDiv">
                <p className="loginHeading">Sign Up</p>
                <form className="loginDetails">
                  <label for="Name" className="formDetailHeading">
                    Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    placeholder="&#xF007;   Type Your Name"
                    className="formInputFields"
                  />
                  <br />
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
                  <br />
                  <label for="ConfirmPassword" className="formDetailHeading">
                    Confirm Password
                  </label>
                  <br />
                  <input
                    type="password"
                    name="ConfirmPassword"
                    id="confirmPassword"
                    placeholder="&#xF023;   Confirm Your Password"
                    className="formInputFields"
                  />

                  <p className="loginButton">REGISTER</p>

                  <div className="signupDiv">
                    <p
                      className="signupContent"
                      style={{ color: "grey", fontSize: "13px" }}
                    >
                      Or Sign In using
                    </p>
                    <a
                      href="./login"
                      className="signupContent"
                      style={{ textDecoration: "none", color: "darkslategray" }}
                    >
                      LOGIN
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

export default Signup;
