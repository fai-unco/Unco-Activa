import React, { useState } from "react";

{
  /*const ContacUs = () => { 

  // const endpoint = 'https://127.0.0.1:8000//api/contacUs'
  const endpoint = 'https://uncoactiva-back.fi.uncoma.edu.ar/api/contacUs'
  const [alertnavigate, setalertnavigate] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');
  const [opensucces, setopensucces] = useState(false); 
  const [openfail, setopenfail] = useState(false); 
  const [email, setemail] = useState({ campo: '', valido: null })
  const [subjet, setsubjet] = useState({ campo: '', valido: null })
  const [message, setmessage] = useState({ campo: '', valido: null })

  const arraycampos = [    
    [email, setemail],
    [subjet, setsubjet],
    [message, setmessage]
  ]

  const validacion = () => {
    // console.log("anterior", props.regularExpression)    
    if (expresiones.address.test(message.campo)) {
      setmessage({ ...message, valido: 'true' });      
      // console.log("valido", props.value)
    } else {
      setmessage({ ...message, valido: 'false' });      
      // console.log("invalidado", props.value)
    }
    
  }

  const storeContactUs = async (e) => {
    e.preventDefault()

    var formularioValido = true
    // console.log(arraycampos)
    // eslint-disable-next-line array-callback-return
    arraycampos.map((campo) => {
      let estado = campo[0]
      let cambiarEstado = campo[1]
      if ((estado.valido === null || estado.valido === 'false')) {
        formularioValido = false
        cambiarEstado({ ...estado, valido: 'false' });
      }
    })
   
    if (formularioValido) {
      const formdata = new FormData();
      formdata.append('email', email.campo);
      formdata.append('subject', subjet.campo);
      formdata.append('message', message.campo);

      await axios.post(endpoint, formdata)
        .then(function (response) {
          // console.log('success store', response);          
          setopensucces(true)
        })
        .catch(function (error) {          
          setalertnavigate('/')
          seterrorMessage(error.response.data.message)
          setopenfail(true)    
        });
    } 
    else {
      seterrorMessage('Complete todos los campos porfavor')
      setopenfail(true)      
      // console.log('no se envio')
    }

  }

  return (
    <div className='text-black bg-gray-light rounded-lg max-w-lg p-5'>
      <div className='grid justify-center'>
        <p className='text-black-unco text-3xl sm:text-4xl font-bold font-Header-B'>Contactanos</p>
        <h1 className='bg-lime-unco py-1 w-1/3 mt-5'> </h1>
      </div>
      <div className='container max-w-4xl mx-auto text-center  py-5'>
        <label className='mt-4  '>
                  Por cualquier consulta, complete el formulario para contactarnos. Muchas gracias!
        </label>
      </div>

      <AlertSuccess open={opensucces} onClose={setopensucces}
        bg=' rgb(240 240 240)'
        titlecolor='success.main'
        title='Envio Exitoso!'
        navigate='/'
        description='Gracias por comunicarte con nostros, en breve te responderemos'
      />
      <AlertSuccess open={openfail} onClose={setopenfail}
        bg=' rgb(240 240 240)'
        titlecolor='warning.main'
        title='Advertencia!'
        navigate={alertnavigate}
        description={errorMessage}
      />
      
      <form onSubmit={storeContactUs}>
        <InputColForm
          regularExpression={expresiones.email}
          id='email'
          type='mail'
          label='Email'
          value={email}
          onChange={setemail}
          error='Ingrese un email válido' />
        <InputColForm    
          regularExpression={expresiones.name}      
          value={subjet}
          onChange={setsubjet}
          type='text'
          id='subjet'
          label='Asunto'
          error='Ingrese un asunto, que sea mayor a 3 carácteres usando solo letras'
        />        
        <textarea
          // eslint-disable-next-line quotes
          className={` ${message.valido === 'false' ? 'dark:focus:border-red-500  dark:border-red-500 border-red-500 focus:border-red-500 ' : '' } block p-2.5 w-full text-sm text-gray-900 bg-transparent  rounded-lg border focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:text-black  dark:focus:border-blue-500  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-10  duration-300 `}        
          placeholder='Ingrese su mensaje aquí'
          value={message.campo}
          onChange={(e) => {setmessage({...message, campo : e.target.value})}}         
          onKeyUp={validacion}
          onBlur={validacion}
          type='text'
          id='message'
          name='message'
          label='Ingrese su mensaje aquí'          
        /> 
        <p className={message.valido === 'false' ? 'block text-red-500 ' : 'invisible'}   >{'Ingrese un mensaje válido, mayor a 3 carácteres'} </p>              
        <div className='flex pt-7 justify-center'>

          <div className='relative col-span-2 mt-3 md:-mt-1 mb-3 md:mb-0 flex-none w-24 ...'>
            <ButtonInput type='submit' text='Enviar' divclass='lg:w-28 md:w-28 sm:w-auto flex-none' />
          </div>
        </div>
      </form>
      
    </div>
          
  )
}*/
}

const ContacUs = () => {
  return (
    <div className="w-full flex flex-col text-black-unco bg-gray-light rounded-lg p-10 gap-5">
      <div className="grid justify-center">
        <h1 className="text-black-unco text-3xl sm:text-4xl font-bold font-Header-B">
          Contactanos
        </h1>
        <h1 className="bg-lime-unco py-1 w-1/3 mt-5"> </h1>
      </div>

      <div className="container text-center">
        <div className="">          
          <p className="text-lg font-semibold">
            Para cualquier consulta, puedes contactarnos a nuestro correo
            electrónico:
          </p>
        </div>
        <p className="mt-4 text-gray-700 justify-center flex gap-2 items-center">
          <img
              src="/logos/icons/2026Mail.png"
              className="h-7"
              alt="Logo Instagram"
            />
          <a
            href="mailto:uncoactiva@gmail.com"
            className="text-blue-500 hover:text-blue-700 flex"
          >
            uncoactiva@gmail.com
          </a>
        </p>
        
        <p className="mt-4 text-lg font-semibold">
          También puedes seguirnos en nuestras redes sociales:
        </p>
        <div className="flex flex-col items-center">
          <div className="mt-4">
            <a
              href="https://www.instagram.com/sbucomahue?igsh=bDc2M2tjNWdzOW5p"
              className="text-blue-500 hover:text-blue-700 mr-4 flex gap-2 items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logos/icons/2026Instagram.png"
                className="h-7"
                alt="Logo Instagram"
              />
              <p>Secretaría de Bienestar Universitario</p>              
            </a>
          </div>
          <div className="mt-2">
            <a
              href="https://www.instagram.com/unco_activa?igsh=NGozbG44MnV0cTJ4"
              className="text-blue-500 hover:text-blue-700 flex gap-2 items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logos/icons/2026Instagram.png"
                className="h-7"
                alt="Logo Instagram"
              />
              <p>UNCo Activa</p>              
            </a>
          </div>
        </div>
      </div>

      {/* <div className='flex pt-7 justify-center'>
        <div className='relative col-span-2 mt-3 md:-mt-1 mb-3 md:mb-0 flex-none w-24'>
          <button className='lg:w-28 md:w-28 sm:w-auto flex-none'>
            Más Info
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ContacUs;
