export default function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full transition font-medium border ${
        active
          ? "bg-blue-light-pastel text-white border-gray-900 shadow-md"
          : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100 hover:shadow-sm"
      }`}
    >
      {children}
    </button>
  );
}