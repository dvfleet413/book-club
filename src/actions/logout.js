const logout = () => {
    const configObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({}),
        credentials: "include"
    }
    fetch("https://localhost:5001/api/auth/logout", configObj)
        .then(r => r.json())
        .then(d => console.log(d))
        .catch(e => console.log(e))
}

export default logout;