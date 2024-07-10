import './register.css';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <>
      
    <div>
      <div class="register-container">
        
        <h1>Register form</h1>
        <form>
            <label for="Fullname " align = "left">Full name</label>
            <input type="text" id="Fullname" name="Full name" placeholder="Enter your Full name"/>
            <label for="Password" align = "left">Password</label>
            <input type="text" id="Password" name="Password" placeholder="Enter your Password"/>
            <label for="Address" align = "left">Address</label>
            <input type="text" id="Address" name="Address" placeholder="Enter your Address"/>
            <label for="Email" align = "left">Email</label>
            <input type="text" id="Email" name="Email" placeholder="Enter your Email"/>
            <label for="Phonenumber" align = "left">Phone number</label>
            <input type="text" id="Phonenumber" name="Phonenumber" placeholder="Enter your Phone number"/>
            <button type="submit">Sign up</button>
            <div class="links">
                <label> Already have account?</label>
                <Link to="/">Sign in</Link>
            </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default Register
