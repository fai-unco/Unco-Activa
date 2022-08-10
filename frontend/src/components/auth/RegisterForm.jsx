import React from 'react'

const RegisterForm = () => {
    return (
        <div className="flex flex-col justify-center my-24 overflow-hidden">
            <div className="w-50 p-6 m-auto bg-neutral-100 rounded-md shadow-md lg:max-w-xl">
                <img className="center " src="/UNCO_Activa.svg"></img>
                <h1 className="text-sm font-semibold text-center mt-10 text-gray-darker">
                    Registrate
                </h1>
                <form className="mt-6">
                    <div className="mb-5">
                        
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 h-input text-black bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Ingresa tu Nombre'
                        />
                    </div>
                    <div className="mb-5">                        
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 h-input text-black bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Ingresa tu Apellido'
                        />
                    </div>
                    <div className="mb-5">                        
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 h-input text-black bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Ingresa tu Email'
                        />
                    </div>
                    <div className="mb-5">                        
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 h-input text-black bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Ingresa una Contraseña'
                        />
                    </div>
                    <div className="mt-6">
                        <button 
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