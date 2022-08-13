import React from 'react'

const InputColForm = (props) => {
    var classdiv = "relative z-0 mb-6 w-full group";
    var labelsecond = <label for={props.idsecond} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-darker duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{props.labelsecond}</label> 
    if (props.idfirst == "shirt_size") {
        var input = <select id={props.idfirst} class="block py-2.5 px-0 w-full text-sm text-gray-darker bg-transparent border-0 border-b-2 border-gray-light appearance-none dark:text-gray-dark dark:border-gray-dark dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
            <option selected disabled>Seleccione una opcion</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
        </select>
    }
    else {
        input = <input type={props.typefirst} id={props.idfirst} name={props.idfirst} className="block py-2.5 px-0 w-full text-sm text-gray-darker bg-transparent border-0 border-b-2 border-gray-light appearance-none dark:text-gray-dark dark:border-gray-dark dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    }
    if (props.idsecond == "gender") {
        var inputsecond = <select id={props.idsecond} class="block py-2.5 px-0 w-full text-sm text-gray-darker bg-transparent border-0 border-b-2 border-gray-light appearance-none dark:text-gray-dark dark:border-gray-dark dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
            <option selected disabled>Seleccione una opcion</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="X">Otro</option>

        </select>
        
    }

    else {
        inputsecond = <input type={props.typesecond} id={props.idsecond} name={props.idsecond} className="block py-2.5 px-0 w-full text-sm text-gray-darker bg-transparent border-0 border-b-2 border-gray-light appearance-none dark:text-gray-dark dark:border-gray-dark dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />        
    }

    if(props.idsecond =="vacio"){
        inputsecond = <div></div>
        labelsecond = <div></div>
        classdiv = ""      
    }
    return (
        <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
                {input}
                <label for={props.idfirst} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-darker duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{props.labelfirst}</label>
            </div>
            <div className={classdiv}>
                {inputsecond}
                {labelsecond}
            </div>
        </div>
    )
}

export default InputColForm