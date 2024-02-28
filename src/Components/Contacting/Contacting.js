import React, { useState, useEffect } from "react";
import "./Contacting.css";
import Lottie from "react-lottie";
import animationData from "..//Assets/Animation - 1709036717532.json"

function Contacting() {
    const [message, setMessage] = useState('');
    const [phoneNumberValid, setPhoneNumberValid] = useState(true);
    const [sentScreen, setSentScreen] = useState(false);
    const maxChars = 1000;

    const handleChange = (event) => {
        if (event.target.value.length <= maxChars) {
            setMessage(event.target.value);
        }
    };

    const validatePhoneNumber = (phoneNumber) => {
        const isValid = phoneNumber === '' || phoneNumber.startsWith('+');
        setPhoneNumberValid(isValid);
    };

    const handleScreen = () => {
        setSentScreen(!sentScreen);
    };

    useEffect(() => {
        let timer;
        if (sentScreen) {
            timer = setTimeout(() => {
                setSentScreen(false);
                setMessage(''); 
            }, 3000);
        }

        // Cleanup the timer
        return () => clearTimeout(timer);
    }, [sentScreen]);

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
                    {!sentScreen ? (
                        <form>
                            <div>
                                <input id="firstNameLastName" type='text' placeholder='First + Last Name' />
                            </div>
                            <div>
                                <input id="email" type='email' placeholder='Email' />
                            </div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='Phone Number (Optional)'
                                    className={phoneNumberValid ? '' : 'incorrect-input'}
                                    onChange={(e) => validatePhoneNumber(e.target.value)}
                                />
                            </div>
                            <div >
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
                            <button className="submit_button" type="submit" onClick={handleScreen} >Send Now!</button>
                        </form>
                    ) : (
                        <div className="message-succesfuly-sent-box">
                            <div className="animating-message-sent"> 
                                <Lottie options={{ animationData, loop: false, autoplay: true }} isClickToPauseDisabled={true} height={160} width={160} />
                            </div>
                            <h1>Thank you!</h1>
                            <h1>We'll get back to you soon</h1>
                        </div>
                    )}
                </div>
            </div> 
        </div>
    );
}

export default Contacting