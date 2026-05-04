export default function Spinner({ size = 12 }) {
  const sizes = {
    6: "w-6 h-6",
    8: "w-8 h-8",
    10: "w-10 h-10",
    12: "w-12 h-12",
  };

  return (
    <div
      className={`${sizes[size] || sizes[12]} border-2 border-white/30 border-t-white rounded-full animate-spin`}
    />
  );
}