/* eslint-disable quotes */
import React from 'react'

const Pagination = ({participantsPerPage, totalParticpants , paginateTo, currentPage}) => {

  const pageNumbers = []
  const totalPages = Math.ceil(totalParticpants / participantsPerPage)
  let showMax = 4;
  let endPage
  let startPage;

  if (totalPages <= showMax) {
    startPage = 1;
    endPage = totalPages;
  }
  else {
    // estoy en el principio de la paginacion
    if(currentPage < 3){
      startPage = 1;
      endPage = currentPage + showMax - 1;
    }
    // estoy mas adelante del 3
    else{
      startPage = currentPage - 2;
      //verifico que no este en el final de la paginacion y muestro 5 paginas max
      if (startPage !== totalPages && ((startPage + showMax) < totalPages)) {        
        endPage = currentPage + showMax - 1;   
      }      
      else {
        endPage = totalPages;
      }     
    }    
  }
  for (let index = startPage; index <= endPage; index++) {
    pageNumbers.push(index )    
    // pageNumbers.pop(startPage)        
  }  
  return (
    <nav className='flex flex-col flex-w pt-5  items-center'>

      <span className='text-sm text-gray-700 '>
              Mostrando <span className='font-semibold text-gray-900 dark:text-gray-darker'></span><span className='font-semibold text-gray-900 dark:text-gray-darker'>{participantsPerPage}</span> de <span className='font-semibold text-gray-900 dark:text-gray-darker'>{totalParticpants}</span> Participantes
      </span>
      <div className='inline-flex flex-row mt-2 xs:mt-0 '>      
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button onClick={() => paginateTo(currentPage - 1)} className={` ${currentPage === 1 ? 'invisible' : ''} block py-2 px-3 ml-0 leading-tight  rounded-l-lg border-2 border-r-0  text-white bg-gray-dark border-black hover:border-blue-cyan hover:bg-blue-cyan`}>
              <span className="sr-only">Previous</span>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            </button>
          </li>
          <li>
            <button onClick={() => paginateTo(1)} className={` ${currentPage < 4 ? 'hidden' : '' } block py-2 px-3 ml-0 leading-tight  border-2 border-r-0 text-white bg-gray-dark border-black hover:border-blue-cyan hover:bg-blue-cyan`}>
              {'... 1' }
            </button>
          </li>
          {pageNumbers.map((numberOfpage) => (
            <li key={numberOfpage} >
              <button onClick={() => paginateTo(numberOfpage)} className={` ${currentPage === numberOfpage ? 'bg-blue-cyan border-blue-cyan sm:block ' : 'bg-gray-dark hidden md:block'} border-2 border-r-0 py-2 px-2 leading-tight text-white   hover:border-blue-cyan hover:bg-blue-cyan border-black  hover:text-gray-700`}>{numberOfpage}</button>
            </li>

          ))}
          <li>
            <button onClick={() => paginateTo(totalPages)} className={` ${currentPage > totalPages - 4 ? 'hidden' : ''} block py-2 px-3 ml-0 leading-tight  border-2  text-white bg-gray-dark border-black hover:border-blue-cyan hover:bg-blue-cyan`}>
              {'...' + totalPages}
            </button>
          </li>          
          <li>
            <button onClick={() => paginateTo(currentPage + 1)} className={` ${currentPage === Math.ceil(totalParticpants / participantsPerPage) ? 'invisible' : ''} block py-2 px-3 ml-0 leading-tight  rounded-r-lg border-2  text-white bg-gray-dark border-black hover:border-blue-cyan hover:bg-blue-cyan`}>
              <span className="sr-only">Next</span>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </button>
          </li>
        </ul>
      </div>
    </nav> 
  )
}

export default Pagination