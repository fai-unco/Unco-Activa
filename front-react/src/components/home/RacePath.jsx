import Slider from 'components/Slider'
import React from 'react'

const RacePath = props => {
  const [imagenActual, setImagenActual] = React.useState(0);
  
  const mockImagenes = [
    'elements/Recorrido-3k.jpg',
    'elements/Recorrido-7k.jpg',
    'elements/Recorrido-15k.jpg',
    'elements/Recorrido-25k.jpg'
  ]
  const cantidad = mockImagenes?.length;
  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  }

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  }
  return (
    <div className='bg-gray-light text-black'>
      <div className='grid justify-center p-5 '>
        <p  className='text-blue-dark text-3xl sm:text-4xl font-bold font-Hurme-Geometric-BO'>MAPA DEL RECORRIDO</p>
        <h1 className=' bg-yellow py-1 w-1/3 mt-5'> </h1>
      </div>      
      <div className=' flex justify-center pt-5  align-center items-center  text-gray  '>
        <div className='relative flex flex-row justify-between w-full sm:w-5/6 h-72 sm:h-96 md:h-96 lg:w-5/6 lg:h-[550px] xl:h-[750px] max-w-[1300px] items-center overflow-hidden'>
          <button className='bg-gray text-black  hover:bg-blue-cyan bg-opacity-70 h-10 w-10 rounded-full hover:text-gray-light z-20' onClick={anteriorImagen}>{/* ↶ */}{'<'}</button>
          {mockImagenes.map((imagen, index) => {
            return <img
              key={index}
              src={imagen}
              className={`absolute transition-all h-full w-full duration-[1600ms] ${imagenActual === index ? ' left-0 opacity-100' : ' left-full opacity-5'}`}
              alt="imagen" />
          })}
          <button className='bg-gray text-black hover:bg-blue-cyan bg-opacity-70 px-3 h-10 w-10 rounded-full hover:text-gray-light z-20' onClick={siguienteImagen}>{/* ↷ */}{'>'}</button>
        </div>
      </div>     
      <div className='flex flex-col justify-start items-start lg:items-center p-5'> 
        <h4 className="text-[1.7rem] text-blue-high font-bold font-Hurme-Geometric-BO">Estamos trabajando para ofrecerles un recorrido atractivo y seguro </h4>
        <p className='text-[1.3rem] lg:text-center font-Hurme-Geometric pt-2'>
          La idea de hacer los recorridos por vueltas surge principalmente para hacer algo diferente e innovador, al estilo de las carreras de cross-country, a campo traviesa, y para darle al público y familias un seguimiento y acompañamiento más cercano al corredor y priorizando la seguridad sin cruces de rutas y alejados del parque cerrado; y sobre todo utilizando el 100% de los circuitos de la barda en el predio perteneciente a la Universidad. Será una verdadera y auténtica carrera de trail netamente en tierra universitaria
        </p>
        <p className='text-[1.5rem] text-left font-Hurme-Geometric-N pt-2'>Las áreas involucradas son:</p>
        <div className={'grid grid-cols-4'}>
          <p className={' font-Hurme-Geometric col-span-4 text-[1.2rem] pb-5'}>
       Sector unco bardas, pista motocross, paseo agreste, sector canal 7, observatorio.
          </p>

        </div> 
      </div>   
           
    </div>
  )
}
export default RacePath