import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/fetch";
import axios from "axios";

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

  // const handleSubmit = (e) => {
  //     e.preventDefault()
  //     if (password !== password2) {
  //       console.log('Passwords do not match');
  //     } else {
  //     axios
  //       .post("http://localhost:5000/api/users", formData)
  //       .then((res) => {
  //         alert("You have successfully registered your account.");
  //         useNavigate("/login");
  //       })
  //       .catch((err) => console.err(err.message));
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      signUp(formData);
      nav('/login');
    }
  };

  const { name, email, password, password2 } = formData

  return (
    <div>
      <h1>Sign Up</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="name1">Name: </label>
        <input
          type="text"
          id="name1"
          name="name"
          value={name}
          placeholder="Enter Your Name"
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="email1">Email: </label>
        <input
          type="email"
          id="email1"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="password1">Password: </label>
        <input
          type="password"
          id="password1"
          name="password"
          autoComplete="off"
          value={password}
          placeholder="Set Password"
          onChange={(e) => onChange(e)}
          minLength="6"
        />
        <label htmlFor='password2'>Re-enter Password: </label>
        <input
          type="password"
          id="password2"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={(e) => onChange(e)}
          minLength="6"
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <button>
          <Link to="/login">Log In</Link>
        </button>
      </p>
    </div>
  );
}

export default Signup;
