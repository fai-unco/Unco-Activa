import AlertSuccess from "components/alerts/AlertSuccess";
import { useState } from "react";

export default function Avisos() {
  const isdateOfRace = Date.now() > new Date("April 25, 2026 15:00:00");
  const [openEnd, setopenEnd] = useState(!isdateOfRace); //Para avisos antes de la carrera

  return (
    <AlertSuccess
      open={openEnd}
      // open = {false}
      onClose={setopenEnd}
      bg="rgb(240 240 240)"
      titlecolor="warning.main"
      title={<span className="font-Header-B">¡Información Importante!</span>}
      description={
        <div className="flex flex-col gap-6">
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
            <span className="text-[1.6rem] font-Text-R font-bold flex text-blue-cyan">
              Entrega de Kits de corredor:
            </span>
            <span className="text-[1.5rem] font-Text-R ">
              <b>Viernes 24 de abril de 15 a 19 horas</b> en el{" "}
              <b>
                Hall Central de la Universidad Nacional del Comahue (Buenos
                Aires 1400)
              </b>
            </span>
          </p>

          <p>
            <span className="text-[1.6rem] font-Text-R font-bold flex text-blue-cyan">
              Cierre de inscripciones:
            </span>
            <span className="text-[1.5rem] font-Text-R">
              <b>Viernes 24 de abril a las 10:30 horas</b>
            </span>
          </p> */}

          {/* <span className="text-[1.1rem] text-blue-high font-normal py-4 font-Header-B">
              Deben realizar la acreditación y registro el día:
            </span>
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
            </span> */}

          <p>
            <span className="text-blue-500 font-Text-R flex font-bold">
              (Podrás encontrar estos avisos en la sección "Información")
            </span>
          </p>

          {/* <p>
                <span className="text-blue-500 font-Header-B flex">
                  uncoactiva@gmail.com
                </span>
              </p> */}
        </div>
      }
    />
  );
}
