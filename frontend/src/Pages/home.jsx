import React from 'react'
import Hero from '../components/Hero'
import Slider from '../components/Slider'

const mockImagenes = [
    './Remera frente 1.png',
    './Remera Espalda 1.png',
    './0_mockup 1.png'
  ]

const home = () => {
    return (
        <div className="font-Hurme-Geometric-N">
            <div>
                <Hero />
            </div>
            <div className="px-5 md:px-12 py-7">
                <div className=' bg-gray rounded-lg bg-opacity-95 text-black'>
                    <div className='flex justify-center pt-5'>
                        <Slider imagenes={mockImagenes} className='bg-white' />
                    </div>
                    
                    <div className='text-[1.8rem] text-center p-5 font-Hurme-Geometric-BO text-blue-dark'>
                        <h1 className=''>{/* Horario: */}22 OCT / 11 HRS</h1>
                        <h1>{/* Fecha: 22 de octubre */}</h1>
                        <h1>{/* Lugar: */} Sede Central - Neuquén Capital</h1>
                    </div>

                    <div className='py-5'>
                        <div className="grid sm:grid-cols-2 px-5 lg:px-16">
                            <div className="sm:px-5">
                                {/* <h1 className='font-Hurme-Geometric-BO text-blue-dark text-[7rem]'>50 AÑOS</h1>
                                <h1 className='font-Hurme-Geometric-BO text-blue-dark text-[2.6rem]'>CARRERA ANIVERSARIO</h1> */}
                                <img src='elements/50añosconbajada_gris.png'></img>
                                <h1 className=' bg-yellow py-1 w-1/4 mt-5'></h1>
                                <h4 className="text-[1.1rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">UNCoActiva, se viste de fiesta para celebrar el 50 Aniversario de la Universidad Nacional del Comahue</h4>
                                <p className=""> Y con este evento, rememoramos que, en el año 1965, a través de la Ley Nº 414, se crea la Universidad del Neuquén.</p>
                                <div className='flex justify-center'>
                                    <img src='dosser.png' className='py-2'></img>
                                </div>
                            </div>

                            <div className="sm:px-5">
                                <p>
                                El 29 de septiembre de 1964, el poder ejecutivo
                                neuquino elevó a la Legislatura, el proyecto
                                de creación de la casa de altos estudios.
                                Finalmente, el 15 de julio de 1971, el poder
                                ejecutivo nacional sanciona y promulga, la ley
                                19.117; por la cual se crea, nuestra querida
                                casa de altos estudios, la Universidad
                                Nacional del Comahue
                                </p>
                                <h4 className="text-[1.3rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">¿Cómo nace UNCoActiva?</h4>
                                <p className="">
                                Este espacio se crea en el año 2017 basado
                                en la necesidad de fomentar los espacios de
                                actividad física dentro de la Institución y la
                                sociedad toda con el fin de mejorar sus estilos
                                de vida.
                                Considerando las tendencias actuales, en
                                donde el deporte se ha transformado en una
                                necesidad socio-cultural y física, la demanda
                                de corredores, caminantes y recreacionistas
                                crece día a día. Es también una oportunidad
                                para interactuar entre los integrantes de la
                                comunidad universitaria y la comunidad en
                                general ya que esta propuesta incluye la
                                actividad física (carrera-caminata), cultural
                                (bandas de música y grupos de baile) y
                                nutri c ión (di s tintas propues tas de
                                alimentación), lo que pretende ser un
                                verdadero intercambio social.
                                En el marco de este programa, nace una
                                propuesta deportiva que se realiza una vez al
                                año como el evento deportivo más importante
                                que organiza la UNCo.
                                </p>

                                <h4 className="text-[1.1rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">
                                La primera edición se celebró en el
                                año 2017 y éste 2022, redoblamos
                                la apuesta, celebrando el 50
                                aniversario de la Universidad
                                Nacional del Comahue
                                </h4>

                                <h1 className='text-blue-dark text-[2rem] font-bold font-Hurme-Geometric-BO'>¿Porqué apoyar UNCo Activa?</h1>
                                <h1 className=' bg-yellow py-1 w-1/4 mt-5'></h1>
                                <p className="text-[1.1rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">
                                La propuesta UNCo Activa pretende
                                afianzarse en la ciudad de Neuquén
                                como uno de los eventos deportivos
                                y culturales más importantes,
                                posicionando e institucionalizando
                                la marca UNCo Activa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home