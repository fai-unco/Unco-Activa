import React from 'react'

const InputForm = (props) => {
    return (
        <div className={props.divclass}>
        <input
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            className="block w-full px-4 py-2 mt-2 h-input text-black bg-white border rounded-full focus:border-blue-cyan focus:ring-blue-cyan focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder={props.holder}
        />
        </div>
    )
}

export default InputForm