import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { login } from "../service/api";
import { useHistory } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  let history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const goToHome = () => {
    history.push("/");
  };

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
                  <label htmlFor="email" className="formDetailHeading">
                    Email
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="&#xF0E0;   Type Your Email"
                    className="formInputFields"
                    onChange={handleChange}
                  />
                  <br />
                  <label htmlFor="password" className="formDetailHeading">
                    Password
                  </label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="&#xF023;   Type Your Password"
                    className="formInputFields"
                    onChange={handleChange}
                  />

                  <p
                    className="loginButton"
                    onClick={() => {
                      login(user, setLoginUser);
                      goToHome();
                    }}
                  >
                    LOGIN
                  </p>

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
