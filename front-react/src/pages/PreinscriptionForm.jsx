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
import FileUpload from 'react-material-file-upload';
import { red } from '@mui/material/colors';
import { FormControl, FormControlLabel, FormLabel, Radio } from '@mui/material';
import { RadioGroup } from '@headlessui/react';
registerLocale('es', es);

const endpoint = 'https://uncoactiva-back.fi.uncoma.edu.ar/api/inscription''
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
  const [promo, setpromo] = React.useState({ campo: '', valido: null });
  const [filespromo, setfilespromo] = useState([]);
  const [promovalidation, setpromovalidation] = useState({ campo: 'Debes enviar el certificado de alumno regular o legajo para poder hacer el descuento.', valido: null });

  const handleRadioChange = (event) => {
    setpromo({ ...promo, campo: event.target.value, valido: 'true' });
    if(event.target.value === 'no'){
      setfilespromo([]);
    }
  };
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
    [promo, setpromo]
    [emergency_contac_phone, setemergency_contac_phone]
    [promovalidation, setpromovalidation]
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
    //console.log(e)
    console.log('archivos promo',filespromo)
    var formularioValido = true
    //console.log(arraycampos)
    // eslint-disable-next-line array-callback-return
    console.log(e)
    var formularioValido = true
    console.log(arraycampos)

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
    console.log(files)
    console.log(formularioValido)
    if (formularioValido
    ) {
      if (phone.campo === emergency_contac_phone.campo) {
        seterrorMessage('Ingresa un numero de conctacto de emergencia que sea diferente al tuyo porfavor')
        setopenfail(true)
      }
      else {
        setopenInscription(true)
      }
    }
    else {
      seterrorMessage('completa todos los campos porfavor')
      setopenfail(true)
      console.log('no se envio')
    }
  }

  const submitInscription = async () => {
    let formatDate = Moment(birth.campo).format('YYYY-MM-DD')
    const formdata = new FormData();
    // eslint-disable-next-line array-callback-return

    // formdata = {...formdata,
    //   name: name.campo, race_categorie_id: props.categorie.id, surname: surname.campo, gender: gender.campo, birth: formatDate,
    //   dni: dni.campo, email: email.campo, country: country.campo, province: province.campo, city: city.campo, address: address.campo, phone: phone.campo, social_work: social_work.campo, shirt_size: shirt_size.campo, emergency_contac_name: emergency_contac_name.campo, emergency_contac_phone: emergency_contac_phone.campo,
    //   emergency_contac_bond: emergency_contac_bond.campo      
    // };
    for (let i = 0; i < files.length; i++) {
      // console.log('imagen' + i, files[i] )
      formdata.append('files["payment"]', files[i]);
    }
    
    for (let i = 0; i < filespromo.length; i++) {
      console.log('imagen' + i, filespromo[i] )
      formdata.append('files["promo"]', filespromo[i]);
    }
    console.log('categorie', props.categorie.id)
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
    formdata.append('promo', promo.campo);

    console.log('datos', formdata);
    await axios.post(endpoint, formdata)
      .then(function (response) {
        console.log('success store', response);
        setopenInscription(false)
        setopensucces(true)
        //window.location.reload(false);
      })
      .catch(function (error) {
        setopenInscription(false)
        setalertnavigate('/')
        seterrorMessage(error.response.data.message)
        setopenfail(true)
        console.error('error store', error.response.data.message);
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
      console.log('valido', gender)
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

    console.log(e)    
    let array = []
    array[0] = e[0];
    setfilevalidation({ valido: true })
    if (e.length === 0) {
      setfilevalidation({
        ...filevalidation,
        campo: 'Debes enviar el comprobante, sin el no se te considerará como inscripto en la carrera.',
        valido: 'false'
      })
      console.log('invalido', e)
    }
    else {
      // eslint-disable-next-line array-callback-return
      array.map((file) => {
        if ((file.type.indexOf('image') !== -1) || (file.type.indexOf('application/pdf') !== -1)) {
          console.log('tipo imagen', file.type, file.type.indexOf('image'))
        }
        else {
          setfilevalidation({ ...filevalidation, campo: 'Formato de archivo invalido, formatos admitidos: png, jpg, pdf', valido: 'false' })
        }
        if (file.size > 2088960) {
          setfilevalidation({ ...filevalidation, campo: 'Tamaño maximo de archivo excedido: 2MB', valido: 'false' })
          console.log('invalido', file.size)
        }
      })
    }
    
    setFiles(array);

  }
  const onChangeFilePromo = (e) => {
    console.log('evento promo', e[0])
    let array = []
    array[0] = e[0];
    setpromovalidation({ valido: true })
    if (e.length === 0) {
      setpromovalidation({
        ...promovalidation,
        campo: 'Debes enviar el certificado de alumno regular o legajo para poder hacer el descuento.',
        valido: 'false'
      })
      console.log('invalido', e)
    }         
    else {
      // eslint-disable-next-line array-callback-return
      array.map((file) => {
        if ((file.type.indexOf('image') !== -1) || (file.type.indexOf('application/pdf') !== -1)) {
          console.log('tipo imagen', file.type, file.type.indexOf('image'))
        }
        else {
          setpromovalidation({ ...promovalidation, campo: 'Formato de archivo invalido, formatos admitidos: png, jpg, pdf', valido: 'false' })
        }
        if (file.size > 2088960) {
          setpromovalidation({ ...promovalidation, campo: 'Tamaño maximo de archivo excedido: 2MB', valido: 'false' })
          console.log('invalido', file.size)
        }
      })
    }
    setfilespromo(array);   
  }

  return (
    <AppLayout>
      <div className='flex flex-col mx-3 sm:mx-8 py-40 min-h-screen rounded-md overflow-hidden'>
        <div className='w-full lg:max-w-7xl p-6 m-auto bg-neutral-100 rounded-md shadow-md'>
          <div className='grid sm:grid-cols-2 justify-center ' >
            <img alt='logo unco activa' className='flex self-center justify-self-end sm:mr-10 pb-3' src='/logos/UNCO_Activa.svg'></img>
            <div className='flex justify-center sm:w-1/3 sm:ml-10'>
              <CategoriePaper boxShadow='none' color={props.categorie.color} name={props.categorie.name}> </CategoriePaper>
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
            navigate={alertnavigate}
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
              <p className={birth.valido === 'false' ? 'text-red-500 block' : 'invisible'}>Ingrese una fecha valida, debe ser mayor de 18 años para poder inscribirse </p>
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
            <div className='col-span-2 mb-2 mt-1 md:col-span-1 text-gray-darker dark:text-gray-darker'>
              <Select
                // className='text-gray-darker col-span-2  md:col-span-1  dark:text-gray-darker'
                placeholder='Genero'
                styles={colorstylesSizes}
                name='gender'
                Value={gender}
                onChange={(e) => handlechangeGender(e)}
                onBlur={validargenero}
                options={genders}
                id='gender'
              />
              <p className={gender.valido === 'false' ? 'text-red-500 block' : 'invisible'}>Debes ingresar un Genero </p>
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
              <p className={shirt_size.valido === 'false' ? 'text-red-500 block' : 'invisible'}>Debes ingresar un talle </p>
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
              error='Ingrese un nombre valido, mayor a 3 caracteres con solo letras'
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
            <div className="relative col-span-2 justify-items-center self-center z-0 mx-20 mb-2">
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
                title='Sube los comprobantes de pago aqui, en caso de ser miembro de la comunidad universitaria
              adjuntar los certificados correspondiente. Solo imagenes o pdf con tamaño maximo de 2MB'
                buttonText='Subir comprobantes'
                value={files}
                onChange={(e) => onChangeFile(e)} />
              <p className={filevalidation.valido === 'false' ? 'flex text-red-500 justify-center mt-1'
                : 'invisible'}>{filevalidation.campo} </p>

            </div>
            <div className="relative col-span-2 justify-items-center self-center z-0 mt-1 mb-1">
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Haces parte de la Comunidad Universitaria?</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={promo.campo}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel value="si" control={<Radio
                    checked={promo.campo === 'si'}
                    onChange={handleRadioChange}
                  />} label="Si" />
                  <FormControlLabel value="no" control={<Radio
                    checked={promo.campo === 'no'}
                    onChange={handleRadioChange} />} label="No" />
                </RadioGroup>
              </FormControl>
              <p className={promo.valido === 'false' ? 'flex text-red-500 justify-start '
                : 'invisible'}>{'Por favor selecciona una opción.'} </p>
            </div>

            <div className={promo.campo !== 'si' ? 'hidden'
              : 'relative col-span-2 self-center z-0 -mt-5 mx-20 mb-1'}>
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
                    boxShadow: promovalidation.valido === 'false' ? '0px 0px 0px 2px red' : '0px 0px 0px 2px rgb(0 170 225)'
                  },
                  '&:hover': {
                    boxShadow: promovalidation.valido === 'false' ? '0px 0px 0px 2px red' : '0px 0px 0px 2px rgb(0 170 225)'
                  },
                  '&:focus': {
                    boxShadow: promovalidation.valido === 'false' ? '0px 0px 0px 2px red' : '0px 0px 0px 2px rgb(0 170 225)'
                  },
                  boxShadow: promovalidation.valido === 'false' ? '0px 0px 0px 2px red' : '0px 0px 0px 0px rgb(0 170 225)'
                }}
                title='Sube los comprobantes de pago aqui, en caso de ser miembro de la comunidad universitaria
              adjuntar los certificados correspondiente. Solo imagenes o pdf con tamaño maximo de 2MB'
                buttonText='Subir comprobantes'
                value={filespromo}
                onChange={(e) => onChangeFilePromo(e)} />
              <p className={promovalidation.valido === 'false' ? 'flex text-red-500 justify-center mt-1'
                : 'invisible'}>{promovalidation.campo} </p>
            </div>

            <div className='relative col-span-2 z-0 mb-1 -mt-1 -ml-3 w-full group'>
              <Checkbox
                checked={checked}
                onChange={(e) => onChangeTerminos(e)}
                inputProps={{ 'aria-label': 'uncontrolled' }}
                id='check'
              />
              <label htmlFor={'check'} className='dark:text-gray-darker -mt-1 text-gray-darker'>{'Acepto los terminos y condiciones del '}
                <button type='button' onClick={handleClickOpenRules} className='text-blue-cyan'>Reglamento de la carrera</button> </label>
              <p className={checked === 'false' ? 'text-red-500 block' : 'invisible'}>Debes aceptar los terminos y condiciones </p>
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
            loading={opensucces}

            categorie={props.categorie}
            setopenInscription={setopenInscription}
            openInscription={openInscription}
            submitInscription={submitInscription} />
        </div>
      </div >
    </AppLayout>
  )
}

export default PreinscriptionForm