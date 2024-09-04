// Handler for username input change

export default function handleUsernameChange (text, setUsername, validate) {
    validate();
    setUsername(text);
}