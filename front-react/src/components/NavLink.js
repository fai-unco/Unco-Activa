import {NavLink} from 'react-router-dom';

const CustomNavLink = ({ children, ...props }) => (
  <NavLink {...props}
    className = {`inline-flex items-center px-1 pt-1 border-b-2 border-lime-unco text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out focus:border-cyan-unco ${({isActive}) => (isActive 
      ? 'text-gray ' 
      : 'border-transparent text-gray-light hover:text-gray hover:border-cyan-unco focus:text-gray-dark')
    }`}>
    {children}
  </NavLink>
)

export default CustomNavLink
