import React from "react";

const About = () => (
  <div
    style={{
      minHeight: "calc(100vh - 70px)",
      width: "100vw",
      background: "linear-gradient(135deg, #e0e7ff 0%, #f0f4ff 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem 0",
    }}
  >
    <div
      className="about-container"
      style={{
        padding: "2.5rem 2rem",
        maxWidth: 600,
        background: "#fff",
        borderRadius: 18,
        boxShadow: "0 8px 32px #0058b033",
        color: "#222",
      }}
    >
      <h2 style={{ color: "#0058b0", marginBottom: "1rem" }}>About Us</h2>
      <p>
        Welcome to the <b>URL Shortener</b>! This project allows you to easily
        shorten long URLs for easier sharing and tracking.
      </p>
      <p>
        Built with <b>React</b> for the frontend and a simple backend, our goal
        is to provide a fast and reliable URL shortening service with a modern,
        user-friendly interface.
      </p>
      <p>
        <b>Thank you</b> for using our service!
      </p>
    </div>
  </div>
);

export default About;
