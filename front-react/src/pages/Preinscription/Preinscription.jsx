import React from 'react'
import BoxCategories from 'components/inscriptionform/boxCategories';
import Title from 'components/Title/Title';

const Preinscription = () => {
  return (
    
    <div className="font-Text-R ">
      <div className="px-3 sm:px-10 md:px-20 lg:px-32 py-7 ">
        <div className=' bg-gray-light rounded-lg text-black'>          
          <div className='py-10'>
            <Title text="Preinscripción"/>
            <div className="px-3 sm:px-10 lg:px-12">
              <h4 className="text-[1.2rem] text-blue-high font-bold pt-5 font-Header-B">Recorrido</h4>
              <p className="">El recorrido de los 15km, será por senderos de barda y calles.  El recorrido de los 7km será por barda pero de dificultad baja. Y por último, los 3km de la caminata será por senderos accesibles casi sin desnivel.</p>
            </div>
            <BoxCategories />
          </div >    
        </div>
      </div>
    </div>    
  )
}

export default Preinscription