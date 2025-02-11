import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="navbar">
        <h1>Welcome to Auto Hub 🚗</h1>
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
