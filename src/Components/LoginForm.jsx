import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-left">
      <div className="login-box">
        <h2>Get Started Now</h2>
        <p>Enter your credentials to access your account</p>
        <hr />
        <form onSubmit={handleLogin} className="login-form">
          <InputField
            type="text"
            placeholder="Username"
            icon="face"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            icon="lock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Login Button */}
          <button type="submit" className="loginbtn" text="Login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
