import React from 'react'
import { Link } from 'react-router-dom'
import ButtonInput from '../components/elements/ButtonInput'
import InputColForm from '../components/inscriptionform/InputColForm'
import InputFullForm from '../components/inscriptionform/InputFullForm'

const endpoint = 'http://localhost:8000/api/update'

const PreinscriptionForm = () => {
    // const CreateProduct = () => {
    //     const [adress, setadress] = useState('')
    //     const [adress, setadress] = useState('')
    //     const [adress, setadress] = useState('')
    //     const [adress, setadress] = useState('')
    //     const [adress, setadress] = useState('')
    //     const [adress, setadress] = useState('')
    //     const [adress, setadress] = useState('')
    //     const [adress, setadress] = useState('')
    //     const [adress, setadress] = useState('')
    //     const [adress, setadress] = useState('')


    //     const navigate = useNavigate()

    //     const store = async (e) => {
    //         e.preventDefault()
    //         await axios.post(endpoint, {description: description, price: price, stock: stock})
    //         navigate('/')
    //     }
    return (
        <div className="flex flex-col mx-8 my-24 rounded-md overflow-hidden">
            <div className="w-full lg:max-w-7xl p-6 m-auto bg-neutral-100 rounded-md shadow-md">
                <img className="center" src="/UNCO_Activa.svg"></img>
                <h1 className="text-4xl font-semibold text-center mt-10 mb-10 text-gray-darker">
                    Inscribirse
                </h1>
                <form>
                    <InputFullForm type="text" label="Direccion de Domicilio" id="adress" />
                    <InputColForm typefirst="text" idfirst="name" labelfirst="Nombre" typesecond="text" idsecond="surname" labelsecond="Apellido" />
                    <InputColForm typefirst="date" idfirst="birth" labelfirst="Fecha de Nacimiento" typesecond="select" idsecond="gender" labelsecond="Genero" />
                    <InputColForm typefirst="text" idfirst="country" labelfirst="País" typesecond="text" idsecond="province" labelsecond="Provincia" />
                    <InputColForm typefirst="text" idfirst="city" labelfirst="Localidad" typesecond="text" idsecond="social_work" labelsecond="ObraSocial" />
                    <InputColForm typefirst="select" idfirst="shirt_size" labelfirst="Talla de remera" idsecond="vacio" typesecond="text"  labelsecond="vacio"  />
                    <div className="relative z-0 mb-6 w-full group">
                        <span className="text-lg  dark:text-black">Contacto en caso de emergencias</span>
                    </div>
                    <InputFullForm type="text" label="Nombre y Apellido" id="contac_fullname" />
                    <InputColForm typefirst="text" idfirst="bond" labelfirst="Vinculo de contacto" typesecond="tel" idsecond="contact_phone" labelsecond="Numero Telefonico" />
                    <ButtonInput text="Enviar" divclass="lg:w-28 md:w-28 sm:w-auto" />
                </form>
            </div>
        </div >
    )
}

export default PreinscriptionForm