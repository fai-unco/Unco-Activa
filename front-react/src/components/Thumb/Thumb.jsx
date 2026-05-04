import { useState } from "react";
import Spinner from "components/Spinner/Spinner";

export default function Thumb({ src, onClick }) {
  const [loading, setLoading] = useState(true);

  return (
    <div
      onClick={onClick}
      className="relative w-full h-52 overflow-hidden rounded-md cursor-pointer bg-gray-200"
    >
      {/* SPINNER */}
      {loading && (  
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <Spinner size={6}/>
        </div>
      )}

      {/* IMAGE */}
      <img
        src={src}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        className={`w-full h-full object-cover transition-opacity duration-200 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}