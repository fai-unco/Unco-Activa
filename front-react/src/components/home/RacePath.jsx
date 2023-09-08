import React from 'react'

const RacePath = props => {
  const [imagenActual, setImagenActual] = React.useState(0);
  
  const mockImagenes = [
    'elements/unco-activa-recorridos.jpg'
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
      <div className=' flex justify-center py-5  align-center items-center  text-gray  '>
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
    </div>
  )
}
export default RacePath