import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/fetch";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Signup() {
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

   const nav = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      await signUp(formData);
      nav('/login');
    }
  };

  const { name, email, password, password2 } = formData

  return (
    <div>
      <div className="form-container">
      <Form  autoComplete="off" onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
      <Form.Label column sm={6}>Name: </Form.Label>
      <Col sm={10}><input
          type="text"
          id="name1"
          name="name"
          value={name}
          placeholder="Enter Your Name"
          onChange={(e) => onChange(e)}
        /> </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={6}>Email: </Form.Label>
        <Col sm={10}><input
          type="email"
          id="email1"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => onChange(e)}
        /></Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={6}>Password: </Form.Label>
        <Col sm={8}><input
          type="password"
          id="password1"
          name="password"
          autoComplete="off"
          value={password}
          placeholder="Set Password"
          onChange={(e) => onChange(e)}
          minLength="6"
        /></Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={6}>Re-enter Password: </Form.Label>
        <Col sm={8}><input
          type="password"
          id="password2"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={(e) => onChange(e)}
          minLength="6"
        /></Col></Form.Group>
        <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 13}}>
        <Button type="submit">Sign Up</Button>
        </Col>
        </Form.Group>

        <p>
        Already have an account?
        <span>
          <Link to="/login">Log In</Link>
        </span>
      </p>
      </Form>
      </div>
    </div>
  );
}

export default Signup;
