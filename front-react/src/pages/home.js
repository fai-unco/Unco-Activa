import AlertSuccess from "components/alerts/AlertSuccess";
import ContacUs from "components/home/ContacUs";
import RacePath from "components/home/RacePath";
import ShortRegulation from "components/home/ShortRegulation";
import Hero from "components/Layouts/Hero";
import Slider from "components/Slider";

import { useState } from "react";
import { Link } from "react-router-dom";
import { AccessAlarm, Event, LocationOn } from "@mui/icons-material";
import { Fab } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

const mockImagenes = [
    //"elements/camiseta-2023.jpg",
    "elements/unco-activa2023.jpeg",
    "elements/edicion-anterior1.jpeg",
    "elements/edicion-anterior2.jpeg",
    "elements/edicion-anterior3.jpeg",
    "elements/edicion-anterior4.jpeg",
    "elements/edicion-anterior5.jpeg",
    "elements/edicion-anterior6.jpeg",
    "elements/edicion-anterior7.jpeg",
    "elements/edicion-anterior8.jpeg",
    "elements/edicion-anterior9.jpeg",
    // 'elements/edicion20211210_190204.mp4'
];
const isdateOfRace = Date.now() > new Date("April 26, 2023 15:00:00");

const Home = () => {
    const [openEnd, setopenEnd] = useState(!isdateOfRace);
    return (
        <div className="font-Hurme-Geometric-R min-h-screen">
            <AlertSuccess
                open={openEnd}
                onClose={setopenEnd}
                bg=" rgb(240 240 240)"
                titlecolor="warning.main"
                title={<span className="font-semibold text-red-high">¡Atención Participantes!</span>}
                description={
                    <div>
                        <p className="text-center">
                            <span className="text-[1.4rem] text-red-700 font-bold py-4 font-Hurme-Geometric-BO">¡CARRERA REPROGRAMADA!</span>
                            <br />
                            <span className="text-[1.4rem] text-blue-high font-bold py-4 font-Hurme-Geometric-BO">¡26/2 - 15 AM!</span>
                        </p>
                        <p>
                            <span className="text-[1rem] text-blue-500 py-4 font-Hurme-Geometric-BO flex">Habida cuenta del alerta meteorológico por lluvias y ráfagas de vientos de hasta 120 km/h que se preveen para este viernes y sábado, la carrera se pospone para el mismo Domingo 29 del corriente a las 9 AM.</span>
                        </p>
                        <span className="text-[1.1rem] text-blue-high font-normal py-4 font-Hurme-Geometric-BO">Deben realizar la acreditación y registro el día:</span>
                        <ul className="text-center pt-3">
                            <li>
                                <Event color="primary" /> Viernes 25 de Abril
                            </li>
                            <li>
                                <AccessAlarm color="primary" /> De 12:00 a 16:00 hs
                            </li>
                            <li>
                                <LocationOn color="primary" /> Gimnasio Polideportivo Roberto Monteros (Escondido)
                            </li>
                        </ul>
                        <span className="text-[1rem] text-cyan-700 pt-6 font-Hurme-Geometric-BO flex">
                            <img src="../elements/botella.svg" alt="Botella" className="mr-2 w-24" />
                            Además, queremos fomentar el cuidado del medio ambiente, por lo que te animamos a que traigas tu propia botella de agua. Con tu ayuda, reduciremos al mínimo el uso de envases desechables.
                        </span>
                    </div>
                }
            />
            <div>
                <Hero />
            </div>
            <div className="px-3 md:px-12 py-7  ">
                <div className=" bg-gray-light rounded-lg text-black">
                    <div id="conoceMas" className="text-[1.8rem] text-center p-5 font-Hurme-Geometric-BO text-red-600">
                        <h1 className="">SÁBADO 26 ABRIL / 15:00 HRS</h1>
                        <h1>Universidad Nacional del Comahue - Neuquén Capital</h1>
                    </div>
                    <div className="flex justify-center pt-5">
                        <Slider imagenes={mockImagenes} className="bg-white" />
                    </div>

                    <div className="py-5">
    <div className="px-5 sm:px-5 lg:px-16">
        <h1 className="bg-yellow py-1 w-1/6 mt-5"></h1>
    </div>

        <div className="px-5 lg:px-16">
            <p className="text-blue-dark text-lg sm:text-xl font-bold font-Hurme-Geometric-BO">
                La carrera UNCo Activa surge en el año 2017 y se ha convertido en un evento emblemático dentro de la comunidad de la Universidad Nacional del Comahue, destacando no solo por su carácter competitivo, sino también por su enfoque en la salud y el bienestar de todos los participantes. Esta iniciativa refleja el compromiso de la Universidad con la promoción de un estilo de vida activo y saludable, alineándose con los objetivos del área de deportes y recreación de nuestra Institución.
            </p>

            <p className="mt-4">
                Gran parte del recorrido se realiza en el Área Protegida Parque Universitario Provincia del Monte. Este parque fue creado mediante la ordenanza Nº 714/2004 del Consejo Superior de la Universidad Nacional del Comahue. Ocupa un área de 70 ha en la parte norte de los terrenos del campus de nuestra institución en la ciudad de Neuquén.
            </p>

            <p className="mt-4">
                Participar en la carrera UNCo Activa no solo brinda la oportunidad de disfrutar de una jornada de ejercicio al aire libre, sino que también fomenta la integración y el compañerismo entre los miembros de la Comunidad Universitaria y la Comunidad en General. Es un espacio donde se celebra el esfuerzo personal y colectivo, promoviendo valores como la perseverancia, la disciplina y el trabajo en equipo.
            </p>

            <p className="mt-4">
                Esta carrera se enmarca dentro de una serie de actividades deportivas que la Universidad organiza a lo largo del año, contribuyendo a la formación integral de los estudiantes en particular y el resto de la comunidad. Al incentivar la práctica del trote y el senderismo, se busca no solo mejorar la condición física, sino también reducir el estrés y mejorar la salud mental.
            </p>

            <p className="mt-4 font-bold text-blue-dark">
                La carrera UNCo Activa es más que una competencia, es una celebración del deporte y la comunidad universitaria. Su relación con el área de deportes y recreación de la Universidad Nacional del Comahue resalta la importancia de fomentar hábitos saludables y crear un ambiente inclusivo donde todos puedan disfrutar de los beneficios del ejercicio.
            </p>

            <p className="mt-4 text-lg font-bold text-blue-dark">
                ¡Así que a calzarse las zapatillas y a correr, trotar o caminar juntos por una vida activa, siempre en Defensa de la Universidad Pública!
            </p>
        </div>

        <div className="px-5 sm:px-5 lg:px-16 pt-10">
            <h4 className="text-[1.2rem] text-blue-high font-bold pt-5 font-Hurme-Geometric-BO">
                Inscripciones - Categorias
            </h4>

            <ul className="list-disc pl-5">
                <p className="font-bold">Montos de inscripción:</p>
                <li>15 km $45000.</li>
                <li>7 km $40000.</li>
                <li>3 km $30000. </li>
                <br />
                <p className="font-bold">Montos diferenciados para comunidad Universitaria:</p>
                <li>15 km $42000.</li>
                <li>7 km $37000.</li>
                <li>3 km $25000.</li>
            </ul>

            <p className="pt-2">
                <span className="font-Hurme-Geometric-N">Incluye: </span>
                Derecho a participación / Remera técnica / Servicios de control / Servicio de hidratación / Seguro de corredor.
            </p>

            <div className="flex xl:pt-8 xl:pb-1 justify-center xl:my-0 my-5 px-2 -z-0 relative">
                <Fab color="primary" variant="extended" size="small" href={"/inscribirse"}>
                    <LibraryBooksOutlinedIcon className="mr-3" /> Ir a Inscripciones
                </Fab>
            </div>
        </div>
    </div>


                    <div className="grid justify-center pb-5">
                        <h1 className="text-center text-[2rem]  md:text-[2.5rem] font-Hurme-Geometric-BO text-blue-dark" fill="currentColor">
                            ORGANIZADORES
                        </h1>

                        <div id="racePath" className="grid grid-cols-3 gap-4 items-center justify-center p-5">
                        <img 
                            className="col-span-1 h-24 md:h-[180px] justify-self-start" 
                            alt="Dirección de deportes y recreación" 
                            src={"/logos/Logo Dirección de Deportes y Recreación 4-10.png"} 
                        />
                        <img 
                            className="col-span-1 h-24 md:h-[180px] justify-self-center" 
                            alt="Unco" 
                            src={"/logos/LOGO UNCO PNG.png"} 
                        />
                        <img 
                            className="col-span-1 h-24 md:h-[180px] justify-self-end bg-gray-darker" 
                            alt="Secretaria de Bienestar Universitario" 
                            src={"/logos/Secretaria_de_bienestar_universitario.png"} 
                        />
                        </div>

                        <div></div>
                    </div>
                </div>
            </div>

            <RacePath />
            <ShortRegulation />
            <div id="contactUs" className="flex justify-center px-3 md:px-12 py-7 ">
                <ContacUs />
            </div>
        </div>
    );
};

export default Home;
