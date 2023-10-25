import React from 'react'
import { Link } from 'react-router-dom'
import Fab from '@mui/material/Fab';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';


const ShortRegulation = props => {
  return (
    <div id={'shortRegulation'} className=' px-3 md:px-12 lg:px-0 py-7 '>
      <div className='bg-gray-light flex flex-col lg:flex-row rounded-lg xl:max-h-[850px] lg:rounded-none text-black'>
              
        <div className='lg:min-w-[50%] xl:min-w-[25%] xl:max-h-full '>
          <img className='w-full h-full  lg:block justify-self-end' alt='feed story' src={'elements/placa-reglamento.png'} />
          
        </div>

        <div id='reglamento' className={'p-5 lg:pl-10'}>
          <div className='grid justify-center pt-5 '>
            <p className='text-blue-dark text-3xl sm:text-4xl font-bold font-Hurme-Geometric-BO'>REGLAMENTO</p>
            <h1 className=' bg-yellow py-1 w-1/3 mt-5'> </h1>
          </div>
          <p className='text-[1.2rem] text-blue-high font-bold pt-5 font-Hurme-Geometric-BO'>Responsabilidades: <span className='font-Hurme-Geometric-N font-normal'>Al inscribirse, el participante acepta el presente reglamento y declara:</span> 
          </p>
          <ul className='pl-5 py-3 list-decimal'>
            <li>Es responsabilidad del participante estar bien preparado para la prueba Esto es, gozar de buena salud en general, así como tener un nivel aceptable de preparación. La inscripción en una prueba no asegura ni cubre esta responsabilidad.</li>
            <li>La organización recomienda que todos los participantes se realicen un control médico previo a la carrera para asegurarse estar apto para el evento.</li>
            <li>Es obligatorio completar la ficha de inscripción publicada en forma on line en el sitio oficial de la carrera.</li>
            <li>La organización, a través de los fiscales autorizados, se reserva el derecho de interrumpir la participación de aquellos competidores que por su condición se considere que están poniendo en riesgo su integridad física, en caso de ser indicado, es obligación del participante hacer caso a la misma. De no respetarse, será descalificado y la responsabilidad corre por cuenta del propio participante.</li>
          </ul> 
          <h4 className="text-[1.2rem] text-blue-high font-bold pt-5 font-Hurme-Geometric-BO">Disciplina</h4>
          <p className="">Trail de 3 km, 7 km y 15 km.</p>
          <h4 className="text-[1.2rem] text-blue-high font-bold pt-5 font-Hurme-Geometric-BO">PREMIACIÓN</h4>
          <p>Prueba de 15Km</p>
          <ul className='list-decimal pl-5 font-Hurme-Geometric-Nd'>
            <li>Medalla de Finalista a todos los que crucen la meta.</li>
            <li>Medallones a los 1°, 2°, 3° de cada categoría masculina y femenina.</li>
          </ul>
          
          <div className='flex xl:pt-8 xl:pb-1 justify-center xl:my-0 my-5 px-2 -z-0 relative'>
            <Link to={'/reglamento'}>
              <Fab color="primary" variant='extended'>
                <LibraryBooksOutlinedIcon className='mr-3'/> Ver reglamento completo
              </Fab>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShortRegulation