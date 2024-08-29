import handlePasswordChange from "./handlePasswordChange";

describe('Password input change', () => {
    let password;
    let confirmPassword;

    beforeEach(() => {
        password = '';
        confirmPassword = '';
    });

    function setPassword (text) {
        password = text;
    }

    function setConfirmPassword (text) {
        confirmPassword = text;
    }

    test('Callback triggered to update field correctly', () => {
        handlePasswordChange('123', setPassword, setConfirmPassword);
        expect(password).toBe('123');
    });

    test('Confirm password field clears after updating password field', () => {
        handlePasswordChange('123', setPassword, setConfirmPassword);
        expect(confirmPassword).toBe('');
    });
});