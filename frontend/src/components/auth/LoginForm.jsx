import axios from 'axios'
import React from 'react'
import {  useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ButtonInput from '../elements/ButtonInput'
import InputForm from '../elements/InputForm'
// import useUser from '../hooks/useUser'
// import Login from './login'

const LoginForm = () => {
    const [user_name, setUser_name] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    // const {isLoginLoading, hasLoginError, login, isLogged} = useUser()

    /* useEffect(() => {
        if(isLogged) navigate('/')
        onLogin && onLogin()
    }, [isLogged, navigate, onLogin]) */

    const handleChange = (e) => {
        if(e.target.name === 'user_name'){
            setUser_name(e.target.value)
        }else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }else if(e.target.name === 'errMsg'){
            setErrMsg(e.target.value)
        }
    }
    
    const endpoint = 'http://127.0.0.1:8000/api/login'

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {user_name: user_name, password: password})
        .then(function (response) {
            console.log(response);
            const token = response.data.accesstoken;
            localStorage.setItem('token', token);
            console.log(token)
            navigate('/');
            alert('Login Successful');
            return token
        })
        .catch(function (errMsg) {
            console.log(errMsg);
            handleChange({target: {name: 'errMsg', value: 'Credenciales inválidas'}});
        });
    }


    return (
        <div className="flex flex-col justify-center h-screen bgln overflow-hidden">
            <div className="w-50 p-6 m-auto bg-neutral-100 rounded-md shadow-md lg:max-w-xl">
                <img className="py-5" src="/UNCO_Activa.svg"></img>
                <h1 className="text-sm font-semibold text-center text-gray-darker">
                    Iniciar Sesion
                </h1>
                
                <form onSubmit={handleSubmit} className="mt-6">
                    <InputForm 
                        type="text"
                        value={user_name}
                        id="user_name"
                        onChange={(e) => setUser_name(e.target.value)}
                        holder="Nombre de Usuario" 
                        divclass="mb-5"
                        required 
                    />
                    <InputForm 
                        type="password"
                        value={password}
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        holder="Password" 
                        divclass="pb-2"
                        required 
                    />
                    {errMsg ? <p className='text-red-500'>{errMsg}</p>: ''}
                    <Link to="#"
                        className="text-xs mt-6 text-blue-cyan hover:underline"
                    >
                        Olvidaste tu contraseña?
                    </Link>
                    <ButtonInput type="submit" text="Iniciar Sesion" divclass="mt-6" />
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-darker">
                    {" "}
                    No estas Registrado?{" "}
                    <Link
                        to="/registro"
                        className="font-medium text-blue-cyan hover:underline"
                    >
                        Registrate
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LoginForm