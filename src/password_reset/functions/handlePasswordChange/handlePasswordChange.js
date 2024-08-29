// Updates password state to reflect user input, clears confirm password field

export default function handlePasswordChange (text, setPassword, setConfirmPassword, validatePassword) {    
    setConfirmPassword('');
    setPassword(text);
    validatePassword(text);
}   