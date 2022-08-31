import {NavLink} from 'react-router-dom';

const CustomNavLink = ({ children, ...props }) => (
  <NavLink {...props}
    className={({isActive}) => (isActive
      ? 'inline-flex items-center px-1 pt-1 border-b-2 ' +
      'text-sm font-medium leading-5 focus:outline-none transition ' +
      'duration-150 ease-in-out border-blue-cyan text-gray focus:border-blue-cyan'
      : 'inline-flex items-center px-1 pt-1 border-b-2 text-sm ' +
      'font-medium leading-5 focus:outline-none transition duration-150 ' +
      'ease-in-out border-transparent text-gray-light hover:text-gray ' +
      'hover:border-blue-cyan focus:text-gray-dark focus:border-blue-cyan')
    }>
    {children}
  </NavLink>
)

export default CustomNavLink
