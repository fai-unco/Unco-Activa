import React from 'react';

const RacePath = props => {
  const [imagenActual, setImagenActual] = React.useState(0);
  const [mostrarMapa, setMostrarMapa] = React.useState(false); // 👈 Control para mostrar/ocultar

  const mockImagenes = ['elements/recorrido2023.png'];
  const cantidad = mockImagenes?.length;

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  return (    
      <div className='w-full text-black-unco grid items-center justify-center p-10 gap-3'>
        <div className='flex flex-col items-center justify-center'>
          <div className='grid justify-center'>
            <h1 className='text-3xl sm:text-4xl font-bold font-Header-B'>
              El Recorrido
            </h1>
            <h1 className='bg-lime-unco py-1 w-1/3 mt-5'></h1>
          </div>
        </div>
        <div className="px-5">
          <p>
            La carrera <strong>UNCo Activa</strong>  es una invitación a recorrer un espacio de alto valor ecológico y educativo. El circuito se desarrolla íntegramente dentro del <strong>Área Protegida Parque Universitario Provincia del Monte</strong>, un sector de nuestra barda resguardado para la conservación y el estudio.
          </p>
          <p>
            Este espacio fue oficialmente creado mediante la <strong>Ordenanza Nº 714/2004</strong> sancionada por el <strong>Consejo Superior de la Universidad Nacional del Comahue</strong>. Dicha norma establece la protección de este ecosistema de estepa, reconociéndolo como un ambiente natural único que debe ser preservado frente al avance urbanístico. Correr aquí significa transitar por un aula abierta donde la biodiversidad es la protagonista.          
          </p>
        </div>
        <div className='px-5'>
          <h2 className='text-blue-cyan text-xl sm:text-2xl font-bold font-Header-B'>
            Características del Circuito          
          </h2>
          <ul className="list-disc">
            <li>
              <strong>Flora y Paisaje</strong>: El trazado permite apreciar ejemplares de jarillas, alpatacos y monte achaparrado, vegetación típica que ha sido protegida gracias a la gestión universitaria. El suelo, una combinación de arcilla y arena, ofrece la superficie auténtica de la meseta patagónica.
            </li>
            <li>
              <strong>Relieve y Desafío</strong>: Los senderos aprovechan las ondulaciones naturales del terreno. Los corredores enfrentarán pendientes que exigen resistencia, pero que recompensan con vistas panorámicas de la ciudad de Neuquén y el valle de los ríos Limay y Neuquén.
            </li>
            <li>
              <strong>Conciencia Ambiental</strong>: Al participar, asumimos el compromiso de respetar este entorno. La Ordenanza 714/2004 no solo protege las especies, sino que fomenta el uso responsable del área para actividades recreativas y deportivas de bajo impacto.
            </li>
          </ul>
          
        </div>
        <div className='px-5'>
          <p>
            <strong>UNCo Activa</strong> te invita a ser parte de la historia de nuestra Universidad, corriendo por senderos que son patrimonio de todos y que cuidamos entre todos.
          </p>
        </div>

        {/* Mostrar mapa solo si mostrarMapa es true */}
        {mostrarMapa && (
          <div className='flex justify-center py-5 align-center items-center text-gray'>
            <div className='relative flex flex-row justify-between w-full sm:w-5/6 h-72 sm:h-96 md:h-96 lg:w-5/6 lg:h-[550px] xl:h-[750px] max-w-[1300px] items-center overflow-hidden'>
              <button
                className='bg-gray text-black hover:bg-blue-cyan bg-opacity-70 h-10 w-10 rounded-full hover:text-gray-light z-20'
                onClick={anteriorImagen}
              >
                {'<'}
              </button>
              {mockImagenes.map((imagen, index) => (
                <img
                  key={index}
                  src={imagen}
                  className={`absolute transition-all h-full w-full duration-[1600ms] ${
                    imagenActual === index ? 'left-0 opacity-100' : 'left-full opacity-5'
                  }`}
                  alt='imagen'
                />
              ))}
              <button
                className='bg-gray text-black hover:bg-blue-cyan bg-opacity-70 px-3 h-10 w-10 rounded-full hover:text-gray-light z-20'
                onClick={siguienteImagen}
              >
                {'>'}
              </button>
            </div>
          </div>
        )}
      </div>
  );
};

export default RacePath;
