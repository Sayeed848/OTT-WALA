
import { useState } from "react";
import { useNavigate } from "react-router";
import Dashboard from "./Dashboard";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (username === "sayeed" && password === "1234") {
      let loginSuccess = true;

      if (loginSuccess) {
        navigate("/Dashboard");
      }
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button type="submit" className="btn btn-primary ms-2">
          Login
        </button>
        <button type="submit" className="btn btn-warning ms-2">
          New User
        </button>
      </form>
    </div></div>
  );
}

export default Login;
