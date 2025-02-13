import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import PasswordField from "./PasswordField"; // for password visibility icon function  for that...
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../Styles/Form.css";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const name = method === "login" ? "login" : "Register";

  /* ---- HandleSubmit defien-----*/
  const handleSubmit = async (e) => {
    setLoading(true);
    setErrorMessage(""); // Clear previous errors
    e.preventDefault(); /*--- this function will prevent us from submiting the form, and it will remove the default behiavour so the reload page will not happen */

    /*------ Now we are going to TRY to send a request to the whatever route this form is representing 
    either it is register or login... if it didnt work it will CATCH an error and have a LOADING indecator------*/
    try {
      const res = await api.post(
        route,
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/"); // Redirects to home page
      } else {
        navigate("/login"); // Redirects to login after registering
      }
    } catch (error) {
      alert(error);
      console.error("Login/Register Error:", error);
      setErrorMessage(error.response?.data?.detail || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-left">
        <div className="login-box">
          <h2>Get Started Now</h2>
          <p>Enter your credentials to access your account</p>
          <h3>{name}</h3>
          <hr />
          {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
          {/* Show error message */}
          <div className="input-wrapper">
            <input
              className="input-field"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <PasswordField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="loginbtn" disabled={loading}>
            {loading ? "Processing..." : name}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
