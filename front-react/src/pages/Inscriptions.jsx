import Pagination from 'components/elements/Pagination'
import React, { useEffect, useState } from 'react'
import axios from '../lib/axios'

const Inscriptions = () => {
  const [inscriptions, setinscriptions] = useState([])
  const [currentPage, setcurrentPage] = useState(1)
  const [participantsPerPage] = useState(10)
  const endpoint = 'https://uncoactiva-back.fi.uncoma.edu.ar/api'
  useEffect(() => {
    getAllInscriptos()
  }, [])
  const getAllInscriptos = async () => {
    await axios.get(`${endpoint}/frontInscriptions`)
      .then(function (response) {
        //console.log('success', response.data);
        setinscriptions(response.data)
      })
      .catch(function (error) {
        console.error('error', error.response);
      });
    //console.log(response.data)
  }
  //console.log('original', inscriptions);
  for (let index = 0; index < inscriptions.length; index++) {
    inscriptions[index].id = index + 1  
  }
  //console.log('reemplaazar id', inscriptions);

  const paginateTo = (pageNumber ) => {
    setcurrentPage(pageNumber)
  }

  const indexOfLastParticipant = currentPage * participantsPerPage
  const indexOfFisrtParticipant = indexOfLastParticipant  - participantsPerPage
  const currentParticpants = inscriptions.slice(indexOfFisrtParticipant, indexOfLastParticipant)
  //console.log(currentParticpants)
  const Particpants = () => {

    return (
      currentParticpants.map((inscription, index) => (
        <tr key={index} className='  bg-gray-light border-y border-blue-cyan'>

          <td className='text-center px-3'>
            {inscription.id}
          </td>

          <td className=' text-center  px-3'>
            {inscription.categorie_name}
          </td>
          <td className='text-center px-3'>
            {inscription.name + ' ' + inscription.surname}
          </td>

        </tr>
      ))    
    )
  }

  return (
    <div className="font-Hurme-Geometric-R min-h-screen">
      <div className="px-3 sm:px-10 md:px-20 lg:px-32 py-7 ">
        <div className=' bg-gray-light rounded-lg text-black'>
          <div className='py-10'>
            <div className='grid justify-center px-5 sm:px-5 lg:px-16 py-5'>
              <p className='text-blue-dark text-3xl sm:text-4xl font-bold font-Hurme-Geometric-BO'>Participantes</p>              
              <h1 className=' bg-yellow py-1 w-1/3 mt-5'> </h1>
            </div>

            <p className='flex justify-center text-lg  font-Hurme-Geometric-Nd'>
                Lista de participantes actualmente aceptados
            </p>   

            <div className='overflow-x-auto pb-5'>    
              <table className='font-Hurme-Geometric-N w-full px-1'>
                <thead>
                  <tr className='font-Hurme-Geometric-BO italic text-blue-dark'>
                    <th className='px-3'>#</th>
                    <th className='px-3'>CATEGORIA</th>
                    <th className='px-3'>NOMBRE Y APELLIDO</th>                    
                  </tr>
                </thead>
                <tbody>
                                   
                  <Particpants />
                  
                </tbody>
                
              </table> 
              <Pagination participantsPerPage={participantsPerPage} totalParticpants={inscriptions.length} paginateTo={paginateTo} />
            </div >
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inscriptions