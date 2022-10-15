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
    if(currentPage < 3){
      startPage = 1;
      endPage = 6;
    }
    else{

      startPage = currentPage - 2;
      if (startPage !== totalPages && (startPage + 4) !== totalPages) {
        if(currentPage > totalPages - 3){
          endPage = totalPages + 1;
        }
        else {
          endPage = currentPage + showMax - 1;     
        }
      }      
      else {
        endPage = totalPages;
      }     
    }    
  }
  for (let index = startPage; index < endPage; index++) {
    pageNumbers.push(index )    
    // pageNumbers.pop(startPage)        
  }  
  return (
    <nav className='flex flex-col flex-w pt-5  items-center'>

      <span className='text-sm text-gray-700 '>
              Mostrando <span className='font-semibold text-gray-900 dark:text-gray-darker'></span><span className='font-semibold text-gray-900 dark:text-gray-darker'>{participantsPerPage}</span> de <span className='font-semibold text-gray-900 dark:text-gray-darker'>{totalParticpants}</span> Participantes
      </span>
      <div className='inline-flex flex-row gap-1 mt-2 xs:mt-0'>
        <button onClick={() => paginateTo(1)} className={` ${currentPage === 1 ? 'invisible' : '' } inline-flex items-center py-2 px-1 text-sm font-medium text-gray-darker bg-gray-800  border-gray-700 hover:bg-gray-900  dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-gray-darker`}>
                  Primero
        </button>
        <button onClick={() => paginateTo(currentPage - 1)} className={` ${currentPage === 1 ? 'invisible' : ''} inline-flex items-center py-2 px-3 text-sm font-medium text-gray border-gray-light  border-0 border-r `}>
          <svg aria-hidden='true' className=' w-5 h-5' fillRule='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z' clipRule='evenodd'></path></svg>
                  
        </button>
        <ul className='inline-flex w-10 md:w-auto justify-evenly items-center -space-x-px'>
          { pageNumbers.map((numberOfpage) => (                             
            <li key={numberOfpage} >
              <button onClick={() => paginateTo(numberOfpage)} className={` ${currentPage === numberOfpage ? 'bg-blue-cyan sm:block ' : 'bg-gray-dark hidden md:block' } py-2 px-3 leading-tight text-white   hover:bg-blue-cyan border-gray-300  hover:text-gray-700`}>{numberOfpage }</button>
            </li>
              
          )) }
                         
        </ul>
        <button onClick={() => paginateTo(currentPage + 1)} className={` ${currentPage === Math.ceil(totalParticpants / participantsPerPage) ? 'invisible' : ''} inline-flex items-center py-2 px-3 text-sm font-medium text-gray-darker bg-gray-800   border-gray-700 hover:bg-gray-900  dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-gray-darker`}>
                  
          <svg aria-hidden='true' className='ml-2 w-5 h-5' fillRule='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
        </button>
        <button onClick={() => paginateTo(Math.ceil(totalParticpants / participantsPerPage))} className={` ${currentPage === Math.ceil(totalParticpants / participantsPerPage) ? 'invisible' : ''} inline-flex items-center py-2 px-1 text-sm font-medium text-gray-darker bg-gray-800   border-gray-700 hover:bg-gray-900  dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-gray-darker`}>
          Ultimo
        </button>
        
      </div>
    </nav> 
  )
}

export default Pagination