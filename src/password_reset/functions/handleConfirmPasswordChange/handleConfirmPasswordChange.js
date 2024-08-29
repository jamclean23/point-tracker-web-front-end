// Updates password state to reflect user input

export default function handleConfirmPasswordChange (text, setConfirmPassword, validatePassword) {
    setConfirmPassword(text);
    validatePassword(text);
}