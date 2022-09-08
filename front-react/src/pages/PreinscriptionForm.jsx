import AppLayout from 'components/Layouts/AppLayout';
import axios from 'axios'
import React, { useState } from 'react'
import ButtonInput from 'components/elements/ButtonInput'
import InputColForm from 'components/inscriptionform/InputColForm'
import DatePicker, { registerLocale } from 'react-datepicker';
import Select from 'react-select';
import Checkbox from '@mui/material/Checkbox';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import Moment from 'moment';
import AlertSuccess from 'components/alerts/AlertSuccess'
import CategoriePaper from 'components/elements/CategoriePaper';
import ModalRules from 'components/inscriptionform/ModalRules';
import ModalInscription from 'components/inscriptionform/ModalInscription';
import {useAuth} from 'hooks/auth'

registerLocale('es', es);

const endpoint = 'http://127.0.0.1:8000/api/inscription'
const sizes = [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' }
];
const genders = [
    { value: 'Masculino', label: 'Masculino' },
    { value: 'Femenino', label: 'Femenino' },
    { value: 'X', label: 'X' },
    { value: 'No se', label: 'No se' }
];
const PreinscriptionForm = (props) => {

  const { user } = useAuth({ middleware: 'auth' })
  if(!user){
    window.location.pathname = '/login'
  }

    const [opensucces, setopensucces] = useState(false);
    const [openfail, setopenfail] = useState(false);
    const [name, setname] = useState({ campo: '', valido: null })
    const [surname, setsurname] = useState({ campo: '', valido: null })
    const [gender, setgender] = useState({ campo: '', valido: null })
    const [birth, setbirth] = useState({ campo: null, valido: null })
    const [dni, setdni] = useState({ campo: '', valido: null })
    const [email, setemail] = useState({ campo: '', valido: null })
    const [country, setcountry] = useState({ campo: '', valido: null })
    const [province, setprovince] = useState({ campo: '', valido: null })
    const [city, setcity] = useState({ campo: '', valido: null })
    const [address, setaddress] = useState({ campo: '', valido: null })
    const [phone, setphone] = useState({ campo: '', valido: null })
    const [social_work, setsocial_work] = useState({ campo: '', valido: null })
    const [shirt_size, setshirt_size] = useState({ campo: '', valido: null })
    const [emergency_contac_name, setemergency_contac_name] = useState({ campo: '', valido: null })
    const [emergency_contac_phone, setemergency_contac_phone] = useState({ campo: '', valido: null })
    const [emergency_contac_bond, setemergency_contac_bond] = useState({ campo: '', valido: null })
    const [checked, setChecked] = useState(null);
    const [openrules, setopenrules] = useState(false);
    const [openInscription, setopenInscription] = useState(false)
    const [errorMessage, seterrorMessage] = useState('Completa todos los campos obligatorios del formulario por favor.');

    const arraycampos = [
        [checked, setChecked],
        [name, setname],
        [surname, setsurname],
        [gender, setgender],
        [birth, setbirth],
        [dni, setdni],
        [email, setemail],
        [country, setcountry],
        [province, setprovince],
        [city, setcity],
        [address, setaddress],
        [phone, setphone],
        [shirt_size, setshirt_size],
        [emergency_contac_name, setemergency_contac_name],
        [emergency_contac_bond, setemergency_contac_bond],
        [emergency_contac_phone, setemergency_contac_phone]
    ]

    const expresiones = {
        address: /^[a-zA-ZÀ-ÿ-Z0-9_-\s]{4,45}$/, // Letras, numeros, guion y guion_bajo
        name: /^[a-zA-ZÀ-ÿ\s]{3,50}$/, // Letras y espacios, pueden llevar acentos.
        dni: /^[0-9]{8}$/, // 4 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    // const csrf = () => axios.get('/sanctum/csrf-cookie')

    const storeInscription = async (e) => {
        e.preventDefault()
        console.log(e)
        var formularioValido = true
        console.log(arraycampos)
        arraycampos.map((campo) => {
            let estado = campo[0]
            let cambiarEstado = campo[1]

            if ((checked == null || checked == false) && formularioValido) {
                setChecked(false);
                formularioValido = false
            }
            else if ((estado.valido === null || estado.valido === 'false')) {
                formularioValido = false
                cambiarEstado({ ...estado, valido: 'false' });
            }
        })
        console.log(formularioValido)
        if (formularioValido
        ) {
            setopenInscription(true)
        }
        else {
            setopenfail(true)
            console.log('no se envio')
        }
    }

    const submitInscription = async () => {
        let formatDate = Moment(birth.campo).format('YYYY-MM-DD')

        await axios.post(endpoint, {
            name: name.campo, race_categorie_id: props.categorie.id, surname: surname.campo, gender: gender.campo, birth: formatDate,
            dni: dni.campo, email: email.campo, country: country.campo, province: province.campo, city: city.campo, address: address.campo, phone: phone.campo, social_work: social_work.campo, shirt_size: shirt_size.campo, emergency_contac_name: emergency_contac_name.campo, emergency_contac_phone: emergency_contac_phone.campo,
            emergency_contac_bond: emergency_contac_bond.campo
        })
            .then(function (response) {
                console.log('success store', response.config.data);
                setopenInscription(false)
                setopensucces(true)
                //   alert('Registro Exitoso, por favor revisa tu buzon de mensajes')
                //   window.location.reload(false);

            })
            .catch(function (error) {
                setopenInscription(false)
                seterrorMessage(error.response.data.message)
                setopenfail(true)
                console.error('error store',error.response.data.message);
            });
    }

    const handleClickOpenRules = () => {
        setopenrules(true);
    };

    var datebirth = new Date();
    datebirth.setFullYear(datebirth.getFullYear() - 18);

    const validaciondate = () => {

        if (birth.campo === null) {
            setbirth({ ...birth, valido: 'false' });
            console.log('invalido', birth)
        } else {
            setbirth({ ...birth, valido: 'true' });
            console.log('valido', birth)
        }
    }
    const validargenero = () => {

        if (gender.campo === '') {
            setgender({ ...gender, valido: 'false' })
            console.log('invalido', gender)
        } else {
            setgender({ ...gender, valido: 'true' })

        }
    }
    const validarsize = () => {
        if (shirt_size.campo === '') {
            setshirt_size({ ...shirt_size, valido: 'false' })
            console.log('invalido', shirt_size)
        } else {
            setshirt_size({ ...shirt_size, valido: 'true' })

        }
    }

    const colorstylesGender = {
        control: (styles) => ({
            ...styles, borderColor: gender.valido === 'false' ? 'red ' : 'gray-darker',
            boxShadow: gender.valido === 'false' ? '0px 1px 0px 0px red' : '0px 0px 0px 0px rgb(0 170 225)',
            borderWidth: '0',
            borderBottomWidth: '2px',
            backgroundColor: 'transparent',
            '&:hover': {
                boxShadow: '0px 1px 0px 0px rgb(0 170 225)'
            }
        }),
        placeholder: (base) => ({
            ...base,
            // backgroundColor: 'black',
            fontSize: '1.1em',
            color: 'gray-darker',
            fontWeight: 400
        })
    }

    const colorstylesSizes = {
        control: (styles) => ({
            ...styles, borderColor: shirt_size.valido === 'false' ? 'red ' : 'gray-darker',
            boxShadow: shirt_size.valido === 'false' ? '0px 1px 0px 0px red' : '0px 0px 0px 0px rgb(0 170 225)',
            borderWidth: '0',
            borderBottomWidth: '2px',
            backgroundColor: 'transparent',
            '&:hover': {
                boxShadow: '0px 1px 0px 0px rgb(0 170 225)'
            }
        }),
        placeholder: (base) => ({
            ...base,
            // backgroundColor: 'black',
            fontSize: '1.1em',
            color: 'gray-darker',
            fontWeight: 400
        })
    }

    const onChangeTerminos = (e) => {
        setChecked(e.target.checked);
    }

    return (
       <AppLayout>    
        <div className='flex flex-col mx-3 sm:mx-8 py-40 min-h-screen rounded-md overflow-hidden'>
            <div className='w-full lg:max-w-7xl p-6 m-auto bg-neutral-100 rounded-md shadow-md'>
                <div className='grid sm:grid-cols-2 justify-center ' >
                    <img className='flex self-center justify-self-end sm:mr-10 pb-3' src='/logos/UNCO_Activa.svg'></img>
                    <div className='flex justify-center sm:w-1/3 sm:ml-10'>
                        <CategoriePaper backgroundColor='rgb(39 39 42 )' color={props.categorie.color} name={props.categorie.name}> </CategoriePaper>
                    </div>
                </div>
                <h1 className='text-4xl font-bold text-center mt-10 mb-10 text-gray-darker'>
                    Inscribirse
                </h1>

                <AlertSuccess open={opensucces} onClose={setopensucces}
                    bg=' rgb(240 240 240)'
                    titlecolor='success.main'
                    title='Registro Exitoso!'
                    navigate='/'
                    description='Te has registrado correctamente, revisa tu buzon de mensajes y spam'
                />
                <AlertSuccess open={openfail} onClose={setopenfail}
                    bg=' rgb(240 240 240)'
                    titlecolor='warning.main'
                    title='Advertencia!'

                    description={errorMessage}
                />            
      
                   <form onSubmit={storeInscription} className='grid md:grid-cols-2 md:gap-6'>
                        
                        <InputColForm
                            regularExpression={expresiones.name}
                            value={name}
                            onChange={setname}
                            type='text'
                            id='name'
                            label='Nombre'
                            error='Ingrese un nombre valido, mayor a 3 caracteres con solo letras'
                        />
                        <InputColForm
                            regularExpression={expresiones.name}
                            type='text'
                            id='surname'
                            label='Apellido'
                            value={surname}
                            onChange={setsurname}
                            error='Ingrese un apellido valido, mayor a 3 caracteres con solo letras'
                        />
                        <div className='relative col-span-2  md:col-span-1 z-10 mb-7'>
                            <DatePicker className={birth.valido === 'false' ? 'block py-2.5 scroll-black px-0 w-full text-sm text-gray-darker bg-transparent border-0 border-b-2 border-red-500 dark:text-gray-darker dark:border-red-500 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 ' : 'block py-2.5 scroll-black px-0 w-full text-sm text-gray-darker bg-transparent border-0 border-b-2 border-gray-dark dark:text-gray-darker dark:border-gray-dark dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 '}
                                selected={birth.campo}
                                id='birth'
                                onChange={(date) => {
                                    setbirth({ ...birth, campo: date, valido: date ? 'true' : 'false' })

                                }}
                                dateFormat={'yyyy-MM-dd'}
                                onKeyUp={validaciondate}
                                onBlur={validaciondate}
                                placeholderText='Fecha de nacimiento'
                                maxDate={datebirth}
                                showYearDropdown
                                showMonthDropdown
                                scrollableYearDropdown
                                isClearable
                                dropdownMode='select'
                                wrapperClassName='text-red-500'
                                calendarClassName='text-white'
                                locale={'es'}
                                autoComplete='off'
                            />
                            <p className={birth.valido === 'false' ? 'text-red-500 block' : 'hidden'}>Ingrese una fecha valida, debe ser mayor de 18 años para poder inscribirse </p>

                        </div>
                        <InputColForm
                            regularExpression={expresiones.dni}
                            type='number'
                            id='dni'
                            label='Dni'
                            value={dni}
                            onChange={setdni}
                            error='Ingrese un dni valido, con exactamente 8 digitos'
                        />

                        <div className='col-span-2 mt-1 md:col-span-1 text-gray-darker dark:text-gray-darker'>
                            <Select
                                // className='text-gray-darker col-span-2  md:col-span-1  dark:text-gray-darker'
                                placeholder='Genero'
                                styles={colorstylesGender}
                                name='gender'
                                Value={gender}
                                onChange={(e) => {
                                    setgender({ ...gender, campo: e.value, valido: e.value ? 'true' : 'false' })
                                    console.log(gender)

                                }}
                                onBlur={validargenero}
                                options={genders}
                                id='gender'
                            />
                            <p className={gender.valido == 'false' ? 'text-red-500 block' : 'hidden'}>Debes ingresar un Genero </p>

                        </div>
                        <InputColForm
                            regularExpression={expresiones.name}
                            type='text'
                            id='country'
                            label='Pais'
                            value={country}
                            onChange={setcountry}
                            error='Ingresa un pais'
                        />

                        <InputColForm
                            type='text'
                            id='province'
                            label='Provincia'
                            value={province}
                            onChange={setprovince}
                            regularExpression={expresiones.name}
                            error='Ingresa una provincia'

                        />
                        <InputColForm type='text'
                            id='city'
                            label='Localidad'
                            value={city}
                            onChange={setcity}
                            regularExpression={expresiones.name}
                            error='Ingresa una provincia' />

                        <InputColForm
                            regularExpression={expresiones.address}
                            type='text'
                            label='Direccion de Domicilio'
                            id='address'
                            value={address}
                            onChange={setaddress}
                            error='Inngresa un domicilio valido'
                        />
                        <InputColForm
                            regularExpression={expresiones.email}
                            id='email'
                            type='mail'
                            label='Email'
                            value={email}
                            onChange={setemail}
                            error='Inngresa un email valido' />

                        <InputColForm
                            type='tel'
                            id='phone'
                            label='Numero de Telefono'
                            value={phone}
                            onChange={setphone}
                            regularExpression={expresiones.phone}
                            error='Inngresa un telefono valido'

                        />
                        <InputColForm
                            id='social_work'
                            type='text'
                            label='Obra social'
                            value={social_work}
                            onChange={setsocial_work}
                        // regularExpression={expresiones.name}
                        // error='Inngresa una obra social'

                        />

                        <div className='col-span-2 mt-1 md:col-span-1 text-gray-darker dark:text-gray-darker'>
                            <Select
                                className='text-gray-darker col-span-2  md:col-span-1  dark:text-gray-darker'
                                Value={shirt_size.campo}
                                onChange={(e) => {
                                    setshirt_size({ ...shirt_size, campo: e.value, valido: e ? 'true' : 'false' })

                                }}
                                styles={colorstylesSizes}
                                onBlur={validarsize}
                                options={sizes}
                                id='shirt_size'
                                placeholder='Talle de remera'
                            />
                            <p className={shirt_size.valido === 'false' ? 'text-red-500 block' : 'hidden'}>Debes ingresar un talle </p>

                        </div>
                        
                        <div className='relative col-span-2 z-0 mb-6 mt-2 w-full group'>
                            <span className='text-xl font-semibold dark:text-black'>Contacto en caso de emergencias</span>
                        </div>
                        
                        <InputColForm
                            type='text'
                            label='Nombre y Apellido'
                            id='emergency_contac_name'
                            value={emergency_contac_name}
                            onChange={setemergency_contac_name}
                            regularExpression={expresiones.name}
                            error='Inngresa un contacto de emergencia'

                        />
                        <InputColForm
                            type='text'
                            id='emergency_contac_bond'
                            label='Vinculo de contacto'
                            value={emergency_contac_bond}
                            onChange={setemergency_contac_bond}
                            regularExpression={expresiones.name}
                            error='Inngresa un el vinculo de tu contacto de emergencia'
                        />
                        <InputColForm
                            type='text'
                            id='emergency_contac_phone'
                            label='Numero Telefonico'
                            value={emergency_contac_phone}
                            onChange={setemergency_contac_phone}
                            regularExpression={expresiones.phone}
                            error='Inngresa un telefono de contacto de emergencia'
                        />
                        <div className='relative col-span-2 z-0 mb-6 mt-2 w-full group'>
                            <Checkbox
                                checked={checked}
                                onChange={onChangeTerminos}
                                inputProps={{ 'aria-label': 'uncontrolled' }}
                                id='check'
                            />
                            <label htmlFor={'check'} className='dark:text-gray-darker -mt-1 text-gray-darker'>{'Acepto los terminos y condiciones del '}
                            <button type='button' onClick={handleClickOpenRules} className='text-blue-cyan'>Reglamento de la carrera</button> </label>
                        <p className={checked === false ? 'text-red-500 block' : 'hidden'}>Debes aceptar los terminos y condiciones </p>
                        </div>

                        <div className='relative col-span-2  flex-none w-24 ...'>
                        <ButtonInput type='submit' text='Enviar' divclass='lg:w-28 md:w-28 sm:w-auto flex-none' />
                        </div>
                        <div className='relative col-span-2 md:col-span-1  ...'>
                        <p className=' text-ellipsis dark:text-gray-darker ml-1 text-gray-darker '>{'Por cualquier inconveniente y  duda acerca de la carrera consular al mail de '}
                            <a href={'mailto:uncoactiva@gmail.com'} className='text-blue-cyan'>UncoActiva</a>
                        </p>
                        </div>
                    </form>
                    <ModalRules open={openrules} onClose={setopenrules}
                    bg=' rgb(240 240 240)'
                    titlecolor=''
                    title='REGLAS GENERALES PARA LOS PARTICIPANTES'
                    />

                    <ModalInscription 
                    price={props.categorie.price} 
                    categoriename={props.categorie.name}
                    setopenInscription={setopenInscription} 
                    openInscription={openInscription} 
                    submitInscription={submitInscription} />
                 </div>
            </div >           
        </AppLayout>
    )
}

export default PreinscriptionForm