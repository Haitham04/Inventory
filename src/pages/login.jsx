import React from 'react'
import './login.css';
import picture from './../assets/Login-image.jpg'
import { Link } from 'react-router-dom';
 function Login() {
  return (


    <div>
      <div className="login-container">
        <img src={picture} alt="Login Image" class="Login-image" height="100px" width = "200px"/>
        <h1>Login form</h1>
        <form>
            <label for="username" align = "left">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username"/>
            
            <label for="password" align = "left">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password"/>
            
            <Link to='/Home'> <button type="submit" > Login</button></Link>
         
            
            <div class="remember-me">
                <input type="checkbox" id="remember"/>
                <label for="remember">Remember me</label>
            </div>
            
            <div class="links">
                <label> Don't have account?</label>
                <Link to="/register">Sign up</Link>
            </div>
        </form>
    </div>
    </div>
  )
}
export default Login
