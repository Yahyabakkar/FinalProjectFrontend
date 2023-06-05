import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";

export default function LoginForm() {
  const [data, setData] = useState({});
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    
    axios
      .post(`/users/login`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div class="login-box">
      <p>Login</p>
      <form>
        <div className="user-box">
          <input required name="email" type="text" onChange={handleInput} />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input
            required
            name="password"
            type="password"
            onChange={handleInput}
          />{" "}
          <label>Password</label>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleLogin} href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  );
}
