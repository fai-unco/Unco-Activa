import React from 'react'

const AboutUs = () => {
  const devs = [
    {
      'name': 'Cristian Garrado',
      'socials': {
        'github': 'https://github.com/cristian96-code',
        'linkedin': 'https://www.linkedin.com/in/cristian-garrado-517a23209/',
        'envelope': 'cristiangarrado45@gmail.com'
      },
      'image': 'aboutUs/CG.png'
    },
    {
      'name': 'Santiago Avilez Ariza',
      'socials': {
        'github': 'https://github.com/santiagoavilez',
        'linkedin': 'https://www.linkedin.com/in/santiago-avilez-ariza-431b5a203/',
        'instagram': 'https://www.instagram.com/santiago_avilez_box/',
        'envelope': 'santiago.avilez@est.fi.uncoma.edu.ar'        
      },
      'image': 'aboutUs/SA.png'
    },
    {
      'name': '',      
      'image': ''
    },
    {
      'name': '',
      'image': ''
    },
    {
      'name': '',
      'image': ''
    },
    {
      'name': '',
      'image': ''
    },
    {
      'name': '',
      'image': ''
    }
  ]

  const shuffled = devs
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  return (
    <div className="font-Hurme-Geometric-R min-h-screen">

      <div className='px-3 md:px-12 py-7'>
        
        <div className=" rounded-lg bg-gray-light ">
          <h2 className="text-[1.8rem] text-center p-5 font-Hurme-Geometric-BO text-blue-dark">Equipo de Desarrolladores Unco Activa 2022 </h2>
          <hr className="my-[1rem]" />
          <div className='flex justify-center'> 

            <div className=" pb-3 md:p-10 w-full  lg:w-3/4 justify-center grid grid-cols-1 md:grid-cols-2  gap-5">
              {shuffled.map((dev, index) => (
            
                dev.socials ?  
                  <div key={index} className="flex flex-col justify-center items-center">

                    <img src={dev.image ? dev.image : ''} alt={devs.name}
                      className="w-8/12 rounded-full" />             
              
                    <div>
                      <h2 className="my-3"> {dev.name ? dev.name : ''}</h2>
                    </div>              
                         
                    <div className="flex  items-center justify-between ">               
                      <a href={'mailto:' + dev.socials.envelope} className="mx-1 w-5 md:w-10 fill-[#183153]" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                        </svg>
                      </a>                                       
                      <a href={dev.socials.github} className="mx-1 w-5 md:w-10 fill-[#183153]" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </a>                    
                      <a href={dev.socials.linkedin} className="mx-1 w-5 md:w-10 fill-[#183153]" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                      </a> 
                      {dev.socials.instagram ? 
                        <a href={dev.socials.instagram} className="mx-1 w-5 md:w-10 fill-[#183153]" target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                          </svg>
                        </a> : '' }                    
                    </div> 
                  
                  </div>
                  : ''
                
              ))}
            
            </div>
          
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default AboutUs
