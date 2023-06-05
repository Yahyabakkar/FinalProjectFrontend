import React, { useState } from "react";
import { useSignIn } from "react-auth-kit";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const signIn = useSignIn();
  function handleLogin(e) {
    console.log("test")
    e.preventDefault();
    console.log(process.env.REACT_APP_URL)
    axios
      .post(`${process.env.REACT_APP_URL}/users/login`, { email, password })
      .then((res) => {
        console.log(res);
        signIn({
          token: res.data.token,
          expiresIn:3000,
          tokenType: "Bearer",
          authState: res.data.user,
        })
        navigate("/")

      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleEmailChange(e){
    console.log(email)
setEmail(e.target.value);
  }
  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>login</h2>
        <label className="label">
          Email
          <input
            type="email"
            name="email"
            onChange={handleEmailChange}
          />
        </label>
        <label className="label">
          Password:
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}
