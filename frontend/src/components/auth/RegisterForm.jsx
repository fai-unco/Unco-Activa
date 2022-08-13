import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

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
        
        navigate('/registro')
    }
    
    return (
        <div className="grid items-center justify-center py-40 min-h-screen overflow-hidden">
            <div className="w-50 p-6 m-auto bg-neutral-100 rounded-md shadow-md lg:max-w-xl">
                <img className="center " src="/UNCO_Activa.svg"></img>
                <h1 className="text-sm font-semibold text-center mt-10 text-gray-darker">
                    Registrate
                </h1>
                <form className="mt-6"  onSubmit={store}>
                    
                    <div className="mb-5">
                        
                        <input
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 h-input text-black bg-white border rounded-full focus:border-blue-cyan focus:ring-blue-cyan focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Ingresa tu Nombre'
                        />
                    </div>
                    <div className="mb-5">                        
                        <input
                            value={surname}
                            onChange={(e)=>setSurname(e.target.value)}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 h-input text-black bg-white border rounded-full focus:border-blue-cyan focus:ring-blue-cyan focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Ingresa tu Apellido'
                        />
                    </div>
                    <div className="mb-5">                        
                        <input
                            value={dni}
                            onChange={(e)=>setDni(e.target.value)}
                            type="number"
                            className="block w-full px-4 py-2 mt-2 h-input text-black bg-white border rounded-full focus:border-blue-cyan focus:ring-blue-cyan focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Ingresa tu DNI'
                        />
                    </div>
                    <div className="mb-5">                        
                        <input
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                            type="number"
                            className="block w-full px-4 py-2 mt-2 h-input text-black bg-white border rounded-full focus:border-blue-cyan focus:ring-blue-cyan focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Ingresa tu telefono'
                        />
                    </div>
                    <div className="mb-5">                        
                        <input
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 h-input text-black bg-white border rounded-full focus:border-blue-cyan focus:ring-blue-cyan focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Ingresa tu Email'
                        />
                    </div>
                    <div className="mb-5">                        
                        <input
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 h-input text-black bg-white border rounded-full focus:border-blue-cyan focus:ring-blue-cyan focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Ingresa una Contraseña'
                        />
                    </div>
                    <div className="mt-6">
                        <button 
                            type='submit'
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 bg-board rounded-full hover:bg-yellow focus:outline-none focus:bg-yellow">
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm