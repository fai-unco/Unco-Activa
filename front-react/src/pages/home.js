import ContacUs from 'components/home/ContacUs';
import RacePath from 'components/home/RacePath';
import ShortRegulation from 'components/home/ShortRegulation';
import Hero from 'components/Layouts/Hero';
import Slider from 'components/Slider';

const mockImagenes = [
  'elements/Remera_FRENTE.jpg',
  'elements/Remera_ESPALDA.jpg',
  'elements/Remera_1.png',
  'elements/Remera_1_b.png',
  'elements/UNCO_ACT_50_FEED_1.jpg',
  'elements/UNCO_ACT_50_FEED_2.jpg',
  'elements/UNCO_ACT_50_FEED_3.jpg',
  'elements/UNCO_ACT_50_FEED_4.jpg'
]
const isdateOfRace = Date.now() > new Date('October 19, 2022 12:00:00') 

const Home = () => {  
  return (    
    <div className="font-Hurme-Geometric-R min-h-screen">
      <div>
        <Hero />
      </div>
      <div  className="px-3 md:px-12 py-7 ">
        <div className=' bg-gray-light rounded-lg text-black'>
          <div className='flex justify-center pt-5'>
            <Slider imagenes={mockImagenes} className='bg-white' />
          </div>

          <div id='conoceMas' className='text-[1.8rem] text-center p-5 font-Hurme-Geometric-BO text-blue-dark'>
            <h1 className=''>22 OCT / 11 HRS</h1>
            <h1>Sede Central - Neuquén Capital</h1>
          </div>

          <div className='py-5 '>
            <div className='px-5 sm:px-5 lg:px-16'>
              <p className='text-blue-dark text-3xl sm:text-4xl font-bold font-Hurme-Geometric-BO'>Requisitos de la carrera</p>
              <h1 className=' bg-yellow py-1 w-1/6 mt-5'> </h1>
            </div>
            <div className="grid sm:grid-cols-2 px-5 lg:px-16">
              <div className="sm:px-5">
                <h4 className="text-[1.2rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">Quien participa</h4>
                <p className="">Toda persona que cumpla los requisitos de la inscripción. La modalidad de dicha carrera se va a dar en forma individual.</p>
                <h4 className="text-[1.2rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">¿Como ganar?</h4>
                <p>Los y las participantes deberán:</p>
                <ul className='list-decimal pl-5'>
                  <li>Realizar el recorrido en el menor tiempo posible.</li>
                  <li>No podrán utilizar vehículos ni acortar el recorrido.</li>
                  <li>No se puede ser asistido por otras personas en competencia (fair play).</li>
                  <li>La largada será común para todas las distancias. Deberán seguir las marcas.</li>
                </ul>
                <h4 className="text-[1.2rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">Servicios, Asistencia, Hidratación y Controles</h4>
                <ul className='list-decimal pl-5'>
                  <li>En un punto intermedio del recorrido y en la llegada se montarán puestos de asistencia e hidratación.</li>
                  <li>A lo largo del recorrido se establecerán controles de paso de los corredores y las corredoras en donde habrá colaboradores con remeras.</li>
                  <li>
                  El Mercado concentrador nos acompaña en nuestro trail aniversario 50 años sabiendo de la importancia que es la unco para toda la región y nos dan apoyo logístico en la provisión de toda las frutas para un stand saludable y los puestos de hidratación para toda la carrera.
                  </li>
                </ul>
                <h4 className="text-[1.2rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">Remera de competencia y numero de identificación de corredor</h4>
                <p>La remera de corredor será de uso obligatorio con el número abrochado en el frente de la misma. Los participantes deberán hacer uso del chip, en el caso de que se utilice como sistema de clasificación.</p>
                <p className='font-Hurme-Geometric-BO text-blue-dark'>Acreditaciones: <span className='font-Hurme-Geometric-N'>El participante deberá asistir a las acreditaciones, los días:</span></p>
                <ul className='list-decimal pl-5 text-blue-high font-Hurme-Geometric-BO'>
                  <li>Jueves 20 de oct de 18 a 21 hs.</li>
                  <li>viernes 21 de oct de 12.00 a 16 hs.</li>
                  
                </ul>
                <p className='mt-3'><span className='font-Hurme-Geometric-N'>Ubicaion: </span>Buenos Aires 1400</p>
                <p>Para retirar su remera, número y chip, y firmar el deslinde de responsabilidad.</p>
              </div>

              <div className="sm:px-5">
                <h4 className="text-[1.2rem] text-blue-high font-bold pt-5 font-Hurme-Geometric-BO">Inscripciones</h4>
                <p>El costo de la inscripción para cada distancia es el siguiente:</p>
                <ul className='list-disc pl-5'>
                  <li>25 km tiene un costo de $5500 por participante.</li>
                  <li>15 km tiene un costo de $4000 por participante.</li>
                  <li>7 km tiene un costo de $3000 por participante</li>
                  <li>3 km tiene un costo de $2500 por participante. Es sin clasificación ni premiación.</li>
                </ul>

                <p className='pt-2'><span className='font-Hurme-Geometric-N'>Incluye: </span>
                    Derecho a participación / Remera técnica / servicios de control / servicio de hidratación seguro de corredor.
                </p>
                <p className='pt-1'><span className='font-Hurme-Geometric-N'>ATENCIÓN COMUNIDAD UNIVERSITARIA: </span>
                    Presentado certificado de alumno regular, y en el caso de docentes y no docentes mediante número de legajo, acceden a precios promocionales.
                </p>
                <ul className='list-disc pl-5 pt-2'>
                  <li>25 km tiene un costo de $4000 por participante.</li>
                  <li>15 km tiene un costo de $3000 por participante.</li>
                  <li>7 km tiene un costo de $2500 por participante.</li>
                  <li>3 km tiene un costo de $2000 por participante. Es sin clasificación ni premiación.</li>
                </ul>                
                
                {!isdateOfRace ? 
                  <>
                    <h4 className="text-[1.2rem] text-blue-high pt-5 font-Hurme-Geometric-BO">MODO DE INSCRIPCIÓN:</h4>
                    <p className=''>Las inscripciones se realizan vía Internet en la web:
                    Pago únicamente por transferencia:</p>
                    <ul className='list-none py-3'>
                      <li className='font-Hurme-Geometric-N'>Banco Credicoop Cooperativo Limitado</li>
                      <li><span className='font-Hurme-Geometric-N'>Adherente:</span> Universidad Nacional del Comahue.</li>
                      <li><span className='font-Hurme-Geometric-N'>Operador:</span> 549505 Roberto Antonio Sepulveda.</li>
                      <li><span className='font-Hurme-Geometric-N'>Nro. Cuenta – Cuenta Corriente:</span> $191-093-024908/9</li>
                      <li><span className='font-Hurme-Geometric-N'>CBU:</span> 19100933-55009302490896</li>
                    </ul>
                    <p className='text-blue-high text-[1.2rem] font-Hurme-Geometric-BO'>Una vez hecha la transferencia se deberá  adjuntar en el formulario de inscripción, en caso de tener algún inconveniente comunicarse a nuestro <a className='text-yellow' href='mailto:uncoactiva@gmail.com'> email </a> 
                    </p> 
                  </> : ' '}
                
              </div>
            </div>
            <div className='px-5 sm:px-5 lg:px-16 pt-10'>
              <p className='text-blue-dark text-3xl sm:text-4xl font-bold font-Hurme-Geometric-BO'>Premiación categorías de los 25 , 15 y 7 KM:</p>
              <h1 className=' bg-yellow py-1 w-1/6 mt-5'> </h1>
            </div>
            <div className="grid sm:grid-cols-2 px-5 lg:px-16">
              <div className='sm:px-5'>
                <p className='text-[1.2rem] text-blue-high pt-5 font-Hurme-Geometric-BO'>
                    Premiación por categoría por edades, tanto en la rama femenina y masculina
                </p>
                <ul className='list-disc pl-5 pt-2'>
                  <li>Hasta 19 años</li>
                  <li>Hasta 29 años</li>
                  <li>Hasta 39 años</li>
                  <li>Hasta 49 años</li>
                  <li>Hasta 59 años</li>
                  <li>+ 60 años</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-7  items-center justify-center p-5'>
            <h1 className="text-center col-span-7 text-[2rem] mt-5 md:text-[2.5rem] font-Hurme-Geometric-BO text-blue-dark" fill="currentColor">
                SPONSORS
            </h1>
            <img alt='logo ijan' className='col-span-7 justify-self-center p-5 w-1/3 lg:w-2/3 lg:mt-0 lg:col-span-1' src={'/logos/logo-ijan.svg'} />
            <img width='100%' className='col-span-4 lg:col-span-2 p-5 ' alt='logo deporte y gob' src={'/logos/logo-deporte-y-gob.svg'} />
            <img width='100%' className='col-span-4 lg:col-span-2 p-5' alt='logo deporte y gob' src={'/logos/Marca_ANAAR_Positiva.svg'} />
            <img width='80%' className='col-span-4 lg:col-span-2 p-5  lg:m-0 justify-self-center' alt='logo muni' src={'/logos/logo-muni.png'} />
          </div>
          <div className='grid justify-center pb-5'>
            <h1 className="text-center text-[2rem]  md:text-[2.5rem] font-Hurme-Geometric-BO text-blue-dark" fill="currentColor">
                ORGANIZADORES
            </h1>
              
            <div id='racePath' className='grid grid-cols-3 gap-5 items-center justify-center p-5'>
              <img className='col-span-1 h-24 md:h-[180px] justify-self-end' alt='logo ijan' src={'/logos/Logo Dirección de Deportes y Recreación 4-10.png'} />                
              <img  className='col-span-1 h-24 md:h-[180px] justify-self-center ' alt='logo ijan' src={'/logos/LOGO UNCO PNG.png'} />
                
              <img className='col-span-1 h-24 md:h-[180px] justify-self-start bg-gray-darker' alt='logo ijan' src={'/logos/Secretaría de Bienestar Universitario-02.png'} />
            </div>
            <div >
            </div>
          </div>
        </div>

      </div>

      <RacePath  />
      <ShortRegulation />
      <div id='contactUs'className='flex justify-center px-3 md:px-12 py-7 '>
        <ContacUs />
      </div>
    </div>  
  );
}

export default Home;
