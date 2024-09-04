// Main App component for Admin Dashboard

// ====== IMPORTS ======

// React
import { useState } from 'react';

// Styling
import './App.css';

// Functions
import handleUsernameChange from './functions/handleUsernameChange';
import handlePasswordChange from './functions/handlePasswordChange';
import handleSubmitPress from './functions/handleSubmitPress';
import validate from './functions/validate';



//  ====== FUNCTIONS ======

export default function App () {

    // == STATE

    const [username, setUsername] = useState('');
    const [usernameErr, setUsernameErr] = useState('');

    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const [serverErr, setServerErr] = useState('');

    const [submitting, setSubmitting] = useState(false);

    // == RENDER
    
    return (
        <>
            <h1><span className='pointSpan'>Point </span><span className='trackerSpan'>Tracker</span></h1>
            <main>    
                <h2>Admin Dashboard Login</h2>

                {/* Username */}
                <div className='inputWrapper'>
                    <label>Username</label>
                    <input 
                        type='text'
                        placeholder='Username'
                        maxLength={20}
                        value={username}
                        onChange={(event) => {
                            handleUsernameChange(
                                event.target.value, 
                                setUsername,
                                () => {
                                    validate(
                                        event.target.value,
                                        setUsernameErr,
                                        password,
                                        setPasswordErr
                                    );
                                }
                            );
                        }}
                    />
                    <span className='errSpan errText'>
                        {/* Password error or non breaking space */}
                        {usernameErr || '\u00A0'}
                    </span>
                </div>

                {/* Password */}
                <div className='inputWrapper'>
                    <label>Password</label>
                    <input
                        maxLength={20}
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(event) => {
                            handlePasswordChange(
                                event.target.value, 
                                setPassword,
                                () => {
                                    validate(
                                        username,
                                        setUsernameErr,
                                        event.target.value,
                                        setPasswordErr
                                    );
                                }                                
                            );
                        }}
                    />
                    <span className='errSpan errText'>
                        {/* Password error or non breaking space */}
                        {passwordErr || '\u00A0'}
                    </span>
                </div>

                <div className='btnWrapper'>
                    <button
                        id='submitBtn'
                        disabled={submitting}
                        onClick={() => handleSubmitPress(
                            username,
                            setUsername,
                            setUsernameErr,
                            password,
                            setPassword,
                            setPasswordErr,
                            setSubmitting,
                            () => {
                                return validate(
                                    username,
                                    setUsernameErr,
                                    password,
                                    setPasswordErr
                                )
                            },
                            setServerErr
                        )}
                    >
                        Submit
                    </button>
                </div>
                <p id='serverMessage' className='errText'>{serverErr}</p>
            </main>
        </>
    );
}