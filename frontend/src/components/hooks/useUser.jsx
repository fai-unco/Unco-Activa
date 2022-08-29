import axios from "axios";
import { useCallback, useContext, useState } from "react";
import Context from "./userContext";
import Login from "../auth/login";

export default function useUser () {
    const {token, setToken} = useContext(Context)
    const [state, setState] = useState({loading: false, error: false})
    
    const login = useCallback((user_name, password) => {
        // setState({loading: true, error: false})
        
        Login({user_name, password})
        .then(token => {
            console.log(user_name, password)
            console.log(token)
            window.sessionStorage.setItem('token', token)
            setState({loading: false, error: false})
            setToken(token)
        })
        .catch(err => {
            console.error(err)
            window.sessionStorage.removeItem('token')
            setState({loading: true, error: true})
        })
    }, [setToken])

    const endpoint = 'http://127.0.0.1:8000/api/logout'
    const  logout = async () =>{
        await axios.post(endpoint)
        .then(token => {
            console.log(token)
            setToken(null)
        })
        .catch(err => {
            console.error(err)
        })
        
    }

    return {
        isLogged: Boolean(token),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout
    }
}