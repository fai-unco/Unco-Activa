import {NavLink} from 'react-router-dom';

const ResponsiveNavLink = ({children, ...props }) => (
  <NavLink
    {...props}
    className={({isActive}) => (isActive
      ? 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium ' +
      'leading-5 focus:outline-none transition duration-150 ease-in-out ' +
      'border-blue-cyan text-gray-dark bg-gray-light focus:text-gray-darker' +
      ' focus:bg-gray focus:border-yellow'
      : 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium ' +
      'leading-5 focus:outline-none transition duration-150 ' +
      'ease-in-out border-transparent text-gray hover:text-gray-light' +
      ' hover:bg-gray-dark hover:border-blue-cyan focus:text-gray-darker ' +
      'focus:bg-gray focus:border-yellow')
    }>
    {children}
  </NavLink>
)

export const ResponsiveNavButton = props => (
  <button
    className="block w-full pl-3 pr-4 py-2 border-l-4
     text-left text-base font-medium leading-5 focus:outline-none
     transition duration-150 ease-in-out border-transparent
     text-gray hover:text-gray-light hover:bg-gray-dark
     hover:border-blue-cyan focus:text-gray-darker focus:bg-gray focus:border-yellow"
    {...props}
  />
)

export default ResponsiveNavLink
