import Form from "../Components/Form";
import React from "react";
import Footer from "../Components/Footer";
import LoginImage from "../Components/LoginImage";

function Register() {
  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="/Logo.png" alt="Auto-Hub" className="logo" />
        <span className="logo-text"> Auto Hub</span>
      </div>
      <div className="login-left">
        <Form route="/api/user/register/" method="register" />
        <Footer />
      </div>
      <LoginImage />
    </div>
  );
}

export default Register;
