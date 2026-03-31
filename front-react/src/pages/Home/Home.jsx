import AlertSuccess from "components/alerts/AlertSuccess";
import ContacUs from "pages/Home/components/ContacUs";
import RacePath from "pages/Home/components/RacePath";
import ShortRegulation from "pages/Home/components/ShortRegulation";
import Hero from "pages/Home/components/Hero";
import Carousel from "pages/Home/components/Carousel/Carousel";
import { routes } from "routes/routes";

import { useState } from "react";
// import { Link } from "react-router-dom";
// import { AccessAlarm, Event, LocationOn } from "@mui/icons-material";
import { Fab } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

const mockImagenes = [
  // "elements/camiseta-2023.jpg",
  // "elements/unco-activa2023.jpeg",
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

const isdateOfRace = Date.now() > new Date("April 25, 2026 15:00:00");

const Home = () => {
  const [openEnd, setopenEnd] = useState(!isdateOfRace);
  return (
    <div className="flex flex-col items-center font-Text-R px-3 md:px-12 pb-7 gap-5">
      
      <AlertSuccess
        // open={openEnd}
        open = {false}
        onClose={setopenEnd}
        bg=" rgb(240 240 240)"
        titlecolor="warning.main"
        title={
            <span className="font-semibold text-red-high">
              ¡Atención Participantes!
            </span>
          }
        description={
          <div>
            {/* 
                <p className="text-center">
                    <span className="text-[1.4rem] text-red-700 font-bold py-4 font-Header-B">¡CARRERA REPROGRAMADA!</span>
                    <br />
                    <span className="text-[1.4rem] text-blue-high font-bold py-4 font-Header-B">¡8/6 - 10:30 AM!</span>
                </p>
                <p>
                    <span className="text-[1rem] text-blue-500 py-4 font-Header-B flex">
                        La carrera se pospone para el Domingo 8 de Junio a las 10:30 AM.
                    </span>
                </p>
                */}
            {/* <p>
                    <span className="text-[1rem] text-blue-500 py-4 font-Header-B flex">
                        Cierra la preinscripción 6/06 a las 21 hs. Acreditaciones y entrega de kit van a ser el día sábado 7 de junio de 14 a 18 horas en el hall central de la Universidad.
                    </span>
                </p> */}
            <p>
              <span className="text-[1rem] text-blue-500 py-4 font-Header-B flex">
                uncoactiva@gmail.com
              </span>
            </p>
            {/* 
                <span className="text-[1.1rem] text-blue-high font-normal py-4 font-Header-B">Deben realizar la acreditación y registro el día:</span>
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
                <span className="text-[1rem] text-blue-cyan pt-6 font-Header-B flex">
                    <img src="../elements/botella.svg" alt="Botella" className="mr-2 w-24" />
                    Además, queremos fomentar el cuidado del medio ambiente, por lo que te animamos a que traigas tu propia botella de agua. Con tu ayuda, reduciremos al mínimo el uso de envases desechables.
                </span>*/}
          </div>
        }
      />

      {/* Hero */}
      <Hero />

      {/* Body */}
      <div className="">
        <div className="flex flex-col bg-gray-light rounded-lg text-black-unco gap-8 py-10">
          <div id="conoceMas" className="flex flex-col justify-center items-center gap-5">
            <div className="px-5 sm:px-5 lg:px-16">
              <h1 className='text-center text-[2rem] md:text-[2.5rem] font-Header-B text-black-unco'>
                La Carrera de la UNCo
              </h1>
              <h1 className="bg-lime-unco py-1 w-1/3 mt-5"></h1>
            </div>
          </div>

          {/* <hr className="my-[1rem] text-black-unco"></hr> */}
          <div className="">
            <Carousel imagenes={mockImagenes} className="bg-white" />
          </div>

          <div className="">
            <div className="flex flex-col px-5 lg:px-16 gap-4">
              <div className="text-blue-cyan text-lg sm:text-xl font-bold font-Text-R">
                <p>
                  La carrera UNCo Activa surge en el año 2017 y se ha convertido
                  en un evento emblemático dentro de la comunidad de la
                  Universidad Nacional del Comahue, destacando no solo por su
                  carácter competitivo, sino también por su enfoque en la salud y
                  el bienestar de todos los participantes. Esta iniciativa refleja
                  el compromiso de la Universidad con la promoción de un estilo de
                  vida activo y saludable, alineándose con los objetivos del área
                  de deportes y recreación de nuestra Institución.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <p>
                  Gran parte del recorrido se realiza en el Área Protegida Parque
                  Universitario Provincia del Monte. Este parque fue creado
                  mediante la ordenanza Nº 714/2004 del Consejo Superior de la
                  Universidad Nacional del Comahue. Ocupa un área de 70 ha en la
                  parte norte de los terrenos del campus de nuestra institución en
                  la ciudad de Neuquén.
                </p>
                <p>
                  Participar en la carrera UNCo Activa no solo brinda la
                  oportunidad de disfrutar de una jornada de ejercicio al aire
                  libre, sino que también fomenta la integración y el compañerismo
                  entre los miembros de la Comunidad Universitaria y la Comunidad
                  en General. Es un espacio donde se celebra el esfuerzo personal
                  y colectivo, promoviendo valores como la perseverancia, la
                  disciplina y el trabajo en equipo.
                </p>
                <p>
                  Esta carrera se enmarca dentro de una serie de actividades
                  deportivas que la Universidad organiza a lo largo del año,
                  contribuyendo a la formación integral de los estudiantes en
                  particular y el resto de la comunidad. Al incentivar la práctica
                  del trote y el senderismo, se busca no solo mejorar la condición
                  física, sino también reducir el estrés y mejorar la salud
                  mental.
                </p>
              </div>

              <div className="flex flex-col font-bold font-Text-R text-blue-cyan gap-4">
                <p>
                  La carrera UNCo Activa es más que una competencia, es una
                  celebración del deporte y la comunidad universitaria. Su
                  relación con el área de deportes y recreación de la Universidad
                  Nacional del Comahue resalta la importancia de fomentar hábitos
                  saludables y crear un ambiente inclusivo donde todos puedan
                  disfrutar de los beneficios del ejercicio.
                </p>

                <p>
                  ¡Así que a calzarse las zapatillas y a correr, trotar o caminar
                  juntos por una vida activa, siempre en Defensa de la Universidad
                  Pública!
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Información */}
      <div id="information" className='rounded-lg bg-gray-light text-black-unco grid items-center justify-center p-10 gap-3'>
        <div className='flex flex-col items-center justify-center'>
          <div className='grid justify-center'>
            <h1 className='text-3xl sm:text-4xl font-bold font-Header-B'>
                Información
              </h1>
              <h1 className="bg-lime-unco py-1 w-1/3 mt-5"></h1>
            </div>
            <div className="text-[1.8rem] text-center font-Header-B text-blue-cyan">
              <h1 className="">SABADO 25 DE ABRIL / 15:00 HS</h1>
              <h1>Universidad Nacional del Comahue - Neuquén Capital</h1>
            </div>

            <div className="flex flex-col lg:flex-row items-center w-full">
              <div className='w-2/3 xl:w-1/3 rounded-lg p-2'>
                <img className='rounded-lg' alt='feed story' src={'elements/placa-reglamento.png'} />
              </div>

              <div className="flex flex-col items-center p-5 gap-5">
                <h4 className="text-[1.2rem] text-blue-cyan font-bold font-Header-B">
                  Costos de Inscripción año 2026
                </h4>
                {/* Costos hardcodeados, mejorar haciendo llamada a la api (con datos en BD) */}
                <ul className="list-disc pl-5">
                  <p className="font-Header-B">
                    Comunidad en general:
                  </p>
                  <li>15 km $55000.</li>
                  <li>7 km $50000.</li>
                  <li>3 km $40000. </li>
                  <br />
                  
                  <p className="font-Header-B">
                    Comunidad Universitaria (estudiantes, docentes, nodocentes, personas graduadas):
                  </p>
                  <li>15 km $50000.</li>
                  <li>7 km $45000.</li>
                  <li>3 km $35000.</li>
                </ul>

                <p className="pt-2">
                  <span className="font-Header-B">Incluye: </span>
                  Derecho a participación / Remera técnica / Servicios de control
                  / Servicio de hidratación / Seguro de corredor.
                </p>

                <div className="flex xl:pt-8 xl:pb-1 xl:my-0 my-5 px-2 -z-0 relative">
                  <Fab
                    color="primary"
                    variant="extended"
                    size="small"
                    href={`${routes.preinscribirse}`}
                  >
                    <LibraryBooksOutlinedIcon className="mr-3" /> Ir a
                    Preinscripciones
                  </Fab>
                </div>
              </div>
            </div>           
          </div>          
        </div>

      <div className="flex flex-col lg:flex-row w-full gap-5">
        {/* Recorrido */}
        <div id="racePath" className='w-full xl:w-1/2 bg-gray-light rounded-lg'>
          <RacePath />
        </div>

        {/* Reglamento */}
        <div className="w-full xl:w-1/2">
          <ShortRegulation />
        </div>
      </div>

      <div className="flex flex-col w-full xl:flex-row gap-5">        
        {/* Organizadores */}
        <div id="organizers" className="bg-gray-light rounded-lg justify-center items-center gap-5 w-full">
          <div className=" text-black-unco p-10">
            <div className="grid justify-center">
              <div className='grid justify-center'>
                <h1 className='text-blac-unco text-3xl sm:text-4xl font-bold font-Header-B'>
                  Organizadores
                </h1>
                <h1 className='bg-lime-unco py-1 w-1/3 mt-5'></h1>
              </div>

              <div              
                className="grid grid-cols-3  items-center justify-center p-5"
              >
                <img
                  className="col-span-1 justify-self-start"
                  alt="Dirección de deportes y recreación"
                  src={"/logos/unco/Logo Dirección de Deportes y Recreación 4-10.png"}
                />
                <img
                  className="col-span-1 justify-self-center"
                  alt="Unco"
                  src={"/logos/unco/LOGO UNCO.png"}
                />
                <img
                  className="col-span-1 justify-self-end"
                  alt="Secretaria de Bienestar Universitario"
                  src={"/logos/unco/Secretaría de Bienestar Universitario-01.png"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div id="contactUs" className="rounded-lg flex justify-center w-full">
          <ContacUs />
        </div>
      </div>
    </div>
  );
};

export default Home;
