import { useState } from "react";
import TablaResultados from "pages/Results/components/TablaResultados";
import TabButton from "components/TabButton/TabButton";
import Title from "components/Title/Title";
// import CsvToJson from "utils/CsvToJson";

export default function Results() {
	const [anio, setAnio] = useState(2026);
  const [categoria, setCategoria] = useState("15K");
  const [genero, setGenero] = useState("o");

  /* Tabs / filtros */
  const anios = [2026, 2025];
  const categorias = ["15K", "7K"];	
  const generos = [
    {
      name: "Overall",
      letter: "o",
    },
    {
      name: "Femenino",
      letter: "f",
    },
    {
      name: "Masculino",
      letter: "m",
    },
  ];

  return (
    <div className="flex flex-col h-full w-full items-center font-Text-R px-3 md:px-12 my-7">
      <div className="flex flex-col w-full rounded-lg bg-gray-light text-black-unco p-5 gap-3">
        <Title text="Resultados" />

				{/* Desde xlsx se puede exportar a csv. Con este componente, es posble parsear de csv a json. */}
				{/* <CsvToJson/> */}

        {/* Filtros */}
        <div className="flex gap-6 flex-wrap items-center">
          {/* Select anio */}
          <div className="flex gap-4 items-center">
            <p> Año: </p>
            <select
              value={anio}
              onChange={(e) => setAnio(Number(e.target.value))}
              className="flex flex-wrap rounded-full bg-blue-light-pastel text-white border-white"
            >
              {anios.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          {/* Tab categoria */}
          <div className="flex gap-6 items-center">
            <p> Categoría: </p>
            <div className="flex flex-wrap gap-4">
              {categorias.map((c) => (
                <TabButton
                  key={c}
                  onClick={() => setCategoria(c)}
                  active={categoria === `${c}`}
                >
                  {c}
                </TabButton>
              ))}
            </div>
          </div>

          {/* Tab genero */}
          <div className="flex gap-6 items-center">
            <p> Género: </p>
            <div className="flex flex-wrap gap-4">
              {generos.map((g) => (
                <TabButton
                  key={g.letter}
                  onClick={() => setGenero(g.letter)}
                  active={genero === `${g.letter}`}
                >
                  {g.name}
                </TabButton>
              ))}
            </div>
          </div>
        </div>
				
        {/* Tabla */}
        <div className="flex min-h-[50vh] h-full w-full justify-center overflow-scroll">
          <TablaResultados year={anio} category={categoria} gender={genero} />
        </div>
      </div>
    </div>
  );
}
