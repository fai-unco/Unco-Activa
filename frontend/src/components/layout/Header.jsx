import { React, useState, } from 'react'
import { Link } from 'react-router-dom';
import HeaderLink from './Header/HeaderLink';

function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <header className='App-header sticky top-0'>
            <nav className="bg-white  border-gray-light px-4 lg:px-1 py-2.5 lg:py-0 w-full dark:bg-gray-darker">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <Link to="/" className="flex items-center">
                        <img src="/UNCO_Activa.svg" className="mr-3 h-6 sm:h-9" alt="UncoActiva Logo" />
                    </Link>
                    <div className="flex items-center  lg:order-2">
                        <button onClick={() => setIsNavOpen((prev) => !prev)} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:focus:ring-gray-600" aria-expanded="false" id='hamburger'>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
                            <svg className="hidden w-6 h-6" fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                        </button>
                    </div>
                    <div className={isNavOpen ? "showMenuNav justify-around items-center w-full lg:flex lg:w-auto lg:order-1" : "hidden lg:flex"} id="mobile-menu-2">
                        <div className='lg:ml-20 flex justify-center order-1 my-10 '>
                            <span className=''>
                                <Link to="/login" className="text-black lg:text-black lg:dark:text-white lg:hover:text-blue-cyan bg-yellow  dark:bg-yellow lg:bg-transparent  border-gray dark:border-gray lg:border-none border-2  hover:dark:text-white dark:text-black hover:bg-transparent dark:hover:bg-transparent  font-medium rounded-full  text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none ">Iniciar Sesion</Link>
                            </span>
                            <span className='ml-2 lg:ml-0'>
                                <Link to="/registro" className="text-black lg:bg-transparent lg:dark:text-white border-2 lg:hover:text-yellow  border-gray dark:border-gray bg-blue-cyan lg:border-none hover:bg-transparent hover:text-black hover:dark:text-white font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-cyan  focus:outline-none">Registrarse</Link>
                            </span>
                        </div>
                        <ul className="flex flex-col mt-4 items-center font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <HeaderLink name="Inicio" href="/"></HeaderLink>
                            </li>
                            <li>
                                <HeaderLink name="Resultados" href="/"></HeaderLink>
                            </li>
                            <li>
                                <HeaderLink name="Recorrido" href="/"></HeaderLink>
                            </li>
                            <li>
                                <HeaderLink name="Colaboradores" href="/"></HeaderLink>
                            </li>
                            <li>
                                <HeaderLink name="Contacto" href="/"></HeaderLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>


    )

}
export default Header