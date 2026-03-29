import {NavLink} from 'react-router-dom';

const ResponsiveNavLink = ({children, ...props }) => (
  <NavLink
    {...props}
    className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out focus:text-gray-darker focus:bg-gray border-lime-unco focus:border-cyan-unco ${({isActive}) => (isActive
      ? 'text-gray-dark'
      : 'border-transparent text-gray hover:text-gray-light hover:bg-gray-dark ')}`
    }>
    {children}
  </NavLink>
)

export const ResponsiveNavButton = props => (
  <button
    className = "block w-full pl-3 pr-4 py-2 border-l-4 text-left text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent text-gray hover:text-gray-light hover:bg-gray-dark hover:border-cyan-unco focus:text-gray-darker focus:bg-gray focus:border-lime-unco"
    {...props}
  />
)

export default ResponsiveNavLink
