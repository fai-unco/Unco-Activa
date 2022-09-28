import React from 'react'

const InputColForm = (props) => {

  var classinput = props.value.valido === 'false' ? 
    'block py-2.5 px-0 w-full text-sm text-gray-darker bg-transparent dark:bg-transparent border-0 border-b-2 border-gray-light appearance-none dark:text-gray-darker dark:border-red-500 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer ' :
    'block py-2.5 px-0 w-full text-sm text-gray-darker bg-transparent dark:bg-transparent border-0 border-b-2 border-gray-light appearance-none dark:text-gray-darker dark:border-gray-dark dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'

  var classlabel =  props.value.valido === 'false' ? 
    'peer-focus:font-medium absolute text-lg text-gray-500 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' : 
    'peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-darker duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'

  const validacion = () => {
    // console.log("anterior", props.regularExpression)
    if (props.regularExpression) {
      if (props.regularExpression.test(props.value.campo)) {
        props.onChange({ ...props.value, valido: 'true' });
        classinput = ''
        // console.log("valido", props.value)
      } else {
        props.onChange({ ...props.value, valido: 'false' });
        classinput = ''
        // console.log("invalidado", props.value)
      }
    }
  }

  const cambiar = (e) => {
    props.onChange({ ...props.value, campo: e.target.value });
  }

  var label = <label htmlFor={props.id} className={classlabel}>{props.label}</label>

  return (
    <div className="relative col-span-2  md:col-span-1 z-0 mb-3">
      <input
        value={props.value.campo}
        onChange={cambiar}
        type={props.type}
        id={props.id}
        name={props.id}
        className={classinput}
        onKeyUp={validacion}
        onBlur={validacion}
        placeholder=" " autoComplete=''  />
      {label}
      <p className={props.value.valido === 'false' ? 'block text-red-500 ' : 'invisible'}   >{props.error} </p>
    </div>
  )
}

export default InputColForm