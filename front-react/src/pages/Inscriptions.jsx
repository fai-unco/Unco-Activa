import Pagination from "components/elements/Pagination";
import React, { useContext, useEffect, useState } from "react";
import axios from "../lib/axios";
import ReactSelect from "react-select";
import { CategorieContext } from "../context/CategorieContext";

const Inscriptions = () => {
    const options = [{ value: null, label: "Reestablecer" }];
    const [categories] = useContext(CategorieContext);
    const [selectCategorie, setselectCategorie] = useState("");
    const [inputbusqueda, setinputbusqueda] = useState("");
    const [inicialInscriptions, setinicialInscriptions] = useState([]);
    const [inscriptions, setinscriptions] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [participantsPerPage] = useState(10);
    // const endpoint = 'http://127.0.0.1:8000/api'
    const endpoint = "https://uncoactiva-back.fi.uncoma.edu.ar/api";
    useEffect(() => {
        getAllInscriptos();
    }, []);
    const getAllInscriptos = async () => {
        await axios
            .get(`${endpoint}/frontInscriptions`)
            .then(function (response) {
                //console.log('success', response.data);
                setinscriptions(response.data);
                setinicialInscriptions(response.data);
            })
            .catch(function (error) {
                console.error("error", error.response);
            });
        //console.log(response.data)
    };
    //console.log('original', inscriptions);
    for (let index = 0; index < inscriptions.length; index++) {
        inscriptions[index].id = index + 1;
    }
    categories.map((categorie) => options.push({ value: categorie.name, label: categorie.name }));
    //console.log('reemplaazar id', inscriptions);
    const handleSearch = (e) => {
        setcurrentPage(1);
        setselectCategorie(null);
        setinputbusqueda(e.target.value);
        setinscriptions(
            inicialInscriptions.filter(function ({ name, surname, categorie_name }) {
                return name.toLowerCase().includes(e.target.value.toLowerCase()) || surname.toLowerCase().includes(e.target.value.toLowerCase()) || categorie_name.toLowerCase().includes(e.target.value.toLowerCase());
            })
        );
    };

    const handleSelect = (e) => {
        setinputbusqueda("");
        setselectCategorie(e);
        //console.log(selectCategorie)
        if (e.value === null) {
            //console.log(inicialInscriptions)
            setinscriptions(inicialInscriptions);
        } else {
            setinscriptions(
                inicialInscriptions.filter(function (categorie) {
                    return categorie.categorie_name === e.value;
                })
            );
        }
        setcurrentPage(1);
    };
    const paginateTo = (pageNumber) => {
        setcurrentPage(pageNumber);
    };

    const indexOfLastParticipant = currentPage * participantsPerPage;
    const indexOfFisrtParticipant = indexOfLastParticipant - participantsPerPage;
    const currentParticpants = inscriptions.slice(indexOfFisrtParticipant, indexOfLastParticipant);
    //console.log(currentParticpants)
    const Particpants = () => {
        return currentParticpants.map((inscription, index) => (
            <div key={index} className=" items-center grid-cols-3 grid bg-gray-light border-t border-blue-cyan text-[1.3em]">
                <div className="text-center px-3">{inscription.id}</div>

                <div className=" text-center  px-3">{inscription.categorie_name}</div>
                <div className="text-left px-3 uppercase">{inscription.name + " " + inscription.surname}</div>
            </div>
        ));
    };

    return (
        <div className="font-Hurme-Geometric-R min-h-screen">
            <div className="px-3 sm:px-10 md:px-20 lg:px-32 py-7 ">
                <div className=" bg-gray-light rounded-lg text-black">
                    <div className="py-10">
                        <div className="grid justify-center px-5 sm:px-5 lg:px-16 py-5">
                            <p className="text-blue-dark text-3xl sm:text-4xl font-bold font-Hurme-Geometric-BO">Participantes</p>
                            <h1 className=" bg-yellow py-1 w-1/3 mt-5"> </h1>
                        </div>
                        <div className="flex justify-center">
                            <p className="justify-center text-lg  font-Hurme-Geometric-Nd">Lista de participantes actualmente aceptados</p>
                        </div>
                        <div className="flex justify-center mt-6 px-5">
                            <div className="relative z-0 mb-6 w-full md:w-1/3 group">
                                <input onChange={(e) => handleSearch(e)} value={inputbusqueda} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-darker bg-transparent dark:bg-transparent border-0 border-b-2 border-gray-light appearance-none dark:text-gray-darker dark:border-gray-dark dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-darker duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Buscar Participante
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-center ">
                            <ReactSelect onChange={(e) => handleSelect(e)} options={options} value={selectCategorie} placeholder="Categoria" className="w-36 border border-blue-cyan" />
                        </div>

                        <div className="flex justify-center overflow-x-auto p-5 ">
                            <div className="font-Hurme-Geometric-N w-full px-1 md:w-5/6 border-2 border-blue-cyan rounded-lg pb-2 ">
                                <div className="  border-b-2 border-blue-cyan grid grid-cols-3 text-center font-Hurme-Geometric-BO italic text-blue-dark">
                                    <div className="px-3">#</div>
                                    <div className="px-3 overflow-auto">CATEGORÍA</div>
                                    <div className="px-3 overflow-auto ">NOMBRE Y APELLIDO</div>
                                </div>

                                <Particpants />
                            </div>
                        </div>
                        <Pagination participantsPerPage={participantsPerPage} totalParticpants={inscriptions.length} paginateTo={paginateTo} currentPage={currentPage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inscriptions;
