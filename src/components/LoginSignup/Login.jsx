import React, { useState } from "react";
import "./Login copy.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
const Login = () => {
  const [action, setAction] = useState("Login");
  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <PersonIcon
                className="person_icon"
                sx={{ fontSize: 35, marginLeft: 1, marginRight: 2 }}
              />
              <input type="text" placeholder="Name" />
            </div>
          )}
          <div className="input">
            <EmailIcon
              className="email_icon"
              sx={{ fontSize: 35, marginLeft: 1, marginRight: 2 }}
            />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <LockIcon
              className="passwod_icon"
              sx={{ fontSize: 35, marginLeft: 1, marginRight: 2 }}
            />
            <input type="password" placeholder="password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot_password">
            Lost Password?
            <a href="#"> Click here!</a>
          </div>
        )}
        <div className="submit_container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
