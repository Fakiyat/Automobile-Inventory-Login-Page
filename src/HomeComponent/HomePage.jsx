import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "/src/Styles/HomePage.css";

const HomePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="home-container">
      <header className="navbar">
        <h1>Welcome to Auto Hub 🚗</h1>
        <div className="user-info">
          <span>Welcome, {user?.name}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>
      <main className="content">
        <p>Find the best cars and deals in town!</p>
      </main>
      <footer className="footer-home">
        <p>© 2025 Auto Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
