import React from "react";
import "./Login copy.css";
import EmailIcon from "@mui/icons-material/Email";
const ForgotPass = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <div className="text">Forgot Password</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <EmailIcon
              className="email_icon"
              sx={{ fontSize: 35, marginLeft: 1, marginRight: 2 }}
            />
            <input type="email" placeholder="Email" />
          </div>
        </div>
          <div className="submit_container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Send Otp
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPass;
