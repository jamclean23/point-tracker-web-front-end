// Handles submit button press

// ====== FUNCTIONS ======

/**
 * 
 * @param {String} username 
 * @param {Function} setUsername 
 * @param {Function} setUsernameErr 
 * @param {String} password 
 * @param {Function} setPassword 
 * @param {Function} setPasswordErr 
 * @param {Function} setSubmitting 
 * @param {Function} validate 
 * @param {Function} setServerErr 
 */
export default async function handleSubmitPress (
    username,
    setUsername,
    setUsernameErr,
    password,
    setPassword,
    setPasswordErr,
    setSubmitting,
    validate,
    setServerErr
) {
    // Fail conditions
    if (!validate()) {
        return;
    }

    // Submit request
    setSubmitting(true);
    try {

        // Request
        const response = await fetch('/auth/web_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const result = await response.json();

        // If successful, reload the page
        if (result.result === 'success') {
            window.location.reload;
        }

        // If not successful, distribute errors
        if (result.result === 'failed') {
            distributeErrors(setUsernameErr, setPasswordErr, setServerErr, result.messages);
        }
    } catch (err) {
        setServerErr('Something went wrong, please try again or contact an administrator.');
        console.error(err.message);
        console.error(err.trace);
    } finally {
        setSubmitting(false);
    }
}

function distributeErrors (setUsernameErr, setPasswordErr, setServerErr, errMessages) {
    errMessages.forEach((err) => {
        switch (err.field) {
            case 'username':
                setUsernameErr(err.message);
                break;
            case 'password':
                setPasswordErr(err.message);
                break;
            case 'serverMessage':
                setServerErr(err.message);
                break;
        }
    });
}