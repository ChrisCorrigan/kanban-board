import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { signInWithEmailAndPassword } from "../../utils/firebaseUtils";

function Login() {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  if (userLoggedIn) {
    navigate("/home");
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {userLoggedIn && <Navigate to={"/home"} replace={true} />}
      <h1>Welcome to the Login Page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
