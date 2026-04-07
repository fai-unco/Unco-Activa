import ApplicationLogo from "components/ApplicationLogo";
import ResponsiveNavLink from "components/ResponsiveNavLink";
import { useState, useEffect, useRef } from "react";
import CustomNavLink from "components/NavLink";
import { NavLink } from "react-router-dom";
import useHideOnScroll from "hooks/useHideOnScroll";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const [isNavigating, setIsNavigating] = useState(false);
  const showHeader = useHideOnScroll(isNavigating);

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

  const scrollTimeout = useRef(null);

  const handleNavLink = (e, location, responsive = false) => {
    e.preventDefault();

    if(responsive) {
      setOpen(false);
    }

    if (window.location.pathname !== "/") {
      window.location.replace(`/#${location}`);
    } else {
      let elem = document.getElementById(`${location}`);

      // Event para scroll automatico
      const onScroll = () => {
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }

        scrollTimeout.current = setTimeout(() => {
          setIsNavigating(false);
          window.removeEventListener("scroll", onScroll);
        }, 120); // tiempo sin movimiento = fin de scroll
      };

      // Ignora scroll automatico, al navegar con header o menu
      setIsNavigating(true);      
      // Scroll automatico
      elem.scrollIntoView({ behavior: "smooth" });
      // Deja de ignorar scrolls
      window.addEventListener("scroll", onScroll);
    }    
  };

  return (
    // <div className='  '>
    <nav className={`sticky top-0 z-50 transition-transform duration-200 font-Header-B h-16 ${
      (showHeader || open) ? "translate-y-0" : "-translate-y-full"
    }`}>
      {/* Primary Navigation Menu */}
      <div className="bg-black-unco fixed top-0 w-full mx-auto px-4 sm:px-4 xl:px-6 z-50">
        <div className="flex justify-between h-16">
          <div className="flex w-full justify-between">
            {/* Logo */}
            <div className="xl:static xl:transform-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-shrink-0 flex items-center">
              <NavLink
                onClick={(e) => handleNavLink(e, "top")}
              >
                <ApplicationLogo className="h-10" />
              </NavLink>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden gap-3 xl:gap-6 xl:-my-px xl:ml-10 xl:flex">
              <CustomNavLink
                onClick={(e) => handleNavLink(e, "top")}
              >
                Inicio
              </CustomNavLink>
              
              <CustomNavLink
                onClick={(e) => handleNavLink(e, "information")}
              >
                Información
              </CustomNavLink>

              <CustomNavLink
                onClick={(e) => handleNavLink(e, "racePath")}
              >
                Recorrido
              </CustomNavLink>

              <CustomNavLink
                onClick={(e) => handleNavLink(e, "shortRegulation")}
              >
                Reglamento
              </CustomNavLink>

              <CustomNavLink to="/preinscribirse">
                Preinscribirse
              </CustomNavLink>

              <CustomNavLink to="/participantes">
                Participantes
              </CustomNavLink>

              {/* <CustomNavLink to="/resultados">
                Resultados
              </CustomNavLink> */}
              
              <CustomNavLink
                onClick={(e) => handleNavLink(e, "organizers")}
              >
                Organizadores
              </CustomNavLink>

              <CustomNavLink
                onClick={(e) => handleNavLink(e, "contactUs")}
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
          <div className="-mr-2 flex items-center xl:hidden">
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
      <div ref={menuRef} className={`bg-black-unco fixed top-16 left-0 w-full transform transition-transform duration-300 xl:hidden z-40 ${
        open ? "translate-y-0" : "-translate-y-[150vh]"}`}>
        {
          <div className="pt-2 pb-3 space-y-1">
            <ResponsiveNavLink
              onClick={(e) => handleNavLink(e, "top", true)}
            >
              Inicio
            </ResponsiveNavLink>

            <ResponsiveNavLink
              onClick={(e) => handleNavLink(e, "information", true)}
            >
              Información
            </ResponsiveNavLink>

            <ResponsiveNavLink
              onClick={(e) => handleNavLink(e, "racePath", true)}
            >
              Recorrido
            </ResponsiveNavLink>

            <ResponsiveNavLink
              onClick={(e) => handleNavLink(e, "shortRegulation", true)}
            >
              Reglamento
            </ResponsiveNavLink>

            <ResponsiveNavLink 
              onClick={() => {                  
                  setOpen(false);
              }}
              to="/preinscribirse"
            >
              Preinscribirse
            </ResponsiveNavLink>

            <ResponsiveNavLink
              onClick={() => {                  
                setOpen(false);                  
              }}
              to="/participantes"
            >
              Participantes
            </ResponsiveNavLink>

            {/* <ResponsiveNavLink 
              onClick={() => {                  
                setOpen(false);                  
              }}
              to="/resultados"
            >
              Resultados
            </ResponsiveNavLink> */}

            <ResponsiveNavLink
              onClick={(e) => handleNavLink(e, "organizers", true)}
            >
              Organizadores
            </ResponsiveNavLink>

            <ResponsiveNavLink
              onClick={(e) => handleNavLink(e, "contactUs", true)}
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
