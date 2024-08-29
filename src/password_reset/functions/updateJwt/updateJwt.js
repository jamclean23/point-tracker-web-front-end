// Retrieves jwt from data attribute and sets it to state

export default function updateJwt (setJwt) {
    const jwt = document.getElementById('root').dataset.jwt;
    setJwt(jwt);
}