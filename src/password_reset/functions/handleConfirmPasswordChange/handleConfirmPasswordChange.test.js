import handleConfirmPasswordChange from "./handleConfirmPasswordChange";

describe('Password input change', () => {
    test('Callback triggered to update field correctly', () => {
        let testField = '';

        function updateField (text) {
            testField = text;
        }
        handleConfirmPasswordChange('123', updateField)
        expect(testField).toBe('123');
    });
});