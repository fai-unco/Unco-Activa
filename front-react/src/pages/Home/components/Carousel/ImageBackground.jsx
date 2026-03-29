export default function ImageBackground({ bgColor = "", children }) {
  return (
    <div className="static">
      <div className={`absolute w-full inset-0 ${bgColor}`}>
        <div className="absolute inset-0 mix-blend-overlay opacity-100 bg-img-texture"/>
      </div>

      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}