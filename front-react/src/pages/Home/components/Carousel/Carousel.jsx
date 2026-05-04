import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Lightbox from 'components/Lightbox/Lightbox';
import CarouselItem from './CarouselItem';

export default function Carousel({imagenes}) {
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
  const current = useMemo(() => {
    return ((index - visible + cantidad) % cantidad);
  }, [index, visible, cantidad]);

  const startX = useRef(0);
  const isDragging = useRef(false);
  
  // Actualizar visible en resize
  useEffect(() => {
    let timeout;

    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setVisible(getVisible());
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Construir clones
  const extended = useMemo(() => {
    return [
      ...imagenes.slice(-visible),
      ...imagenes,
      ...imagenes.slice(0, visible),
    ];
  }, [imagenes, visible]);

  // Autoplay
  useEffect(() => {
  const interval = setInterval(() => {
      setIndex(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);  

  // Reset index si cambia visible
  useEffect(() => {
    setIndex(visible);
  }, [visible]);

  // Navegación
  const siguienteImagen = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex(prev => prev + 1);
  }, [isAnimating]);

  const anteriorImagen = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex(prev => prev - 1);
  }, [isAnimating]);

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

    if (index >= extended.length - visible) {
      // Loop hacia la derecha
      setTransition(false);
      setIndex(visible);
    }

    if (index < visible) {
      // Loop hacia la izquierda
      setTransition(false);
      setIndex(cantidad + visible - 1);
    }

    setIsAnimating(false);
  };

  const handleSelect = useCallback((idx) => {
    setSelectedImg(idx);
  }, []);

  // Reactivar transición
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  // Retorno prematuro para evitar errores.
  if(!Array.isArray(imagenes) || cantidad === 0) 
    return;
  
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="relative w-5/6">
        <div className="rounded-xl overflow-hidden">
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
            className={`flex w-full cursor-grab active:cursor-grabbing ${transition ? 'transition-transform duration-500' : ''}`}
            style={{
              transform: `translateX(-${(index - Math.floor(visible / 2)) * (100 / visible)}%)`
            }}            
          >
            {extended.map((img, i) => {
              const realIndex = (i - visible + imagenes.length) % imagenes.length;
              const isCenter = realIndex === current;
              
              return(
                <CarouselItem
                  key={i}
                  img={img}
                  isCenter={isCenter}
                  onClick={() => handleSelect(current)}
                />
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
          className={`absolute -left-10 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full z-20 bg-blue-dark-pastel text-white hover:bg-blue-cyan bg-opacity-70 ${isAnimating ? 'opacity-50' : ''}`}
          onClick={anteriorImagen}
        >
          {'<'}
        </button>
        <button
          disabled={isAnimating}
          className={`absolute -right-10 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full z-20 bg-blue-dark-pastel text-white hover:bg-blue-cyan bg-opacity-70 ${isAnimating ? 'opacity-50' : ''}`}
          onClick={siguienteImagen}
        >
          {'>'}
        </button>

      </div>
      
      {/* Lightbox */}
      {selectedImg !== null && (
        <div className="relative">
          <Lightbox photos={imagenes} selected={selectedImg} setSelected={setSelectedImg} />
        </div>
      )}      
    </div>
  )
}