import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ButtonInput from '../elements/ButtonInput'
import InputForm from '../elements/InputForm'

const endpoint = 'http://127.0.0.1:8000/api/user'

const RegisterForm = () => {
    const [name, setName] = useState('')
    const [dni, setDni] = useState('')
    const [phone, setPhone] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        console.log(e)
        e.preventDefault()
        await axios.post(endpoint,  {name: name, surname: surname, dni: dni, phone: phone, email: email, password: password})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        
        navigate('/')
    }
    
    return (

        <div className="grid items-center justify-center py-40 min-h-screen overflow-hidden">
            <div className="w-auto p-6 m-auto bg-neutral-100 rounded-md shadow-md lg:max-w-xl">
                <img className="center " src="/UNCO_Activa.svg"></img>
                <h1 className="text-sm font-semibold text-center mt-10 text-gray-darker">
                    Registrate
                </h1>
                <form className="mt-6"  onSubmit={store}>  
                    <InputForm 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        type="text"
                        holder="Ingresa tu Nombre" 
                        divclass="mb-3" 
                />
                <InputForm 
                    value={surname} 
                    onChange={(e)=>setSurname(e.target.value)} 
                    type="text" 
                    holder="Ingresa tu Apellido" 
                    divclass="mb-3" 
                />
                <InputForm 
                    value={dni} 
                    onChange={(e)=>setDni(e.target.value)} 
                    type="number" 
                    holder="Ingresa tu DNI" 
                    divclass="mb-3" 
                />
                <InputForm 
                    value={phone} 
                    onChange={(e)=>setPhone(e.target.value)} 
                    type="tel" 
                    holder="Ingresa tu telefono" 
                    divclass="mb-3" 
                />
                <InputForm 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    type="email" 
                    holder="Ingresa tu Email" 
                    divclass="mb-3" 
                />
                <InputForm 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)} 
                    type="password" 
                    holder="Ingresa una contraseña" 
                    divclass="mb-3 "
                />


                    <ButtonInput type="submit" text="Registrarse" divclass="mt-6" />
                </form>
                <p className="mt-8 text-xs font-light text-center text-gray-darker">
                    {" "}
                    Ya tienes una cuenta?{" "}
                    <Link
                        to="/registro"
                        className="font-medium text-blue-cyan hover:underline"
                    >
                        Inicia Sesion
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterForm