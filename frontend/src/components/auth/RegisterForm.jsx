import React from 'react'
import { Link } from 'react-router-dom'
import ButtonInput from '../elements/ButtonInput'
import InputForm from '../elements/InputForm'

const RegisterForm = () => {
    return (
        <div className="flex flex-col justify-center my-24 overflow-hidden">
            <div className="w-auto md:w-2/3 p-6 m-auto bg-neutral-100 rounded-md shadow-md lg:max-w-xl">
                <img className="center " src="/UNCO_Activa.svg"></img>
                <h1 className="text-sm font-semibold text-center mt-10 text-gray-darker">
                    Registrate
                </h1>
                <form className="mt-6">                    
                    <InputForm type="text" holder="Ingresa tu Nombre" divclass="mb-3" />
                    <InputForm type="text" holder="Ingresa tu Apellido" divclass="mb-3" />
                    <InputForm type="email" holder="Ingresa tu Email" divclass="mb-3" />
                    <InputForm type="email" holder="Ingresa una contraseña" divclass="mb-3 "/>

                    <ButtonInput  text="Registrarse" divclass="mt-6" />
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