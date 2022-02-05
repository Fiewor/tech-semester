import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div>
            <h3>Login to your account</h3>
            <p>Thank you for logging in</p>
            <form>
                <label>Username
                    <input type="text" name="email" id="" placeholder="Email or phone number" required/>
                </label>
                <label>Password
                    <input type="password" name="password" id="" placeholder="Password" required/>
                </label>
                <input type="checkbox" name="" id="remember">Remember Me</input>
                <button type="submit" class="register-button">Login</button>

                <p>Don't have an account? <Link to="/Register">Register</Link></p>
            </form>
        </div>
    )
}

export default Login