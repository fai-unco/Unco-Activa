import Title from 'components/Title/Title';

export default function Organizers() {
  return (
    <div id="organizers" className="flex w-full bg-gray-light rounded-lg justify-center items-center gap-5 p-10">
      <div className="grid justify-center">
        <Title text="Organizadores" />

        <div className="grid grid-cols-3 items-center justify-center">
          <img
            className="col-span-1 justify-self-start"
            alt="Dirección de deportes y recreación"
            src={
              "/logos/unco/Logo Dirección de Deportes y Recreación 4-10.png"
            }
          />
          <img
            className="col-span-1 justify-self-center"
            alt="Unco"
            src={"/logos/unco/LOGO UNCO.png"}
          />
          <img
            className="col-span-1 justify-self-end"
            alt="Secretaria de Bienestar Universitario"
            src={"/logos/unco/Secretaría de Bienestar Universitario-01.png"}
          />
        </div>
      </div>
    </div>
  );
}
