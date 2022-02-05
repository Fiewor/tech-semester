import React, { useState } from 'react';
import axios from 'axios';
import '../Register.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../features/auth/authSlice';
import store from "../app/store"
import * as constants from '../constants'
import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();

  const config = {
    headers:{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Methods": "POST"
    }
  };

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password1: '',
    password2: ''
  });
  console.log(formData)
    // useEffect(() => {
      const create = (event) => {
            event.preventDefault();
            axios
                .post(`${constants.URL}/api/users/auth/register/`, formData, config) //! destructure object inside post request?
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
          // replace decrement with action that updates user details and changes isLoggedIn to true
          dispatch(logIn({value: formData.last_name}))
          console.log("wetin dey d state:",store.getState())
        };
    // }, []);

  return (
    <div className="register-screen">
      <div className="blue-part">
        <p className="icon">Lottery display</p>
        <h2>A few clicks from creating your Lottery Display</h2>
      </div>
      <div>

        <h3>Register</h3>
        <h4>Manage all your lottery efficiently</h4>
        <p>
            Lets set you up so you can verify your personal account and begin setting up your profile
        </p>

        <form className="register-form">
            <label>First Name
                <input
                  type="text"
                  name="firstName"
                  onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                />
            </label>
            <label>Last Name
                <input
                  type="text"
                  name="lastName"
                  onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                />
            </label>
            <label>Phone Number
                <input
                  type="tel"
                  name="number"
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
            </label>
            <label>Email
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </label>
            <label>Password
                <input
                  type="password"
                  name="password1"
                  onChange={(e) => setFormData({ ...formData, password1: e.target.value })}
                />
            </label>
            <label>Confirm password
                <input
                  type="password"
                  name="password2"
                  onChange={(e) => setFormData({ ...formData, password2: e.target.value })}
                />
            </label>

            <div className="checkboxes">
              <input type="checkbox" name="" id=""/>
              <p>Yes, I want to recieve Lottery Display emails</p>
            </div>

            <div className="checkboxes">
              <input type="checkbox" name="" id=""/>
              <p>I agree to all the Terms, Privacy Pollicy and Fees</p>
            </div>

            <button type="submit" className="register-button" onClick={create}>
            Create Account
            </button>
            <p>Already have an account? <Link  to="/Login">Log In</Link></p>
        </form>
      </div>

    </div>
  );
};

export default Register;
