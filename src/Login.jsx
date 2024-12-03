import React, { useState } from "react";
import './Login.css';
// The Login component receives props from its parent component
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [pass, setPass] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    const users = [
        { email: 'user@example.com', password: 'password123' },
        // Add more user credentials if needed
    ];

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the email and password match any user in the temporary database
        const user = users.find(user => user.email === email && user.password === pass);

        if (user) {
            // Successful login logic (for example, redirect to Dashboard)
            props.onFormSwitch('Dashboard');
        } else {
            // Display error message for invalid credentials
            setErrorMessage('Invalid credentials');
        }
    }

    // The component's return function renders the login form
    return (
        <div className="containering">
            <div className="auth-form-containering">
                <div className="Title-label">Login</div> {/* Title label */}
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email"className="loginlabel">Email:</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="you@example.com"
                        id="email"
                        name="Email"
                        className="login-form input"
                    />
                    <label htmlFor="password" className="loginlabel">Password:</label>
                    <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter 6 Characters or more"                
                        id="password"
                        name="Password"
                        className="login-form input"
                    />
                    <div className="password-toggle">
                    <span onClick={togglePasswordVisibility}>
                      {showPassword ? '🔓 Hide Password' : '🔒 Show Password'} 
                     </span>
                    </div>
                    <div className="login-form-group">
                        <input type="checkbox" id="remember-me" name="rememberMe" />
                       
                    </div>
                    <label className="rememberme">Remember me</label>
                    <button className="link-forgotpassword" onClick={() => props.onFormSwitch('Forgot-Password')}>
                        Forgot Password?
                    </button>
                    <button type="submit" onClick={() => props.onFormSwitch('Dashboard')}>LOGIN</button>
                </form>
                <div className="form-actions">
                    <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
                        Don't have an account yet? Sign Up
                    </button>

                    <button className="guest" onClick={() => props.onFormSwitch('Guest')}>
                        Continue as Guest
                    </button>
               


                </div>
                
            </div>
        </div>
    );
}
