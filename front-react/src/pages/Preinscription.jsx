import React from 'react'
import BoxCategories from 'components/inscriptionform/boxCategories';

const Preinscription = (categories) => {
  return (
    
    <div className="font-Hurme-Geometric-R min-h-screen">
      <div className="px-3 sm:px-10 md:px-20 lg:px-32 py-7 ">
        <div className=' bg-gray-light rounded-lg text-black'>          
          <div className='py-10'>
            <div className='grid justify-center px-5 sm:px-5 lg:px-16 py-5'>
              <p className='text-blue-dark text-3xl sm:text-4xl font-bold font-Hurme-Geometric-BO'>Inscripción</p>
              <h1 className=' bg-yellow py-1 w-1/3 mt-5'> </h1>                
            </div>
            <div className="px-3 sm:px-10 lg:px-12">
              <h4 className="text-[1.2rem] text-blue-high font-bold pt-5 font-Hurme-Geometric-BO">Recorrido</h4>
              <p className="">Tanto el recorrido de los 25km como el de 15km, será por senderos de barda y calles.  El recorrido de los 7km será por barda pero de dificultad baja. Y por último, los 3km de la caminata será por senderos accesibles casi sin desnivel.</p>
            </div>
            <BoxCategories categories={categories} />
          </div >    
        </div>
      </div>
    </div>    
  )
}

export default Preinscription