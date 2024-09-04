// Handler for password input change

export default function handlePasswordChange (text, setPassword, validate) {
    validate();
    setPassword(text);
}