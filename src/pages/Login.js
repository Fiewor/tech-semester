import React from "react";

const Login = () => {
    return(
        <div>
            <h3>Login to your account</h3>
            <p>Thank you for logging input</p>
            <form>
                <label>Username</label>
                    <input type="text" name="" id="" placeholder="Email or phone number"></input>
                <label>Password</label>
                    <input type="password" name="" id="" placeholder="Password"></input>
                
                <input type="checkbox" name="" id="">Remember Me</input>
                <button type="submit" class="register-button">Login</button>

                <p>Don't have an account? Register</p>
            </form>
        </div>
    )
}

export default Login