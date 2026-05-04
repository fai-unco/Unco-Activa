import { createContext, useContext, useState, useRef } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const timeoutRef = useRef(null);

  const startNavigation = () => {
    setIsNavigating(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsNavigating(false);
    }, 800);
  };

  const scrollToSection = (id) => {
    const elem = document.getElementById(id);
    if (!elem) return;

    startNavigation();

    setTimeout(() => {
      elem.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <NavigationContext.Provider
      value={{
        isNavigating,
        startNavigation,
        scrollToSection,
        setIsNavigating,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);