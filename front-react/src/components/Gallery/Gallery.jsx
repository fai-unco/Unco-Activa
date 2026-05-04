import { useState, useMemo } from "react";
import GalleryGrid from "./GalleryGrid";
import Lightbox from "components/Lightbox/Lightbox";
import Subtitle from "components/Subtitle/Subtitle";

export default function Gallery({ title, basePath, total, selected, setSelected, seed = Math.floor(Math.random() * 1000000), pageSize = 20, }) {

  // generador de seed
  function mulberry32(seed) {
    return function () {
      let t = (seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  //Mezcla array de fotos
  function shuffleWithSeed(array, seed) {
    const arr = [...array];
    const random = mulberry32(seed);

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

  const [page, setPage] = useState(0);
  const photos = useMemo(() => {
    const list = Array.from({ length: total }, (_, i) => {
      const num = String(i + 1).padStart(3, "0");
      return {
        full: `${basePath}/full/${num}.webp`,
        thumb: `${basePath}/thumb/${num}_thumb.webp`,
      };
    });

    return shuffleWithSeed(list, seed);
  }, [basePath, total, seed]);

  const start = page * pageSize;
  const visiblePhotos = photos.slice(start, start + pageSize);

  const nextPage = () => {
    setPage((p) => Math.min(p + 1, Math.floor(photos.length / pageSize)));
  };

  const prevPage = () => {
    setPage((p) => Math.max(p - 1, 0));
  };

  return (
    <div className="space-y-3">
      <Subtitle text={title}/>      

      <GalleryGrid
        photos={visiblePhotos}
        startIndex={start}
        onSelect={(index) => setSelected(index)}
      />

      {/* PAGINACIÓN */}
      <div className="flex justify-center gap-4 text-center">
        <button className="flex bg-blue-light-pastel text-white rounded-xl justify-center h-6 w-6" onClick={prevPage} disabled={page === 0}>
          {"<"}
        </button>

        <span>
          Página {page + 1} / {Math.ceil(photos.length / pageSize)}
        </span>

        <button className="flex bg-blue-light-pastel text-white rounded-xl justify-center h-6 w-6" onClick={nextPage} disabled={start + pageSize >= photos.length}>
          {">"}
        </button>
      </div>
      
      {/* LIGHTBOX GLOBAL */}
      {selected !== null && (
        <div className="relative">
          <Lightbox
            photos={photos}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      )}
    </div>
  );
}