export default function Background({ bgColor = "bg-cyan-unco", children }) {
  return (
    <div className="relative">      
      <div className={`absolute w-full inset-0 ${bgColor}`}>
        <div className="absolute inset-0 mix-blend-overlay opacity-100 bg-texture"/>        
      </div>

      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}