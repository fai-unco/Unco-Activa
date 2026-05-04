export default function Subtitle({ text = "" }) {
  return (
    <div className="grid">
        <p className="text-black-unco text-xl sm:text-2xl font-bold font-Header-B">
            {text}
        </p>
        <h1 className="bg-lime-unco py-1 w-1/3 mt-5"></h1>
    </div>
  );
}