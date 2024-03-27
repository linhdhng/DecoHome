import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/fetch";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Login() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const nav = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(formData);
    console.log("Success");
    nav("/dashboard");
  };

  function onChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="form-wrapper">
      
      <div className="form-container">
      <div className="card-img">
            {/* <!-- Background image for card set in CSS! --> */}
        </div>
        <Form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h1 className="form-title">Login</h1>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={3} className="block">
              Email:
            </Form.Label>
            <Col sm={10}>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={(e) => onChange(e)}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={3}>
              Password:
            </Form.Label>
            <Col sm={10}>
              
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={(e) => onChange(e)}
                minLength="6"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Log In</Button>
            </Col>
          </Form.Group>
          <div className="text-center">
          <a href="#">
            Forgot password?
          </a>
          <p>
            Don't have an account?
            <span>
              <Link to="/signup">Register Here</Link>
            </span>
          </p>
        </div>
        </Form>
        
      </div>
    </div>
  );
}

export default Login;
