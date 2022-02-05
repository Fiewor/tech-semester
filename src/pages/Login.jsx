import React from "react";

const Login = () => {
    return(
        <div>
            <h3>Login to your account</h3>
            <p>Thank you for logging in</p>
            <form>
                <label>Username</label>
                    <input type="text" name="email" id="" placeholder="Email or phone number"></input>
                <label>Password</label>
                    <input type="password" name="password" id="" placeholder="Password"></input>
                
                <input type="checkbox" name="" id="remember">Remember Me</input>
                <button type="submit" class="register-button">Login</button>

                <p>Don't have an account? Register</p>
            </form>
        </div>
    )
}

export default Login