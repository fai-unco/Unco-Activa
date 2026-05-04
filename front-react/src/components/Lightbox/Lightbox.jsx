import { useEffect, useState } from "react";
import Spinner from "components/Spinner/Spinner";

export default function Lightbox({ photos, selected, setSelected }) {
  const [loading, setLoading] = useState(true);
  const [visibleSrc, setVisibleSrc] = useState(null);

  const current = photos[selected];

  // cuando cambia la imagen seleccionada
  useEffect(() => {
    setLoading(true);
    setVisibleSrc(null);
  }, [selected]);

  const handleLoad = (src) => {
    setVisibleSrc(src);
    setLoading(false);
  };

  const next = () => {
    setSelected((prev) => (prev + 1) % photos.length);
  };

  const prev = () => {
    setSelected((prev) => (prev - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected]);

  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"               
    >
      {/* CONTENEDOR */}
      <div className="relative flex items-center justify-center w-full h-full">
        
        {/* LOADING */}
        {loading && (
          <Spinner size={6}/>
        )}

        {/* SOLO SE RENDERIZA CUANDO YA CARGÓ */}
        <img
          key={current.full}
          src={current.full}
          onLoad={() => handleLoad(current.full)}
          onError={() => setLoading(false)}
          className={`max-w-[90%] max-h-[85%] rounded-lg transition-opacity duration-200 ${
            visibleSrc ? "opacity-100" : "opacity-0"
          }`}
          style={{ display: visibleSrc ? "block" : "none" }}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {/* CLOSE */}
      <button
        onClick={() => setSelected(null)}
        className="absolute top-4 right-4 text-white text-3xl"
      >
        ✕
      </button>

      {/* PREV */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl"
      >
        {"<"}
      </button>

      {/* NEXT */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl"
      >
        {">"}
      </button>

      <div className="absolute bottom-12 text-white text-sm">
        {selected + 1} / {photos.length}
      </div>
    </div>
  );
}