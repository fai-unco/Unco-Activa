import ApplicationLogo from "components/ApplicationLogo";
import ResponsiveNavLink from "components/ResponsiveNavLink";
import { useState, useEffect, useRef } from "react";
import CustomNavLink from "components/NavLink";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Cerrar menú si clickeas afuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    // <div className='  '>
    <nav className="font-Hurme-Geometric-N sticky top-0 z-50">
      {/* Primary Navigation Menu */}
      <div className="bg-gray-darker sticky top-0 w-full mx-auto px-4 sm:px-6 lg:px-8 z-50">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== "/") {
                    window.location.replace("/#top");
                  } else {
                    let racepath = document.getElementById("top");
                    racepath.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <ApplicationLogo className="block h-10 w-auto fill-current text-gray-light" />
              </NavLink>
            </div>
            {/* Navigation Links */}
            <div className="hidden space-x-3 lg:space-x-6  md:-my-px md:ml-10 md:flex">
              <CustomNavLink
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== "/") {
                    window.location.replace("/#top");
                  } else {
                    let racepath = document.getElementById("top");
                    racepath.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Inicio
              </CustomNavLink>

              <CustomNavLink
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== "/") {
                    window.location.replace("/#racePath");
                  } else {
                    let racepath = document.getElementById("racePath");
                    racepath.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Recorrido
              </CustomNavLink>

              <CustomNavLink
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== "/") {
                    window.location.replace("/#shortRegulation");
                  } else {
                    let racepath = document.getElementById("shortRegulation");
                    racepath.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Reglamento
              </CustomNavLink>

              {/* <CustomNavLink to="/preinscribirse">Preinscribirse</CustomNavLink> */}

              <CustomNavLink to="/participantes">Participantes</CustomNavLink>

              <CustomNavLink to="/resultados">Resultados</CustomNavLink>

              <CustomNavLink
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== "/") {
                    window.location.replace("/#contactUs");
                  } else {
                    let racepath = document.getElementById("contactUs");
                    racepath.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contactanos
              </CustomNavLink>
              {/* <CustomNavLink to="/sobrenosotros">Sobre Nosotros</CustomNavLink> */}
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
          <div className="-mr-2 flex items-center md:hidden">
            <button
              ref={buttonRef}
              onClick={() => setOpen((open) => !open)}
              className="inline-flex items-center justify-center p-2
              rounded-md text-gray hover:text-gray-darker
              hover:bg-gray-light focus:outline-none focus:bg-gray-light
              focus:text-gray-darker transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
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
      <div ref={menuRef} className={`bg-gray-darker fixed top-16 left-0 w-full border-t border-gray transform transition-transform duration-300 md:hidden z-40 ${
        open ? "translate-y-0" : "-translate-y-full"}`}>
        {
          <div className="pt-2 pb-3 space-y-1">
            <ResponsiveNavLink
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                if (window.location.pathname !== "/") {
                  window.location.replace("/#top");
                } else {
                  let racepath = document.getElementById("top");
                  racepath.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Inicio
            </ResponsiveNavLink>

            <ResponsiveNavLink
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                if (window.location.pathname !== "/") {
                  window.location.replace("/#racePath");
                } else {
                  let racepath = document.getElementById("racePath");
                  racepath.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Recorrido
            </ResponsiveNavLink>

            <ResponsiveNavLink
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                if (window.location.pathname !== "/") {
                  window.location.replace("/#shortRegulation");
                } else {
                  let racepath = document.getElementById("shortRegulation");
                  racepath.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Reglamento
            </ResponsiveNavLink>

            <ResponsiveNavLink 
              onClick={() => {                  
                  setOpen(false);                  
                }}
              to="/preinscribirse">Preinscribirse</ResponsiveNavLink>

            <ResponsiveNavLink
              onClick={() => {                  
                  setOpen(false);                  
                }}
              to="/participantes">
              Participantes
            </ResponsiveNavLink>

            <ResponsiveNavLink 
              onClick={() => {                  
                  setOpen(false);                  
                }}
              to="/resultados">Resultados
            </ResponsiveNavLink>

            <ResponsiveNavLink
              onClick={(e) => {
                e.preventDefault();
                setOpen(false); 
                if (window.location.pathname !== "/") {
                  window.location.replace("/#contactUs");
                } else {
                  let racepath = document.getElementById("contactUs");
                  racepath.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contactanos
            </ResponsiveNavLink>

            {/* <ResponsiveNavLink 
                  onClick={() => {                  
                  setOpen(false);                  
                }}
                to="/sobrenosotros">
                  Sobre Nosotros
                </ResponsiveNavLink> */}
          </div>
        }
      </div>
    </nav>
    // </div>
  );
};
export default Navigation;
