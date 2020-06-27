import { useState, useEffect } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const configObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({}),
            credentials: "include"
        }
        fetch("https://localhost:5001/api/auth/getcurrentuser", configObj)
            .then(r => {
                if(!r.ok){throw new Error(r)}
                return r.json()
            })
            .then(d => {
                setUser(d)
            })
            .catch(e => {
                setUser(null)
            })
    })
    return user;
}

export default useAuth;