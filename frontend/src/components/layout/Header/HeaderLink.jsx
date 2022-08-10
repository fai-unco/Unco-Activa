import React from 'react'
import { Link } from 'react-router-dom';

const HeaderLink = (props) => {    
    return <Link className='block py-2 pr-4 pl-3  border-b hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0  lg:hover:text-blue-cyan focus:text-blue-cyan lg:dark:hover:bg-transparent' to={props.href}>{props.name}</Link>; 
};

export default HeaderLink