import React, { useState } from "react";
import "./LoginSignup.css";

export default function LoginSignup() {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h3>{state}</h3>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />

          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <i
            className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            onClick={togglePasswordVisibility}
          />
        </div>
        <button>Continue</button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Click to Login
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        )}

        {state === "Sign Up" ? (
          <div className="loginsignup-agree">
            <div className="check-box">
              <input type="checkbox" name="" id="" />
            </div>
            <div className="agree">
              <p>By signing up, you agree to our Terms of Service</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
