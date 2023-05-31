import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";
  
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { email, password });
      const { token, user } = response.data;
      // Handle successful login
      console.log("Logged in user:", user);
      console.log("Token:", token);
    } catch (error) {
      setError("Invalid credentials. Please try again.");
      console.log("Login error:", error);
    }
  };
  return (
    <div class="login-box">
      <p>Login</p>
      <form>
        <div class="user-box">
          <input
            required
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input
            required
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <label>Password</label>
        </div>
        {error && <p className="error-message">{error}</p>}
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
}
