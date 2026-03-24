import { useState, useEffect, useRef } from 'react';

function Carousel({imagenes}){
  // Variables y estados
  const cantidad = imagenes?.length;

  // Visibles según pantalla
  const getVisible = () => {
    const w = window.innerWidth;
    // if (w >= 1024) return 3;
    if (w >= 640) return 3;
    return 1;
  };

  const [visible, setVisible] = useState(getVisible());
  const [index, setIndex] = useState(visible);
  const [transition, setTransition] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const startX = useRef(0);
  const isDragging = useRef(false);
  
  // Actualizar visible en resize
  useEffect(() => {
    const handleResize = () => setVisible(getVisible());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Construir clones
  const extended = [
    ...imagenes.slice(-visible),
    ...imagenes,
    ...imagenes.slice(0, visible),
  ];

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setIndex(prev => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  // Reset index si cambia visible
  useEffect(() => {
    setIndex(visible);
  }, [visible]);

  // Navegación
  const siguienteImagen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex(prev => prev + 1);
  };

  const anteriorImagen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex(prev => prev - 1);
  };

  // Drag
    const handleStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = startX.current - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) siguienteImagen();
      else anteriorImagen();
      isDragging.current = false;
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  // Loop
  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;

    if (index === extended.length - visible) {
      setTransition(false);
      setIndex(visible);
    }

    if (index === 0) {
      setTransition(false);
      setIndex(cantidad + visible - 1);
    }

    setIsAnimating(false);
  };

  // Reactivar transición
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  const current = ((index - visible + cantidad) % cantidad);

  // Retorno prematuro para evitar errores.
  if(!Array.isArray(imagenes) || cantidad === 0) 
    return;
  
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="relative w-5/6">
        <div className="h-[350px] xl:h-[450px] rounded-xl overflow-hidden">
          {/* Track */}
          <div
            onTransitionEnd={handleTransitionEnd}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
            draggable={false}
            className={`flex h-full cursor-grab active:cursor-grabbing ${transition ? 'transition-transform duration-500' : ''}`}
            style={{
              transform: `translateX(-${(index - Math.floor(visible / 2)) * (100 / visible)}%)`
            }}            
          >
            {extended.map((img, i) => {
              const realIndex = (i - visible + imagenes.length) % imagenes.length;
              const isCenter = realIndex === current;
              return(
                <div
                  key={i}
                  className={`overflow-hidden rounded-xl flex-shrink-0 w-full sm:w-1/3 flex items-center justify-center bg-hero-pattern bg-cover bg-center ${isCenter ? 'scale-100 opacity-100 z-10' : 'scale-90 opacity-50'}`}
                >
                  {/* overlay */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-black/30 z-10">
                      
                    </div>
                  )}

                  <img
                    draggable={false}
                    onClick={() => setSelectedImg(img)}
                    src={img}
                    className="select-none max-h-full max-w-full object-contain"
                    alt=""
                  />
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {imagenes.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === current ? 'bg-blue-cyan' : 'bg-gray-darker/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Botones */}
        <button
          disabled={isAnimating}
          className={`absolute -left-10 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full z-20 bg-gray-darker hover:bg-blue-cyan bg-opacity-70 ${isAnimating ? 'opacity-50' : ''}`}
          onClick={anteriorImagen}
        >
          {'<'}
        </button>
        <button
          disabled={isAnimating}
          className={`absolute -right-10 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full z-20 bg-gray-darker hover:bg-blue-cyan bg-opacity-70 ${isAnimating ? 'opacity-50' : ''}`}
          onClick={siguienteImagen}
        >
          {'>'}
        </button>

      </div>
      
      {/* Modal para mostrar imagen al clickear */}
      {selectedImg && (
        <div
          className="
            fixed inset-0 
            bg-black/80 
            flex items-center justify-center 
            z-50
          "
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            className="max-h-[90%] max-w-[90%] object-contain"
            onClick={(e) => e.stopPropagation()} // evita cerrar al clickear la imagen
          />
        </div>
      )}
    </div>
  )
}

export default Carousel