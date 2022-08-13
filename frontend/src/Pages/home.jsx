import React from 'react'
import Hero from '../components/Hero'

const home = () => {
    return (
        <div className="">
            <div>
                <Hero />
            </div>
            <div className='text-[2rem] text-center py-5'>
                <h1>Horario: 11:00hs</h1>
                <h1>Fecha: 8 de Septiembre de 2019</h1>
                <h1>Lugar: Polideportivo Beto Monteros (Gimnasio Escondido)</h1>
            </div>

            <div className='py-5 text-sm'>

                <div className="grid lg:grid-cols-2 px-5 md:px-16">
                    <div className="px-2">
                        <h3 className="text-[2rem] text-yellow py-5">Requisitos de la carrera</h3>
                        <h4 className="text-[1.1rem] text-yellow py-3">Quien participa</h4>
                        <p className=""> Toda persona que cumpla los requisitos de la inscripción. La modalidad de dicha carrera se va a dar en grupos conformados por dos o cuatro personas.</p>
                        <h4 className="text-[1.1rem] text-yellow py-3">¿Como ganar?</h4>
                        <p className=""> Para ganar van a tener que realizar los siguientes pasos:</p>
                        <p className=""><b>Recolección de residuos en bolsas por la cantidad de integrantes</b>; si el equipo es conformado por dos personas deberán recolectar una bolsa completa. Si es de cuatro, se deberá recolectar dos bolsas completas de residuos.</p>
                        <p className=""><b>Contestar las trivias que se encuentran en el camino.</b> Las mismas serán levantadas por código QR, para lo cual cada equipo deberá llevar un teléfono celular que se va a presentar al finalizar la carrera. </p>
                        <p className=""><b>Tiempo de carrerar del circuito completo.</b> El equipo que menos tarda en hacer todos los pasos será el ganador</p>

                        <div className="">
                            <a href="" className="">Regístrate</a>
                        </div>
                    </div>

                    <div className="px-2">
                        <h3 className="text-[2rem] text-yellow py-5">Premiación</h3>
                        <p className=""> Todos los participantes recibirán una bolsa de tela con un kit: remera + botella de agua. Esta última, la podrán recargar en
                            los distintos puestos de hidratación. De esta forma, se reducirán los vasos plásticos que se utilicen en la carrera. Además se indicarán los premios que se entregarán por categoría
                            sin diferenciar en grupos etarios.</p>
                        <h4 className="text-[1.1rem] text-yellow">Categoria Running:</h4>
                        <p className=""><b>Equipos de cuatro personas:</b></p>
                        <ol>
                            <li>$6000 para el equipo.</li>
                            <li>$4000 para el equipo.</li>
                            <li>$2800 para el equipo.</li>
                        </ol>
                        <p className=""><b>Equipos de dos personas: </b></p>
                        <ol>
                            <li>$3000 para el equipo.</li>
                            <li>$2000 para el equipo.</li>
                            <li>$1400 para el equipo.</li>
                        </ol>
                        <h4 className="text-[1.1rem] text-yellow">Categoria Recreativa:</h4>
                        <p><b>Equipos de cuatro personas: </b> tres primeros puestos. <b>Equipos de dos personas: </b> tres primeros puestos</p>
                        <h4 className="text-[1.1rem] text-yellow">PREMIOS de Natural Shanti</h4>
                        <ol>
                            <li>Dos bolsas con productos de Natural Shanti para cada uno de los participantes del equipo.</li>
                            <li>Un voucher por un desayuno + un acompañante para cada integrante del equipo.</li>
                            <li>Una bolsa con productos de Natural Shanti para cada uno de los participantes del equipo.</li>
                        </ol>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default home