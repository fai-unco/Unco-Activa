import React from 'react'

const ButtonInput = (props) => {
    return (
        <div className={props.divclass}>
        <button
            type={props.type}
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 bg-board rounded-full hover:bg-yellow focus:outline-none focus:bg-yellow hover:text-black">
            {props.text}
        </button>
        </div>
    )
}

export default ButtonInput