import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // You can add your authentication logic here.
    // For simplicity, we'll just check if the username and password are not empty.
    if (username && password) {
      // Redirect to the dashboard page after successful login.
      history.push('/Dashboard');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
