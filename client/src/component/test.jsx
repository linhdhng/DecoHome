import React, { useState } from 'react'; // Import CSS for animations if needed

function Test() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register forms

  const handleToggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and register forms
  };

  return (
    <div className="App">
      <h1>{isLogin ? 'Sign In' : 'Register'}</h1>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <button onClick={handleToggleForm}>
        {isLogin ? 'Sign Up' : 'Login'}
      </button>
    </div>
  );
}

function LoginForm() {
  return (
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Sign In</button>
    </form>
  );
}

function RegisterForm() {
  return (
    <form>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default Test;
