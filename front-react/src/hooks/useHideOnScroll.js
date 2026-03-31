import { useEffect, useState } from "react";

export default function useHideOnScroll() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // ignorar movimientos pequeños
      if (Math.abs(currentScroll - lastScroll) < 10) return;

      if (currentScroll < 60) {
        setShow(true);
      } else if (currentScroll > lastScroll) {
        setShow(false); // bajando
      } else {
        setShow(true); // subiendo
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return show;
}