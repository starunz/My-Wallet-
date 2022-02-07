import axios from "axios";

const base = 'http://localhost:5000';

const config = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

const signUp = (body) => {
    const promisse = axios.post(`${base}/sign-up`, body)

    return promisse;
}

const signIn = (body) => {
    const promisse = axios.post(`${base}/sign-in`, body)

    return promisse;
}

const addEntry = (body, token) => {
    const newConfig = config(token)
    const promisse = axios.post(`${base}/add-entry`, body, newConfig);

    return promisse;
}

const addExit = (body, token) => {
    const newConfig = config(token)
    const promisse = axios.post(`${base}/add-exit`, body, newConfig);

    return promisse;
}

const api = {
    signUp,
    signIn,
    addEntry,
    addExit,
}

export default api;