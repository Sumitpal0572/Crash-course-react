import React, { useEffect, useState } from "react";

const Login = () => {
  const [message, setMessage] = useState("");

  // Use useEffect to display a message prompting the user to log in when the component loads
  useEffect(() => {
    setMessage("Please log in to continue.");
  }, []);
  return (
    <div>
      <h2>Login</h2>
      {message && <p>{message}</p>}

      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
