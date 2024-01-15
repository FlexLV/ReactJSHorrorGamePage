import React, { useState } from "react";
import "./Contacting.css";

function Contacting() {
    const [message, setMessage] = useState('');
    const maxChars = 1000;

    const handleChange = (event) => {
      if (event.target.value.length <= maxChars) {
        setMessage(event.target.value);
      }
    };

    return(
        <div className='contact-form-background'>
            <div className="aboutus">
                <h1> Contact us</h1>
                <hr/>
                <p>ernisd621@gmail.com</p>
                <p>+371 22325595 - Ernests Dejus</p>
                <p>Wasington state 93</p>
                <p>9 AM to 5PM Monday through Friday</p>
            </div>
            <div className="contact-form-container">
                <div className='contact-form'>
                    <form>
                        <div className="firstNameLastName">
                            <input id="firstNameLastName" type='text' placeholder='First + Last Name' />
                        </div>
                        <div className="email-box">
                            <input id="email" type='email' placeholder='Email' />
                        </div>
                        <div className="phoneNumber">
                            <input type='numbers' placeholder='Phone Number (Optional)' />
                        </div>
                        <div className="text-box">
                            <textarea 
                                type='text' 
                                placeholder='Please leave your message (max 1,000 characters)' 
                                value={message}
                                onChange={handleChange}
                            />
                            <div className="char-count">
                                {message.length}/{maxChars}
                            </div>
                        </div>
                        <input className="submit_button" type="submit" value="Send Now" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacting;