// src/components/SignIn.jsx
import React, { useState } from "react";
import "./Signin.css";

function SignIn() {
  return (
    <div className="signin-container">
      <form className="signin-form">
        <h2>Sign In</h2>
        <div className="form-group">
          <label>Email</label>
          <input type="email" required placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" required placeholder="Enter your password" />
        </div>

        <button type="submit" className="signin-button">
          Login
        </button>

        <div className="form-footer">
          <a href="#" className="link">
            Forgot Password?
          </a>
          <span> | </span>
          <a href="#" className="link">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
