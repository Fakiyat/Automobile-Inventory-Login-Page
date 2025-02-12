import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import InputField from "./InputField";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    // Example login logic - you can modify these credentials
    if (username === "user" && password === "password") {
      login({
        username,
        name: "User",
        role: "user",
      });
      navigate("/dashboard");
    } else if (username === "admin" && password === "admin123") {
      login({
        username,
        name: "Fakiyat",
        role: "admin",
      });
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
          <button type="submit" className="loginbtn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
