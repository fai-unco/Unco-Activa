import React from 'react'

const RacePath = props => {
  return (
    <div className='bg-gray-light text-black'>
      <div className='grid justify-center p-5 '>
        <p  className='text-blue-dark text-3xl sm:text-4xl font-bold font-Hurme-Geometric-BO'>MAPA DEL RECORRIDO</p>
        <h1 className=' bg-yellow py-1 w-1/3 mt-5'> </h1>
      </div>
      <iframe  title='Uncoactiva' width="100%" className='h-96 md:h-[700px]' frameBorder="0" allowFullScreen src="//umap.openstreetmap.fr/es/map/unco-activa_817845?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"></iframe>
      <div className='flex justify-center my-5 px-2'>
        <a 
          href="//umap.openstreetmap.fr/es/map/unco-activa_817845"  
          className='border-2 border-gray-800 rounded-full px-5 py-1 text-black hover:border-white hover:bg-white hover:text-black bg-opacity-0 ease-in-out duration-[1500ms]'>
                  Ver en pantalla completa
        </a>
      </div> 
      <div className='flex flex-col justify-center items-center my-5 px-10 pb-5'> 
        <h4 className="text-[1.7rem] text-blue-high font-bold pt-10 font-Hurme-Geometric-BO">Estamos trabajando para ofrecerles un recorrido atractivo y seguro </h4>
        <p className='text-[1.5rem] font-Hurme-Geometric-N pt-2'>Las áreas involucradas son:</p>
        <div className={'grid grid-cols-4'}>
          <p className={'col-span-4 text-[1.2rem]'}>
       Sector unco bardas, pista motocross, paseo agreste , sector canal 7, observatorio.
          </p>

        </div>    
      </div>       
    </div>
  )
}
export default RacePath