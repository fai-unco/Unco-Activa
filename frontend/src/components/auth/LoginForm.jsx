import React from 'react'
import { Link } from 'react-router-dom'
import ButtonInput from '../elements/ButtonInput'
import InputForm from '../elements/InputForm'

const LoginForm = () => {
    return (
        <div className="flex flex-col justify-center my-24 overflow-hidden">
            <div className="w-50 p-6 m-auto bg-neutral-100 rounded-md shadow-md lg:max-w-xl">
                <img className="center " src="/UNCO_Activa.svg"></img>
                <h1 className="text-sm font-semibold text-center mt-10 text-gray-darker">
                    Iniciar Sesion
                </h1>
                <form className="mt-6">
                    <InputForm type="email" holder="Ingresa tu Email" divclass="mb-5" />
                    <InputForm type="password" holder="Ingresa tu contraseña" />
                    <Link to="#"
                        className="text-xs text-blue-cyan hover:underline"
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