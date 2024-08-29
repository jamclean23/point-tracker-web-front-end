// Handles final validation check and submitting new password to server

// ====== IMPORTS ======

import validatePassword from "../validatePassword/validatePassword";


// ====== FUNCTIONS/EXPORT ======

/**
 * 
 * @param {String} password 
 * @param {String} confirmPassword 
 * @param {Function} setPasswordErr 
 * @param {Function} setConfirmPasswordErr 
 * @param {Function} setSubmitting 
 * @param {String} token
 * @param {Function} setServerMessage
 * @param {Function} setPasswordChanged
 * @returns 
 */
export default async function handleSubmitPress (
    password, 
    confirmPassword,
    setPasswordErr,
    setConfirmPasswordErr,
    setSubmitting,
    token = 'test token',
    setServerMessage,
    setPasswordChanged
) {

    
    // Validation check
    if (!validatePassword(password, confirmPassword, setPasswordErr, setConfirmPasswordErr)) {
        return;
    }
    
    try {
        setSubmitting(true);

        const response = await fetch('/auth/password_change', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer: ${token}`
            },
            body: JSON.stringify({
                password
            })
        });

        const result = await response.json();

        if (result.result === 'success') {
            setPasswordChanged(true);    
        } else {
            setServerMessage(result.message);
        }
    } catch (err) {
        console.error(err.message);
        console.trace();
        setServerMessage('An error occurred. Please try again later or contact an administrator.');
    } finally {
        setSubmitting(false);
    }
}