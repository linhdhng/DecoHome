import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/fetch";
import axios from "axios";

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const nav = useNavigate()

  const isLoggedIn = true; 
        
        window.addEventListener('DOMContentLoaded', (event) => {
            const loginBtn = document.getElementById('loginBtn');
            if (isLoggedIn) {
                loginBtn.classList.add('hidden');
            } else {
                loginBtn.classList.remove('hidden');
            }
        });
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    console.log('Success');
    nav('/dashboard');
  };

  return (
    <div>
      <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h1>
      <form  className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          minLength="6"
        />
        <button type="submit">Log In</button>
      </form>
      <p>
        Don't have an account?{" "}
        <button>
          <Link to="/signup">Register Here</Link>
        </button>
      </p>
    </div>
  );
}

export default Login;
