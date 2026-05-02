import Carousel from "pages/Home/components/Carousel/Carousel";
import Title from 'components/Title/Title';
import { Fab } from "@mui/material";
import { routes } from "routes/routes";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import { useNavigate } from "react-router-dom";

const mockImagenes = [
  "elements/edicion2026/Lanzamiento2.png",
  "elements/edicion2026/edicion-anterior1.jpeg",
  "elements/edicion2026/edicion-anterior2.jpeg",
  "elements/edicion2026/edicion-anterior3.jpeg",
  "elements/edicion2026/edicion-anterior4.jpeg",
  "elements/edicion2026/edicion-anterior5.jpeg",
  "elements/edicion2026/edicion-anterior6.jpeg",
  "elements/edicion2026/edicion-anterior7.jpeg",
  "elements/edicion2026/edicion-anterior8.jpeg",
  "elements/edicion2026/edicion-anterior9.jpeg",
];

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className="">
      <div id="conoceMas" className="flex flex-col bg-gray-light rounded-lg text-black-unco gap-8 py-10">
        <div className="flex flex-col justify-center items-center gap-5" >
          <Title text="La Carrera de la UNCo" />
        </div>

        {/* <hr className="my-[1rem] text-black-unco"></hr> */}
        <div className="flex flex-col gap-3 w-full items-center relative">
          <Carousel imagenes={mockImagenes} className="bg-white" />
          <div className="flex -z-0">
            <Fab              
              color="primary"
              variant="extended"
              onClick={
                () => {
                  navigate(routes.galeria);
                }
              }
              size="large"
            >
              <PhotoLibraryOutlinedIcon className="mr-3"/> Galería
            </Fab>
          </div>
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
  );
}
