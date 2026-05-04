import { useState, useEffect, useMemo } from "react";

export default function TablaResultados({ year, category = "15K", gender = "o", search=""}) {
  const [datos, setDatos] = useState(null);
  useEffect(() => {
    fetch("/resultados/resultados.json")
      .then((res) => res.json())
      .then(setDatos);
  }, []);

  // if (!datos || !datos[year] || !datos[year][category] || datos[year][category].length === 0) {
  //   return (
  //     <div className="flex w-full bg-gray rounded-xl animate-pulse"> </div>
  //   );
  // }

  const genderMap = {
    m: "Masculino",
    f: "Femenino",
    o: "Overall",
  };

  const data = datos?.[year]?.[category] ?? [];
  const columnas = data.length > 0 ? Object.keys(data[0]) : [];  

  const filteredData = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    const searchedData = data.filter((row) => {
      if (!normalizedSearch) return true;

      const nombre = (row.Nombre ?? "").toLowerCase();
      const dorsal = String(row.Dorsal ?? "").toLowerCase();

      return nombre.includes(normalizedSearch) || dorsal.includes(normalizedSearch);
    });

    return gender === "o"
      ? searchedData
      : searchedData.filter((row) => row.Género === genderMap[gender]);
  }, [data, search, gender]);

  return (
    <div className="flex h-full w-full">
      {/* Tabla */}
      {filteredData.length !== 0 
      ?
        <table
          className="border-separate border-spacing-[2px]"
          border="1"
          cellPadding="2"
        >
          <thead>
            <tr className="">
              <td className="bg-[#ffb366] rounded-md px-2" colSpan="16">
                RESULTADOS {category} {genderMap[gender].toUpperCase()}
              </td>
            </tr>
            <tr className="">
              {columnas.map((col) => (
                <th
                  className="bg-[#ffb366] text-left rounded-md whitespace-nowrap font-normal px-2"
                  key={col}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((fila, i) => (
                <tr className={`text-white`} key={i}>
                  {columnas.map((col) => (
                    <td
                      className={`whitespace-nowrap rounded-md px-2 ${i % 2 === 0 ? "bg-blue-dark-pastel" : "bg-blue-light-pastel"}`}
                      key={col}
                    >
                      {fila[col]}
                    </td>
                  ))}
                </tr>
              ))
            }
          </tbody>
        </table>
      : 
        <div className="flex w-full h-full">
          Sin resultados{search !== "" ? ` para la busqueda "${search}"`:""}.
        </div>
      }
      
    </div>
  );
}
