import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
    
        // Debug: Log the values before sending the request
        console.log(firstName, lastName, username, email, password);
    
        const url = action === "Login" ? 'http://localhost/login.php' : 'http://localhost/signup.php';
        const formData = new FormData();
        formData.append('firstname', firstName);
        formData.append('lastname', lastName);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
    
        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            // Handle success or errors here
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors here
        });
    };

    return (
        <div className="container">
            <div className="box-container">
            <video src="/images/141158 (1440p).mp4" autoPlay loop muted />
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit} method="post">
            <div className="inputs">
                {action === "Signup" && <>
                    <div className="input">
                        <img src={user_icon} alt="User Icon" />
                        <input type="text" placeholder="Enter your first name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div className="input">
                        <img src={user_icon} alt="User Icon" />
                        <input type="text" placeholder="Enter your last name" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </div>
                    <div className="input">
                        <img src={user_icon} alt="User Icon" />
                        <input type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                </>}
                <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
            </div>
            {action === "Signup" ? null : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
            <div className="submit-container">
                <div className={action === "Login" ? "submit" : "submit gray"} onClick={() => { setAction("Signup") }} >Sign Up</div>
                <div className={action === "Signup" ? "submit" : "submit gray"} onClick={() => { setAction("Login") }} >Login</div>
                <button className={action === "Signup" ? "submit" : "submit gray"} type="submit">Submit</button>

            </div>
            </form>
            </div>
        </div>
    );
}

export default LoginSignup;