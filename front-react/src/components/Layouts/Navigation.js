import ApplicationLogo from 'components/ApplicationLogo'
import ResponsiveNavLink from 'components/ResponsiveNavLink'
import { useState } from 'react'
import CustomNavLink from 'components/NavLink';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  // const { logout } = useAuth()
  const [open, setOpen] = useState(false)

  return (
    // <div className='  '>
    <nav className="bg-gray-darker font-Hurme-Geometric-N sticky top-0 z-50">
      {/* Primary Navigation Menu */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname !== '/') {
                  window.location.replace('/#top');
                }
                else {
                  let racepath = document.getElementById('top');
                  racepath.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                <ApplicationLogo className="block h-10 w-auto fill-current text-gray-light" />
              </NavLink>
            </div>
            {/* Navigation Links */}
            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <CustomNavLink
                onClick={(e) => {
                  e.preventDefault();                 
                  if (window.location.pathname !== '/') {
                    window.location.replace('/#top');
                  }
                  else {
                    let racepath = document.getElementById('top');
                    racepath.scrollIntoView({ behavior: 'smooth' });
                  }                   
                }}
              >
                Inicio
              </CustomNavLink>

              <CustomNavLink
                onClick={(e) => {
                  e.preventDefault();                  
                  if (window.location.pathname !== '/') {
                    window.location.replace('/#racePath');                    
                  } 
                  else{
                    let racepath = document.getElementById('racePath');
                    racepath.scrollIntoView({ behavior: 'smooth' });                  
                  }              
                }}
              >
                Recorrido
              </CustomNavLink>

              <CustomNavLink
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== '/') {
                    window.location.replace('/#shortRegulation');
                  }
                  else {
                    let racepath = document.getElementById('shortRegulation');
                    racepath.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Reglamento
              </CustomNavLink>

              <CustomNavLink
                to='/inscribirse'                 
              
              >
                Inscribirse
              </CustomNavLink>

            </div>
          </div>
          {/* Settings Dropdown */}
          {/* {user ?
            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <Dropdown
                align="right"
                width="48"
                trigger={
                  <button className="flex items-center text-sm font-medium text-gray
                  hover:text-gray-light focus:outline-none transition duration-150 ease-in-out">
                    <div>{user?.name}</div>
                    <div className="ml-1">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          // eslint-disable-next-line max-len
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>
                }> */}
          {/* Authentication */}
          {/* <DropdownButton onClick={logout}>
                  Cerrar Sesion
                </DropdownButton>
              </Dropdown>
            </div>
            :
            <>
              <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                <CustomNavLink
                  to="/login"
                  className="ml-4 text-sm text-gray underline"
                >
                  Iniciar Sesion
                </CustomNavLink>
                <CustomNavLink
                  to="/register"
                  className="ml-4 text-sm text-gray underline"
                >
                  Registrate
                </CustomNavLink>
              </div>
            </>
          } */}
          {/* Hamburger */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setOpen(open => !open)}
              className="inline-flex items-center justify-center p-2
              rounded-md text-gray hover:text-gray-darker
              hover:bg-gray-light focus:outline-none focus:bg-gray-light
              focus:text-gray-darker transition duration-150 ease-in-out">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24">
                {open ? (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Responsive Navigation Menu */}
      {open && (
        <div className="block sm:hidden border-t border-gray">
          {        
            <div className="pt-2 pb-3 space-y-1">            
              <ResponsiveNavLink
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== '/') {
                    window.location.replace('/#top');
                  }
                  else {
                    let racepath = document.getElementById('top');
                    racepath.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
              Inicio
              </ResponsiveNavLink>

              <ResponsiveNavLink
                to='/inscribirse'

              >
              Inscribirse
              </ResponsiveNavLink>

              <ResponsiveNavLink
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== '/') {
                    window.location.replace('/#racePath');
                  }
                  else {
                    let racepath = document.getElementById('racePath');
                    racepath.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
              Recorrido
              </ResponsiveNavLink>

              <ResponsiveNavLink
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== '/') {
                    window.location.replace('/#shortRegulation');
                  }
                  else {
                    let racepath = document.getElementById('shortRegulation');
                    racepath.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
              Reglamento
              </ResponsiveNavLink>            
              {/* <ResponsiveNavLink
                to="/login"
              >
                Iniciar Sesion
              </ResponsiveNavLink>
              <ResponsiveNavLink
                to="/register"
              >
                Registrate
              </ResponsiveNavLink> */}
            </div>
            
          }
        </div>
      )}
    </nav>
    // </div>
  )
}
export default Navigation
