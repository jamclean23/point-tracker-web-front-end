// Main app component

// ====== IMPORTS ======

// React
import { useState, useEffect } from 'react'

// Styles
import './App.css'

// Functions
import handlePasswordChange from './functions/handlePasswordChange/handlePasswordChange';
import handleConfirmPasswordChange from './functions/handleConfirmPasswordChange/handleConfirmPasswordChange';
import validatePassword from './functions/validatePassword/validatePassword';
import handleSubmitPress from './functions/handleSubmitPress/handleSubmitPress';
import updateJwt from './functions/updateJwt/updateJwt';


// ====== FUNCTIONS ======

function App() {

    // == STATE

    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordErr, setConfirmPasswordErr] = useState('');

    const [submitting, setSubmitting] = useState(false);

    const [serverMessage, setServerMessage] = useState('');

    const [passwordChanged, setPasswordChanged] = useState(false);

    const [jwt, setJwt] = useState('');


    // == LISTENERS

    // Mount
    useEffect(() => {
        updateJwt(setJwt);
    }, []);

    // Password validation
    // useEffect(() => {
    //     validatePassword(
    //         password,
    //         confirmPassword,
    //         setPasswordErr,
    //         setConfirmPasswordErr
    //     );
    // }, [password, confirmPassword]);

    // == CONDITIONAL BLOCKS

    const form = (
        <>
            <div className='inputWrapper'>
                <label>New Password</label>
                <input
                    placeholder='New Password'
                    type='password'
                    value={password}
                    onChange={(event) => handlePasswordChange(
                        event.target.value, 
                        setPassword, 
                        setConfirmPassword,
                        () => {
                            validatePassword(
                                event.target.value,
                                confirmPassword,
                                setPasswordErr,
                                setConfirmPasswordErr
                            );
                        }
                    )}
                    />
                <span className='errSpan errText'>
                    {/* Password error or non breaking space */}
                    {passwordErr || '\u00A0'}
                </span>
            </div>

            <div className='inputWrapper'>
                <label>Confirm Password</label>
                <input
                    placeholder='Confirm Password'
                    type='password'
                    value={confirmPassword}
                    onChange={(event) => handleConfirmPasswordChange(
                        event.target.value,
                        setConfirmPassword,
                        () => {
                            validatePassword(
                                password,
                                event.target.value,
                                setPasswordErr,
                                setConfirmPasswordErr
                            );
                        }
                    )}
                    />
                <span className='errSpan errText'>
                    {/* Confirm password error or non breaking space */}
                    {confirmPasswordErr || '\u00A0'}
                </span>
            </div>

            <div className='btnWrapper'>
                <button
                    id='submitBtn'
                    disabled={submitting}
                    onClick={() => handleSubmitPress(
                        password,
                        confirmPassword,
                        setPasswordErr,
                        setConfirmPasswordErr,
                        setSubmitting,
                        jwt,
                        setServerMessage,
                        setPasswordChanged
                    )}
                >
                    Submit
                </button>
            </div>
            <p id='serverMessage' className='errText'>{serverMessage}</p>
        </>
    );

    const successMessage = (
        <>
            <p id='successMessage'>Your password has been updated. Please log in on the Point Tracker mobile app.</p>
        </>
    );

    // == RENDER

    return (
        <>
            <h1><span className='pointSpan'>Point </span><span className='trackerSpan'>Tracker</span></h1>
            <main>    
                <h2>Password Reset</h2>

                {
                    passwordChanged
                        ? successMessage
                        : form
                }

            </main>
        </>
    )
}

export default App
