import React from 'react'

const Pagination = ({participantsPerPage, totalParticpants , paginateTo}) => {
  
  const pageNumbers = []
  for (let index = 0; index < Math.ceil(totalParticpants / participantsPerPage ); index++) {
    pageNumbers.push(index + 1)
        
  }
  return (
    <nav className='w-full flex pt-5 flex-col items-center'>

      <span className='text-sm text-gray-700 '>
              Mostrando <span className='font-semibold text-gray-900 dark:text-gray-darker'>1</span> a <span className='font-semibold text-gray-900 dark:text-gray-darker'>{participantsPerPage}</span> de <span className='font-semibold text-gray-900 dark:text-gray-darker'>{totalParticpants}</span> Entradas
      </span>
      <div className='inline-flex mt-2 xs:mt-0'>

        <button className='inline-flex items-center py-2 px-4 text-sm font-medium text-gray-darker bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-gray-darker'>
          <svg aria-hidden='true' className='mr-2 w-5 h-5' fillRule='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z' clipRule='evenodd'></path></svg>
                  Anterior
        </button>
        <ul className='inline-flex items-center -space-x-px'>
          { pageNumbers.map((numberOfpage) => (
            <li key={numberOfpage}>
              <button onClick={() => paginateTo(numberOfpage)} className='py-2 px-3 leading-tight text-white bg-gray-dark border-gray-300 hover:bg-gray-900 hover:text-gray-700 hover:bg-gray-darker'>{numberOfpage }</button>
            </li>
          )) }
                         
        </ul>
        <button className='inline-flex items-center py-2 px-4 text-sm font-medium text-gray-darker bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-gray-darker'>
                  Siguiente
          <svg aria-hidden='true' className='ml-2 w-5 h-5' fillRule='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule-rule='evenodd' d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
        </button>
      </div>
    </nav> 
  )
}

export default Pagination