import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { signUpWithEmailAndPassword } from "../../utils/firebaseUtils";

function Signup() {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  if (userLoggedIn) {
    navigate("/home");
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signUpWithEmailAndPassword(email, password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {userLoggedIn && <Navigate to={"/home"} replace={true} />}

      <h1>Welcome to the Signup Page</h1>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Sign up</button>
      </form>
      <p>
        Already have an account? <Link to="/signin">Login</Link>
      </p>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Signup;
