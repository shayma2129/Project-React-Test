import React, { useState } from "react";
import "./Login.css";
import { Redirect, Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function Login({ fetchUserByEmail }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errormsg,setErrorMsg]=useState(false);
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = fetchUserByEmail(email);
    if (email === "chaimahm530@gmail.com" && password === "123456789" &&(user.permission = "enable")) {
      localStorage.setItem("loggedIn", true);
      setLoggedIn(true);
      localStorage.setItem('book_emprunt', 0);
    } 
    else {
      localStorage.removeItem("loggedIn");
      setErrorMsg(true);
    }
  }

  return (
   <>
        <div className="cover-login">
        <Form className="login-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              aria-label="Email"
              autoFocus
              type="email"
              placeholder="Enter your Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              aria-label="password"
              type="password"
              placeholder="Enter your password ..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             
            />
          </Form.Group>
          {errormsg ===true &&( <p className="error-msg" aria-label="error-msg">
             Your username or password is incorrect</p>)}
          <Button block disabled={!validateForm()} variant="info" type="submit" data-testid="login">
            Login
          </Button>{" "}
         
          <p className="message">
            Already registered? <Link to="/register">Sign Up</Link> |
                                <Link to="/home">  Back to Home</Link> </p> 
        </Form>
        {loggedIn ? <Redirect to="/Home" /> : <></>}
        </div>
        
       
      
</>   
  );
}
