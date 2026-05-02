import { routes } from "routes/routes";
import { Fab } from "@mui/material";
import Title from 'components/Title/Title';
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { useNavigate } from "react-router-dom";

export default function Information() {
  const navigate = useNavigate();
  
  return (
    <div id="information" className="rounded-lg bg-gray-light text-black-unco grid p-10 gap-3" >
      <div className="flex flex-col ">
        <Title text="Información" />
        <div className="flex flex-col gap-5">
          
          <div className="flex flex-col gap-4 my-2">
            <h1 className="text-[1.5rem] font-Header-B text-yellow">
              !Importante!
            </h1>

            {/* Anuncio fecha y lugar de entrega de kit */}
            {/* <div>
              <h1 className="text-[1.5rem] font-Text-R font-black text-blue-cyan">
                Entrega de Kits de corredor:
              </h1>
              <p className="text-[1.4rem] font-Text-R">
                Viernes 24 de abril de 15 a 19 horas en el Hall Central de la
                Universidad Nacional del Comahue (Buenos Aires 1400).
              </p>
            </div>

            <div>
              <h1 className="text-[1.5rem] font-Text-R font-black text-blue-cyan">
                Cierre de inscripciones:
              </h1>
              <p className="text-[1.4rem] font-Text-R">
                Viernes 24 de abril / 10:30 hs
              </p>
            </div> */}

            {/* Fecha de la carrera */}
            {/* <div>
              <h1 className="text-[1.5rem] font-Text-R font-black text-blue-cyan">
                Fecha y lugar de la carrera:
              </h1>
              <p className="text-[1.4rem] font-Text-R">
                Sabado 25 de abril / 15:00hs. Universidad Nacional del Comahue -
                Neuquén Capital
              </p>
            </div> */}

            {/* Resultados */}
            <div className="">
              <h1 className="text-[1.5rem] font-Text-R font-black text-blue-cyan">
                Resultados:
              </h1>
              <div className="flex gap-2 flex-wrap">
                <p className="text-[1.4rem] font-Text-R">
                  Se encuentran disponibles los resultados de la 8º Edición de la carrera, año 2026.
                </p>
                <div className="flex gap-4 align-center items-center">
                  <p className="text-[1.4rem] font-Text-R">
                    Podés verlos en la sección
                  </p>
                  <div className="flex -z-0">
                    <Fab
                      color="primary"
                      variant="extended"
                      size="small"
                      onClick={
                        () => {
                          navigate(routes.resultados);
                        }
                      }
                    >
                      <LibraryBooksOutlinedIcon className="mr-3" /> Resultados
                    </Fab>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center w-full">
          <div className="w-full md:w-2/3 rounded-lg p-2">
            <img
              className="rounded-lg"
              alt="feed story"
              src={"elements/edicion2026/Lanzamiento.png"}
            />
          </div>

          <div className="flex flex-col items-center p-5 gap-5 lg:w-2/3">
            <h4 className="text-[1.5rem] font-Header-B font-black text-blue-cyan">
              Costos de Inscripción año 2026
            </h4>
            {/* Costos hardcodeados, mejorar haciendo llamada a la api (con datos en BD) */}
            <ul className="list-disc pl-5">
              <p className="font-Header-B">Comunidad en general:</p>
              <li>15 km $55000.</li>
              <li>7 km $50000.</li>
              <li>3 km $40000. </li>
              <br />

              <p className="font-Header-B">
                Comunidad Universitaria (estudiantes, docentes, nodocentes,
                personas graduadas):
              </p>
              <li>15 km $50000.</li>
              <li>7 km $45000.</li>
              <li>3 km $35000.</li>
            </ul>

            <p className="pt-2">
              <span className="font-Header-B">Incluye: </span>
              Derecho a participación / Remera técnica / Servicios de control /
              Servicio de hidratación / Seguro de corredor.
            </p>

            <p className="pt-2 font-bold">
              A los participantes que hayan completado la inscripción y el pago,
              pero decidan posteriormente no participar en la carrera, no se les
              reembolsará el importe abonado.
            </p>

            <div className="flex -z-0">
              <Fab
                color="primary"
                variant="extended"
                onClick={
                  () => {                    
                    navigate(routes.preinscribirse);
                  }
                }
              >
                <LibraryBooksOutlinedIcon className="mr-3" /> Ir a
                Preinscripciones
              </Fab>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
