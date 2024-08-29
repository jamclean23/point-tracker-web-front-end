// Validates password inputs, checks if passwords match

/**
 * 
 * @param {String} password 
 * @param {String} confirmPassword 
 * @param {Function} setPasswordErr 
 * @param {Function} setConfirmPasswordErr 
 */
export default function validatePassword (
    password, 
    confirmPassword, 
    setPasswordErr, 
    setConfirmPasswordErr
) {
    console.log('VALIDATING');
    console.log({password});
    console.log({confirmPassword});
    const passwordErrs = [];
    const confirmPasswordErrs = [];

    // Is a String
    if (!(typeof password === 'string')) {
        passwordErrs.push('Must be a string');
    }
    // Not blank

    // At least 8 characters
    if (password.length < 8 ) {
        passwordErrs.push('Must be at least 8 characters');
    }

    if (!password) {
        passwordErrs.push('May not be blank');
    }

    // No more than 20 characters
    if (password.length > 20) {
        passwordErrs.push('Must be no more than 20 characters');
    }

    // No spaces
    if (/\s/.test(password)) {
        passwordErrs.push('Spaces are not permitted');
    }

    // Matches confirm password
    if (!(password === confirmPassword)) {
        confirmPasswordErrs.push('Passwords do not match');
    }

    // Set errors to display to user. Only displays the last error given

    if (passwordErrs.length) {
        setPasswordErr(passwordErrs[passwordErrs.length-1]);
    } else {
        setPasswordErr('');
    }

    if (confirmPasswordErrs.length) {
        setConfirmPasswordErr(confirmPasswordErrs[confirmPasswordErrs.length-1]);
    } else {
        setConfirmPasswordErr('');
    }

    // Return true if no errors, false if errors.

    if (passwordErrs.length || confirmPasswordErrs.length) {
        return false;
    } else {
        return true;
    }
}