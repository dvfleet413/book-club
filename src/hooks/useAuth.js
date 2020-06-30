import { useState, useEffect } from 'react';
import { config } from '../constants'

export const useAuth = () => {
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
        fetch(`${config.url.API_URL}/api/auth/getcurrentuser`, configObj)
            .then(r => {
                if(!r.ok){throw new Error(r)}
                return r.json()
            })
            .then(d => setUser(d))
            .catch(e => setUser(null))
    }, [])

    return [user, setUser];
}

export default useAuth;