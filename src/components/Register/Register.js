import React, { useState } from "react";
import "./Register.css";
import { Form,Button} from "react-bootstrap";
import {  Link } from "react-router-dom";

export default function Register({addUser,users}) {
  const [firstname ,setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const HandleAddUser = (event) => {
    if ( password !== confirmPassword)
    {
      console.log("The password is incorrect !!");
    }
    else 
    {
      event.preventDefault();

      addUser(firstname, lastname, email, password,confirmPassword);
      alert("User register with success");
      localStorage.setItem("firstname",firstname);
      console.log(users);
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  
   
  };
  return (
    <div className="cover-register">
    <Form className="register-form">
      <h2>Sign Up</h2>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          autoFocus
          type="firstname"
          placeholder="Enter your Firstname..."
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="lastname"
          placeholder="Enter your Lastname..."
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password ..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
         
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Repeat your password ..."
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
         
        />
      </Form.Group>
      <Button variant="info" type="submit" onClick={HandleAddUser}>
        Register
      </Button>{" "}
      <p className="message">
        <Link to="/home"> Back to Home</Link> | <Link to="/login"> Sign In</Link> </p> 
    </Form>
    </div>
  

     

  );
}
