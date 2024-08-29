// Test for password validation

// ====== IMPORTS ======

import validatePassword from "./validatePassword";


// ====== TESTS =======

describe('Password Validation testing', () => {
    let passwordErr;
    let confirmPasswordErr;

    function mockSetPasswordErr (text) {
        passwordErr = text;
    }

    function mockSetConfirmPasswordErr (text) {
        confirmPasswordErr = text;
    }

    beforeEach(() => {
        passwordErr = '';
        confirmPasswordErr = '';

    });

    test('Valid password with match passes', () => {
        const password = '123456789';
        const confirmPassword = '123456789';

        validatePassword(password, confirmPassword, mockSetPasswordErr, mockSetConfirmPasswordErr);
        
        expect(passwordErr).toBe("");
        expect(confirmPasswordErr).toBe("");
    });

    test('Non-string password fails', () => {
        const password = 5;
        const confirmPassword = '';

        validatePassword(password, confirmPassword, mockSetPasswordErr, mockSetConfirmPasswordErr);

        expect(passwordErr).toBe('Must be a string');
    });

    test('Blank password fails', () => {
        const password = '';
        const confirmPassword = '';

        validatePassword(password, confirmPassword, mockSetPasswordErr, mockSetConfirmPasswordErr);

        expect(passwordErr).toBe('May not be blank');
    });

    test('Short password fails', () => {
        const password = '123456';
        const confirmPassword = '123456';

        validatePassword(password, confirmPassword, mockSetPasswordErr, mockSetConfirmPasswordErr);

        expect(passwordErr).toBe('Must be at least 8 characters');
    });

    test('Long password fails', () => {
        const password = '12345689123456789123456789123456789';
        const confirmPassword = '12345689123456789123456789123456789';

        validatePassword(password, confirmPassword, mockSetPasswordErr, mockSetConfirmPasswordErr);

        expect(passwordErr).toBe('Must be no more than 20 characters');
    });

    test('Password with spaces fails', () => {
        const password = '1234 56789';
        const confirmPassword = '1234 56789';

        validatePassword(password, confirmPassword, mockSetPasswordErr, mockSetConfirmPasswordErr);

        expect(passwordErr).toBe('Spaces are not permitted');
    });

    test('Unmatched passwords fail', () => {
        const password = '1234567890';
        const confirmPassword = '123456789';

        validatePassword(password, confirmPassword, mockSetPasswordErr, mockSetConfirmPasswordErr);

        expect(confirmPasswordErr).toBe('Passwords do not match');
    });

    test('Returns true if no errors', () => {
        const password = '123456789';
        const confirmPassword = '123456789';

        expect(validatePassword(password, confirmPassword, mockSetPasswordErr, mockSetConfirmPasswordErr)).toBe(true); 
    });

    test('Returns false if errors', () => {
        const password = '123456789';
        const confirmPassword = '1234567890';

        expect(validatePassword(password, confirmPassword, mockSetPasswordErr, mockSetConfirmPasswordErr)).toBe(false); 
    });
});