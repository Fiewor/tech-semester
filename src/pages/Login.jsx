import React, {useState} from "react";
import { Link } from "react-router-dom";
import * as constants from '../constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logIn } from '../features/auth/authSlice';
import "../Login.css"

const Login = () => {
    const dispatch = useDispatch();
    const [details, setDetails] = useState({
        email: "",
        password: ""
    })

    // const enter = (event) => {
    //         event.preventDefault();
    //         axios
    //             .post(`${constants.URL}/api/users/auth/login/`)
    //             .then((res) => console.log(res))
    //             .catch((err) => console.log(err));
    //       dispatch(logIn({value: details.email}))
    // }

    return(
        <div className="login-screen">
            <div className="blue-part">
                <p className="icon">Lottery display</p>
                <h2>A few clicks from creating your Lottery Display</h2>
            </div>
            
            <div className="other-part">
                <h3>Login to your account</h3>
                <p>Thank you for logging in</p>

                <form className="login-form">
                    <label>Username
                        <input
                            type="text"
                            name="email"
                            id=""
                            placeholder="Email or phone number" 
                            required
                            onChange={(e) => setDetails({ ...details, email: e.target.value })}
                        />
                    </label>
                    <label>Password
                        <input
                            type="password"
                            name="password"
                            id=""
                            placeholder="Password"
                            required
                            onChange={(e) => setDetails({ ...details, password: e.target.value })}
                        />
                    </label>
                    <div className="checkboxes">
                        <input type="checkbox" name="" id="remember"/>
                        <p>Remember Me</p>
                    </div>
                    <Link to="/home" className="login-button"><button type="submit">Login</button></Link>

                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </form>
            </div>
            
        </div>
    )
}

export default Login