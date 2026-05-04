import { useState } from "react";
import Gallery from "components/Gallery/Gallery";
import Title from "components/Title/Title"

export default function GalleryPage() {
  const [selected, setSelected] = useState(null);

  const editions = [
    { title: "Edición 2026", basePath: "/fotos/edicion2026", total: 400 },
    // { title: "Edición 2025", basePath: "/fotos/edicion2025", total: 0 },
  ];

  return (
    <div className="flex flex-col h-full w-full items-center font-Text-R px-3 md:px-12 my-7">
      <div className="flex flex-col w-full rounded-lg bg-gray-light text-black-unco p-5 gap-3">
        <Title text="Galería"/>
        {editions.map((ed) => (
          <Gallery
            key={ed.title}
            title={ed.title}
            basePath={ed.basePath}
            total={ed.total}
            selected={selected}
            setSelected={setSelected}
            seed={8}
          />
        ))}
      </div>
    </div>
  );
}