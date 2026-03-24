import React from "react";

const AvatarPlaceholder = ({ name, size = 100, bgColor = "#777", textColor = "#fff" }) => {
  // Obtener iniciales (primeras letras de cada palabra)
  const initials = name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%", // circular
        backgroundColor: bgColor,
        color: textColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size / 3.5, // tamaño proporcional
        fontWeight: "bold",
        userSelect: "none"
      }}
    >
      {initials}
    </div>
  );
};

export default AvatarPlaceholder;