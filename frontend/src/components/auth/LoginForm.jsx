import React from 'react'

const LoginForm = () => {
    return (
        <div className="flex flex-col justify-center py-40 min-h-screen overflow-hidden">
            <div className="w-50 p-6 m-auto bg-neutral-100 rounded-md shadow-md lg:max-w-xl">
            <img className="center " src="/UNCO_Activa.svg"></img>
                <h1 className="text-sm font-semibold text-center mt-10 text-gray-darker">
                    Iniciar Sesion
                </h1>
                <form className="mt-6">
                    <div className="mb-5">                        
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 h-input text-black bg-white border rounded-full focus:border-blue-cyan focus:ring-blue-cyan focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Ingresa tu Email'
                        />
                    </div>
                    <div className="mb-5">                        
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 h-input text-black bg-white border rounded-full focus:border-blue-cyan focus:ring-blue-cyan focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Ingresa tu contraseña'
                        />
                    </div>
                    <a href="#"
                        className="text-xs text-blue-cyan hover:underline"
                    >
                        Olvidaste tu contraseña?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 bg-board rounded-full hover:bg-yellow focus:outline-none focus:bg-yellow">
                            Iniciar Sesion
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-darker">
                    {" "}
                    No estas Registrado?{" "}
                    <a
                        href=""
                        className="font-medium text-blue-cyan hover:underline"
                    >
                        Registrate
                    </a>
                </p>
            </div>
        </div>
    )
}

export default LoginForm