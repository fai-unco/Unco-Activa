import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigation } from "context/NavigationContext";

import Avisos from "pages/Home/components/Avisos";
import Hero from "pages/Home/components/Hero";
import Main from "pages/Home/components/Main";
import Information from "pages/Home/components/Information";
import RacePath from "pages/Home/components/RacePath";
import ShortRegulation from "pages/Home/components/ShortRegulation";
import Organizers from "pages/Home/components/Organizers";
import ContacUs from "pages/Home/components/ContacUs";

export default function Home() {
  const location = useLocation();
  const { setIsNavigating } = useNavigation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const elem = document.getElementById(id);

    if (!elem) return;

    setIsNavigating(true);

    setTimeout(() => {
      elem.scrollIntoView({ behavior: "smooth" });
    }, 50);

    setTimeout(() => {
      setIsNavigating(false);
    }, 700);
  }, [location.hash]);

  return (
    <div className="flex flex-col items-center font-Text-R px-3 md:px-12 pb-7 gap-5">
      {/* Avisos */}
      <Avisos/>

      {/* Hero */}
      <Hero />

      {/* Main */}
      <Main/>

      {/* Información */}
      <Information/>      

      <div className="flex flex-col lg:flex-row w-full gap-5">
        {/* Recorrido */}
        <RacePath />

        {/* Reglamento */}
        <ShortRegulation />
      </div>
      
      <div className="flex flex-col xl:flex-row w-full gap-5">
        {/* Organizadores */}
        <Organizers />

        {/* Contacto */}
        <ContacUs />
      </div>
    </div>
  );
};
