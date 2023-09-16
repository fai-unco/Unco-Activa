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
import FileUpload from 'react-material-file-upload';
import { red } from '@mui/material/colors';
import { FormControl, FormControlLabel, FormLabel, Radio } from '@mui/material';
import { RadioGroup } from '@headlessui/react';
import { BankAccount } from 'components/elements/BankAccount';
registerLocale('es', es);

// const endpoint = 'http://127.0.0.1:8000/api/inscription'
const endpoint = 'https://uncoactiva-back.fi.uncoma.edu.ar/api/inscription'
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

export const expresiones = {
  address: /^[a-zA-ZÀ-ÿ-Z0-9_-\s\W]{4,100}$/, // Letras, numeros, y caracteres especiales
  name: /^[a-zA-ZÀ-ÿ\s]{3,50}$/, // Letras y espacios, pueden llevar acentos.
  dni: /^[0-9]{8}$/, // 4 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/ // 7 a 14 numeros.
}
const PreinscriptionForm = (props) => {

  // const { user } = useAuth({ middleware: 'auth' })
  // if (!user) {
  //   window.location.pathname = '/login'
  // }

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
  const [errorMessage, seterrorMessage] = useState('');

  const [files, setFiles] = useState([]);
  const [filevalidation, setfilevalidation] = useState({ campo: 'Debes enviar el comprobante, sin el no se te considerará como inscripto en la carrera.', valido: null });

  const isdateOfRace = Date.now() > new Date('October 19, 2023 20:00:00') 
  const [openEnd, setopenEnd] = useState(isdateOfRace);

  const [alertnavigate, setalertnavigate] = useState(false);

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
    [emergency_contac_phone, setemergency_contac_phone],
    [filevalidation, setfilevalidation],
    [emergency_contac_phone, setemergency_contac_phone]
  ]

  // const csrf = () => axios.get('/sanctum/csrf-cookie')

  const storeInscription = async (e) => {
    e.preventDefault()
    // //console.log(e)
    // //console.log(arraycampos)

    // console.log(e)
    var formularioValido = true
    // console.log(arraycampos)
    // eslint-disable-next-line array-callback-return
    arraycampos.map((campo) => {
      let estado = campo[0]
      let cambiarEstado = campo[1]

      if ((checked == null || checked === false) && formularioValido) {
        setChecked(false);
        formularioValido = false
      }
      else if ((estado.valido === null || estado.valido === 'false')) {
        formularioValido = false
        cambiarEstado({ ...estado, valido: 'false' });
      }
    })    
    // console.log(files)
    // console.log(formularioValido)
    if (formularioValido
    ) {
      if (phone.campo === emergency_contac_phone.campo) {
        seterrorMessage('Ingrese un número de contacto de emergencia que sea diferente al suyo porfavor')
        setopenfail(true)
      }
      else if (isdateOfRace){
        seterrorMessage('Ya no está disponible la carrera')
        setopenfail(true)
      }
      else {
        setopenInscription(true)
      }
    }
    else {
      seterrorMessage('Complete todos los campos porfavor')
      setopenfail(true)
      // console.log('no se envio')
    }
  }

  const submitInscription = async () => {
    let formatDate = Moment(birth.campo).format('YYYY-MM-DD')
    const formdata = new FormData();
    
    for (let i = 0; i < files.length; i++) {
      // // console.log('imagen' + i, files[i] )
      formdata.append('files[]', files[i]);
    }

    // console.log('categorie', props.categorie.id)
    formdata.append('name', name.campo);
    formdata.append('race_categorie_id', props.categorie.id);
    formdata.append('surname', surname.campo);
    formdata.append('gender', gender.campo);
    formdata.append('birth', formatDate);
    formdata.append('dni', dni.campo);
    formdata.append('email', email.campo);
    formdata.append('country', country.campo);
    formdata.append('province', province.campo);
    formdata.append('city', city.campo);
    formdata.append('address', address.campo);
    formdata.append('phone', phone.campo);
    formdata.append('social_work', social_work.campo);
    formdata.append('shirt_size', shirt_size.campo);
    formdata.append('emergency_contac_name', emergency_contac_name.campo);
    formdata.append('emergency_contac_bond', emergency_contac_bond.campo);
    formdata.append('emergency_contac_phone', emergency_contac_phone.campo);

    // console.log('datos', formdata);
    await axios.post(endpoint, formdata)
      .then(function (response) {
        // console.log('success store', response);
        setopenInscription(false)
        setopensucces(true)
        //window.location.reload(false);
      })
      .catch(function (error) {
        setopenInscription(false)
        setalertnavigate('/')
        seterrorMessage(error.response.data.message)
        setopenfail(true)
        // console.error('error store', error.response.data.message);
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
      // console.log('invalido', birth)
    } else {
      setbirth({ ...birth, valido: 'true' });
      // console.log('valido', birth)
    }
  }
  const validargenero = () => {

    if (gender.campo === '') {
      setgender({ ...gender, valido: 'false' })
      // console.log('invalido', gender)
    } else {
      setgender({ ...gender, valido: 'true' })
      // console.log('valido', gender)
    }
  }

  const validarsize = () => {
    if (shirt_size.campo === '') {
      setshirt_size({ ...shirt_size, valido: 'false' })
      // console.log('invalido', shirt_size)
    } else {
      setshirt_size({ ...shirt_size, valido: 'true' })

    }
  }
  const handlechangeGender = (e) => {
    gender.campo = e.value
  }

  const colorstylesSizes = {
    control: (styles) => ({
      ...styles, borderColor: shirt_size.valido === 'false' ? 'red ' : 'gray-darker',
      boxShadow: shirt_size.valido === 'false' ? '0px 0.0 1em 0px 0px red' : '0px 0px 0px 0px rgb(0 170 225)',
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
      marginLeft: '-0.5em',
      fontSize: '1.1em',
      color: 'gray-darker',
      fontWeight: 400
    })
  }

  const onChangeTerminos = (e) => {
    setChecked(e.target.checked);
  }

  const onChangeFile = (e) => {

    // console.log(e)
    let array = []
    array[0] = e[0];
    setfilevalidation({ valido: true })
    if (e.length === 0) {
      setfilevalidation({
        ...filevalidation,
        campo: 'Debe enviar el comprobante, sin el no se te considerará como inscripto en la carrera.',
        valido: 'false'
      })
      // console.log('invalido', e)
      setFiles(e);
    }
    else {
      if ((array[0].type.indexOf('image') !== -1) || (array[0].type.indexOf('application/pdf') !== -1)) {
        // console.log('tipo imagen', array[0].type, array[0].type.indexOf('image'))
      }
      else {
        setfilevalidation({ ...filevalidation, campo: 'Formato de archivo inválido, formatos admitidos: png, jpg, pdf', valido: 'false' })
      }
      if (array[0].size > 2088960) {
        setfilevalidation({ ...filevalidation, campo: 'Tamaño máximo de archivo excedido: 2MB', valido: 'false' })
        // console.log('invalido', array[0].size)
      }
      setFiles(array);
    }
  }
  
  return (    
    <div className='flex flex-col mx-3 sm:mx-8 py-40 min-h-screen rounded-md overflow-hidden'>
      <div className='w-full lg:max-w-7xl p-6 m-auto bg-neutral-100 rounded-md shadow-md'>
        <div className='grid sm:grid-cols-2 justify-center ' >
          <img alt='logo unco activa' className='flex self-center justify-self-end sm:mr-10 pb-3' src='/logos/UNCO_Activa.svg'></img>
          <div className='flex justify-center sm:w-1/3 sm:ml-10'>
            <CategoriePaper boxShadow='none' color={props.categorie.color} name={props.categorie.name}> </CategoriePaper>
          </div>
        </div>
        <h1 className='text-4xl font-bold text-center mt-10 mb-10 text-gray-darker'>
            Formulario de inscripción
        </h1>
        <AlertSuccess open={openEnd} onClose={setopenEnd}
          bg=' rgb(240 240 240)'
          titlecolor='warning.main'
          title='Atención!'
          description={'Las inscripciones están cerradas. Por favor, no realizar transferencias, ya que no nos responsabilizamos por inscribirse fuera de término.'}
        />
        <AlertSuccess open={opensucces} onClose={setopensucces}
          bg=' rgb(240 240 240)'
          titlecolor='success.main'
          title='Registro Exitoso!'
          navigate='/'
          description='Ha completado el registro con éxito. Por favor, verifique su bandeja de entrada y la carpeta de correo no deseada.'
        />
        <AlertSuccess open={openfail} onClose={setopenfail}
          bg=' rgb(240 240 240)'
          titlecolor='warning.main'
          title='Advertencia!'
          navigate={alertnavigate}
          description={errorMessage}
        />

        <form onSubmit={storeInscription} className='grid grid-cols-1 md:grid-cols-2 md:gap-6'>

          <InputColForm
            regularExpression={expresiones.name}
            value={name}
            onChange={setname}
            type='text'
            id='name'
            label='Nombre'
            error='Ingrese un nombre válido, mayor a 3 carácteres usando solo letras'
          />
          <InputColForm
            regularExpression={expresiones.name}
            type='text'
            id='surname'
            label='Apellido'
            value={surname}
            onChange={setsurname}
            error='Ingrese un apellido válido, mayor a 3 carácteres usando solo letras'
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
              maxDate={props.categorie.name !== '3k' ? datebirth : new Date()}
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
            <p className={birth.valido === 'false' ? 'text-red-500 block' : 'invisible'}>Ingrese una fecha válida, debe ser mayor de 18 años para poder inscribirse </p>
          </div>
          <InputColForm
            regularExpression={expresiones.dni}
            type='number'
            id='dni'
            label='DNI'
            value={dni}
            onChange={setdni}
            error='Ingrese un DNI válido, con exactamente 8 dígitos'
          />
          <div className='col-span-2 mb-2 mt-1 md:col-span-1 text-gray-darker dark:text-gray-darker'>
            <Select
              // className='text-gray-darker col-span-2  md:col-span-1  dark:text-gray-darker'
              placeholder='Género'
              styles={colorstylesSizes}
              name='gender'
              Value={gender}
              onChange={(e) => handlechangeGender(e)}
              onBlur={validargenero}
              options={genders}
              id='gender'
            />
            <p className={gender.valido === 'false' ? 'text-red-500 block' : 'invisible'}>Debe seleccionar un género </p>
          </div>
          <InputColForm
            regularExpression={expresiones.name}
            type='text'
            id='country'
            label='País'
            value={country}
            onChange={setcountry}
            error='Ingrese un país'
          />

          <InputColForm
            type='text'
            id='province'
            label='Provincia'
            value={province}
            onChange={setprovince}
            regularExpression={expresiones.name}
            error='Ingrese una provincia'

          />
          <InputColForm type='text'
            id='city'
            label='Localidad'
            value={city}
            onChange={setcity}
            regularExpression={expresiones.name}
            error='Ingrese una provincia' />

          <InputColForm
            regularExpression={expresiones.address}
            type='text'
            label='Dirección de domicilio'
            id='address'
            value={address}
            onChange={setaddress}
            error='Ingrese un domicilio válido, usando letras, números y carácteres especiales'
          />
          <InputColForm
            regularExpression={expresiones.email}
            id='email'
            type='mail'
            label='Email'
            value={email}
            onChange={setemail}
            error='Ingrese un email válido' />

          <InputColForm
            type='tel'
            id='phone'
            label='Número de teléfono'
            value={phone}
            onChange={setphone}
            regularExpression={expresiones.phone}
            error='Ingrese un teléfono válido'

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
          <div className='col-span-2 mb-2 mt-1 md:col-span-1 text-gray-darker dark:text-gray-darker'>
            <Select
              className='text-gray-darker col-span-2  md:col-span-1  dark:text-gray-darker'
              Value={shirt_size.campo}
              onChange={(e) => {
                shirt_size.campo = e.value
              }}
              styles={colorstylesSizes}
              onBlur={validarsize}
              options={sizes}
              id='shirt_size'
              placeholder='Talle de remera'
            />
            <p className={shirt_size.valido === 'false' ? 'text-red-500 block' : 'invisible'}>Debe seleccionar un talle </p>
          </div>

          <div className='relative col-span-2 z-0 mb-2 mt-2 w-full group'>
            <span className='text-xl font-semibold dark:text-black'>Contacto en caso de emergencias</span>
          </div>

          <InputColForm
            type='text'
            label='Nombre y Apellido'
            id='emergency_contac_name'
            value={emergency_contac_name}
            onChange={setemergency_contac_name}
            regularExpression={expresiones.name}
            error='Ingrese un nombre válido, mayor a 3 carácteres usando solo letras'
          />
          <InputColForm
            type='text'
            id='emergency_contac_bond'
            label='Vínculo de contacto'
            value={emergency_contac_bond}
            onChange={setemergency_contac_bond}
            regularExpression={expresiones.name}
            error='Ingrese el vínculo de tu contacto de emergencia'
          />
          <InputColForm
            type='text'
            id='emergency_contac_phone'
            label='Número telefónico'
            value={emergency_contac_phone}
            onChange={setemergency_contac_phone}
            regularExpression={expresiones.phone}
            error='Ingrese un teléfono de contacto de emergencia'
          />
          <div className="relative col-span-2 justify-items-center self-center z-0 lg:mx-20 mb-2">
            <FileUpload
              multiFile={false}
              maxUploadFiles={3}
              accept='image/*, application/pdf'
              sx={{
                '& .MuiOutlinedInput-root.Mui-disabled': { '& > fieldset': { border: '1px solid red' } },
                '& .MuiOutlinedInput-root:focus': {
                  '& > fieldset': {
                    borderColor: red[500]
                  }
                },
                '&:focus-within': {
                  boxShadow: filevalidation.valido === 'false' ? '0px 0px 0px 2px red' : '0px 0px 0px 2px rgb(0 170 225)'
                },
                '&:hover': {
                  boxShadow: filevalidation.valido === 'false' ? '0px 0px 0px 2px red' : '0px 0px 0px 2px rgb(0 170 225)'
                },
                '&:focus': {
                  boxShadow: filevalidation.valido === 'false' ? '0px 0px 0px 2px red' : '0px 0px 0px 2px rgb(0 170 225)'
                },
                boxShadow: filevalidation.valido === 'false' ? '0px 0px 0px 2px red' : '0px 0px 0px 0px rgb(0 170 225)'
              }}
              title='Suba el comprobante de pago aquí. Solo imágenes o pdf con tamaño máximo de 2MB'
              buttonText='Subir comprobantes'
              value={files}
              onChange={(e) => onChangeFile(e)} />
            <p className={filevalidation.valido === 'false' ? 'flex text-red-500 justify-center mt-1'
              : 'invisible'}>{filevalidation.campo} </p>

          </div>

          {!isdateOfRace ? 
            <div className='relative col-span-2  z-0 mb-5 md:mb-1 -mt-1  w-full group'>
              <p>
                <strong>Modo de inscripción:</strong> El participante deberá inscribirse a la carrera por la web uncoactiva.fi.uncoma.edu.ar, realizando el pago, únicamente por transferencia a la siguiente cuenta bancaria:<br />
              <BankAccount />
                <strong>Categoría: </strong><strong style={{ color: props.categorie.color }}> {props.categorie.name}</strong><br />

                <strong>Precio:</strong> ${props.categorie.price}<br /><br />
               
              De no enviarse el comprobante de pago/transferencia con todos los datos de la operación, no se considerará como inscripto.

              </p>
            </div> : ''}
          
          <div className='relative col-span-2 justify-self-center z-0 -mt-1 -ml-3 w-full group'>
            <Checkbox
              sx={{marginLeft: -1}}
              checked={checked}
              onChange={(e) => onChangeTerminos(e)}
              inputProps={{ 'aria-label': 'uncontrolled' }}
              id='check'
            />
            <label htmlFor={'check'} className='dark:text-gray-darker -mt-1 text-gray-darker'>{'Acepto los términos y condiciones del '}
              <button type='button' onClick={handleClickOpenRules} className='text-blue-cyan '>Reglamento de la carrera</button> </label>
            <p className={checked === false ? 'text-red-500 block' : 'invisible'}>Debe aceptar los términos y condiciones </p>
          </div>

          <div className='relative col-span-2 mt-3 md:-mt-1 mb-3 md:mb-0 flex-none w-24 ...'>
            <ButtonInput type='submit' text='Enviar' divclass='lg:w-28 md:w-28 sm:w-auto flex-none' />
          </div>
          <div className='relative col-span-2 md:col-span-1  ...'>
            <p className=' text-ellipsis dark:text-gray-darker ml-1 text-gray-darker '>{'Por cualquier inconveniente y duda acerca de la carrera consular al mail de '}
              <a href={'mailto:uncoactiva@gmail.com'} className='text-blue-cyan'>UncoActiva</a>
            </p>
          </div>
        </form>
        <ModalRules open={openrules} onClose={setopenrules}
          categorie={props.categorie}
          bg=' rgb(240 240 240)'
          titlecolor=''
          title='REGLAS GENERALES PARA LOS PARTICIPANTES'
        />

        <ModalInscription
          loading={opensucces}
          categorie={props.categorie}
          setopenInscription={setopenInscription}
          openInscription={openInscription}
          submitInscription={submitInscription} />
      </div>
    </div >    
  )
}

export default PreinscriptionForm