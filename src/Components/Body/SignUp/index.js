import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { toast } from "react-toastify";

const SignUp = () => {
  const [signUpObject, setSignUpObject] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (e) => {
    return String(e.target.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  return (
    <div className="bodyContainer">
      <div className="signupSignIn">
        <h1 className="alignMentCenter">SIGN UP</h1>
        <div className="divField">
          <TextField
            type="email"
            className="width-90"
            id="standard-basic"
            label="User Name"
            variant="standard"
            onBlur={(e)=>{
                let validation = validateEmail(e);
                if(!validation){
                    toast.error("Please enter valid email.")
                }
            }}
          />
        </div>
        <div className="divField">
          <TextField
            type="password"
            className="width-90"
            id="standard-basic"
            label="Password"
            variant="standard"
          />
        </div>
        <div className="divField">
          <TextField
            type="password"
            className="width-90"
            id="standard-basic"
            label="Confirm Password"
            variant="standard"
          />
        </div>
        <div className="divField">
        <Button variant="contained" className="width-90" onClick={()=>{}}>Sign Up</Button></div>
        <div className="divField">
      <Button variant="outlined" className="width-90 ">Cancel</Button>
      </div>
      </div>
      
    </div>
  );
};

export default SignUp;
