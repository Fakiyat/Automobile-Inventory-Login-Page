// Main container for the login Page
import React from "react";
import LoginForm from "./LoginForm";
import LoginImage from "./LoginImage";
import Footer from "./Footer";

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="/car logo.jpg" alt="Auto-Hub" className="logo" />
        <span className="logo-text"> Auto Hub</span>
      </div>
      <div className="login-left">
        <LoginForm />
        <Footer />
      </div>
      <LoginImage />
    </div>
  );
};
export default Login;
