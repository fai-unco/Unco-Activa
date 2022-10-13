import React from 'react'
import { Link } from 'react-router-dom'

const ShortRegulation = props => {
  return (
    <div id={'shortRegulation'} className=' px-3 md:px-12 lg:px-0 py-7 '>
      <div className='bg-gray-light flex flex-col lg:flex-row rounded-lg xl:max-h-[850px] lg:rounded-none text-black'>
              
        <div className='lg:min-w-[50%] xl:min-w-[25%] xl:max-h-full '>
          <img className='w-full h-full rounded-t-lg lg:hidden justify-self-end' alt='logo ijan' src={'elements/UNCO_ACT_50_FEED_1.jpg'} />
          <img className='w-full hidden h-full  lg:block justify-self-end' alt='feed story' src={'elements/UNCO_ACT_50_ST_1.jpg'} />
          
        </div>

        <div id='reglamento' className={'p-5 lg:pl-10'}>
          <div className='grid justify-center pt-5 '>
            <p className='text-blue-dark text-3xl sm:text-4xl font-bold font-Hurme-Geometric-BO'>REGLAMENTO</p>
            <h1 className=' bg-yellow py-1 w-1/3 mt-5'> </h1>
          </div>
          <p className='font-Hurme-Geometric-BO pt-5 '>Responsabilidades: <span className='font-Hurme-Geometric-N'>Al inscribirse, el participante acepta el presente reglamento y declara:</span> 
          </p>
          <ul className='pl-10 py-3'>
            <li>a) Saber que habrá lugares a los que no se puede acceder con vehículos, con lo cual la atención médica inmediata es limitada.</li>
            <li>b) Conocer las características del terreno y los riesgos posibles de lesiones traumatológicas como torceduras, esguinces, incluso fracturas y, que por razones de seguridad, la organización priorizará la atención y evacuación de las emergencias y urgencias médicas, considerándose como tales a aquellos casos que puedan evolucionar en riesgo de muerte, pudiendo demandar más tiempo que la atención de lesiones como las antes descriptas.</li>
            <li>c) Eximir a los Organizadores, Municipios, Propietarios de las tierras del circuito de la carrera y los Patrocinantes de toda responsabilidad por accidentes personales; daños y/o pérdidas de objetos que pudiera ocurrirle antes, durante o después de su participación en la prueba.</li>
          </ul> 
          <h4 className="text-[1.2rem] text-blue-high font-bold pt-5 font-Hurme-Geometric-BO">Disciplina</h4>
          <p className="">Trail de 3K, 7K, 15K y 25K.</p>
          <h4 className="text-[1.2rem] text-blue-high font-bold pt-5 font-Hurme-Geometric-BO">Recorrido</h4>
          <p className="">Tanto el recorrido de los 25km como el de 15km, será por senderos de barda y calles.  El recorrido de los 7km será por barda pero de dificultad baja. Y por último, los 3km de la caminata será por senderos accesibles casi sin desnivel.</p>
          <h4 className="text-[1.2rem] text-blue-high font-bold pt-5 font-Hurme-Geometric-BO">Formato de Calificación</h4>
          <p>Los y las participantes deberan:</p>
          <ul className='list-decimal pl-5'>
            <li>Realizar el recorrido en el menor tiempo posible.</li>
            <li>No podrán utilizar vehículos ni acortar el recorrido.</li>
            <li>No se puede ser asistido por otras personas en competencia (fair play).</li>
            <li>La largada será común para todas las distancias. Deberán seguir las marcas.</li>
          </ul>        

          <div className='flex xl:pt-8 xl:pb-1 justify-center xl:my-0 my-5 px-2'>
            <Link 
              to={'/reglamento'}
              className='border-2 border-gray-800 rounded-full px-5 py-1 text-black hover:border-white hover:bg-white hover:text-black bg-opacity-0 ease-in-out duration-1000'>
                          Ver reglamento completo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShortRegulation