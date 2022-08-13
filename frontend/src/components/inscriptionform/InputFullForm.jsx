import React from 'react'

const InputFullForm = (props) => {
    return (
        <div className="relative z-0 mb-6 w-full group">
            <input type={props.type} id={props.id} name={props.id}  className="block py-2.5 px-0 w-full text-sm text-gray-darker bg-transparent border-0 border-b-2 border-gray-light appearance-none dark:text-gray-dark dark:border-gray-dark dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for={props.id} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-darker duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{props.label}</label>
        </div>
    )
}

export default InputFullForm