// Validation for form inputs


// ====== FUNCTIONS ======

/**
 * 
 * @param {String} username 
 * @param {Function} setUsernameErr 
 * @param {String} password 
 * @param {Function} setPasswordErr
 */
export default function validate (
    username,
    setUsernameErr,
    password,
    setPasswordErr
) {

    // == Username
    
    const usernameErrs = [];

    // Not blank
    if (!username) {
        usernameErrs.push('Must not be blank.');
    }

    // == Password

    const passwordErrs = [];

    // Not blank
    if (!password) {
        passwordErrs.push('Must not be blank.');
    }

    // No spaces
    if (/\s/.test(password)) {
        passwordErrs.push('Password may not contain spaces.');
    }

    // == Error handling and return

    if (usernameErrs.length) {
        setUsernameErr(usernameErrs[0]);
    } else {
        setUsernameErr('');
    }

    if (passwordErrs.length) {
        setPasswordErr(passwordErrs[0]);
    } else {
        setPasswordErr('');
    }

    if (!usernameErrs.length && !passwordErrs.length) {
        return true;
    } else {
        return false;
    }
}